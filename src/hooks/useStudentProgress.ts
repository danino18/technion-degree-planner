/**
 * Hook for managing student progress and preferences
 * Handles localStorage persistence
 */

import { useState, useEffect, useCallback } from 'react';
import { StudentProgress, SemesterPlan, StudentCourseProgress } from '@/types/course';

const STORAGE_KEY_PREFIX = 'technion_planner_';
const PLANS_INDEX_KEY = 'technion_planner_plans_index';

export function useStudentProgress(planId: string) {
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const storageKey = `${STORAGE_KEY_PREFIX}${planId}`;
      const stored = localStorage.getItem(storageKey);
      
      if (stored) {
        setProgress(JSON.parse(stored));
      } else {
        // Create new plan if doesn't exist
        const newPlan: StudentProgress = {
          planId,
          name: `Study Plan ${new Date().toLocaleDateString()}`,
          completedCourses: {},
          currentSemester: 1,
          selectedSpecializations: [],
          plannedSemester: [],
          lastUpdated: new Date().toISOString(),
        };
        setProgress(newPlan);
        savePlan(newPlan);
      }
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load progress');
      setLoading(false);
    }
  }, [planId]);

  const savePlan = useCallback((planData: StudentProgress) => {
    try {
      const storageKey = `${STORAGE_KEY_PREFIX}${planData.planId}`;
      localStorage.setItem(storageKey, JSON.stringify(planData));
      
      // Update index of plans
      updatePlansIndex(planData);
      setProgress(planData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save progress');
    }
  }, []);

  const updatePlansIndex = (plan: StudentProgress) => {
    try {
      const index = JSON.parse(localStorage.getItem(PLANS_INDEX_KEY) || '[]');
      const existingIndex = index.findIndex((p: any) => p.planId === plan.planId);
      
      if (existingIndex >= 0) {
        index[existingIndex] = {
          planId: plan.planId,
          name: plan.name,
          lastUpdated: plan.lastUpdated,
        };
      } else {
        index.push({
          planId: plan.planId,
          name: plan.name,
          lastUpdated: plan.lastUpdated,
        });
      }
      
      localStorage.setItem(PLANS_INDEX_KEY, JSON.stringify(index));
    } catch (err) {
      console.error('Failed to update plans index:', err);
    }
  };

  const markCourseCompleted = useCallback(
    (courseCode: string, grade: number) => {
      if (!progress) return;
      
      const updated = { ...progress };
      updated.completedCourses[courseCode] = {
        courseCode,
        completed: true,
        dateCompleted: new Date().toISOString(),
        grade,
        credits: 0, // Will be populated from course data
      };
      updated.lastUpdated = new Date().toISOString();
      
      savePlan(updated);
    },
    [progress, savePlan]
  );

  const markCourseIncomplete = useCallback(
    (courseCode: string) => {
      if (!progress) return;
      
      const updated = { ...progress };
      delete updated.completedCourses[courseCode];
      updated.lastUpdated = new Date().toISOString();
      
      savePlan(updated);
    },
    [progress, savePlan]
  );

  const updatePlanName = useCallback(
    (name: string) => {
      if (!progress) return;
      
      const updated = { ...progress, name };
      updated.lastUpdated = new Date().toISOString();
      
      savePlan(updated);
    },
    [progress, savePlan]
  );

  const updateSpecializations = useCallback(
    (specializations: string[]) => {
      if (!progress) return;
      
      const updated = { ...progress, selectedSpecializations: specializations };
      updated.lastUpdated = new Date().toISOString();
      
      savePlan(updated);
    },
    [progress, savePlan]
  );

  const updatePlannedSemesters = useCallback(
    (planned: SemesterPlan[]) => {
      if (!progress) return;
      
      const updated = { ...progress, plannedSemester: planned };
      updated.lastUpdated = new Date().toISOString();
      
      savePlan(updated);
    },
    [progress, savePlan]
  );

  return {
    progress,
    loading,
    error,
    markCourseCompleted,
    markCourseIncomplete,
    updatePlanName,
    updateSpecializations,
    updatePlannedSemesters,
  };
}

/**
 * Hook to get all saved plans
 */
export function useStudentPlans() {
  const [plans, setPlans] = useState<Array<{ planId: string; name: string; lastUpdated: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const index = JSON.parse(localStorage.getItem(PLANS_INDEX_KEY) || '[]');
      setPlans(index);
      setLoading(false);
    } catch (err) {
      console.error('Failed to load plans index:', err);
      setLoading(false);
    }
  }, []);

  const deletePlan = useCallback((planId: string) => {
    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}${planId}`);
      const index = JSON.parse(localStorage.getItem(PLANS_INDEX_KEY) || '[]');
      const updated = index.filter((p: any) => p.planId !== planId);
      localStorage.setItem(PLANS_INDEX_KEY, JSON.stringify(updated));
      setPlans(updated);
    } catch (err) {
      console.error('Failed to delete plan:', err);
    }
  }, []);

  return { plans, loading, deletePlan };
}
