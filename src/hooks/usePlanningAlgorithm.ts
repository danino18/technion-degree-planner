/**
 * Semester planning algorithm
 * Auto-generates recommended semester-by-semester study plan
 */

import { useCallback } from 'react';
import { Course, SemesterPlan } from '@/types/course';
import { courses, getCourseByCode } from '@/data/courses';
import { prerequisites } from '@/data/prerequisites';

const MAX_CREDITS_PER_SEMESTER = 28; // Technion typical max
const MIN_CREDITS_PER_SEMESTER = 18;

export function usePlanningAlgorithm() {
  /**
   * Generate optimal semester plan
   * 
   * Algorithm:
   * 1. Sort courses by semester and prerequisites
   * 2. Fill semesters respecting max credits
   * 3. Ensure prerequisites are taken before dependent courses
   * 4. Account for specialization selections
   */
  const generateSemesterPlan = useCallback(
    (
      interestedCourses: string[],
      selectedSpecializations: string[],
      preferredCreditsPerSem: number = 24
    ): SemesterPlan[] => {
      const plan: SemesterPlan[] = [];
      const scheduled = new Set<string>();
      const prerequisitesSatisfied = new Set<string>();

      // Group courses by semester
      const coursesBySemester: Record<number, Course[]> = {};
      courses.forEach(c => {
        if (!interestedCourses.includes(c.code)) return;
        
        const sem = c.semester || 8;
        if (!coursesBySemester[sem]) coursesBySemester[sem] = [];
        coursesBySemester[sem].push(c);
      });

      // Process semesters 1-8
      for (let semester = 1; semester <= 8; semester++) {
        const semesterCourses: string[] = [];
        let semesterCredits = 0;

        // Add courses recommended for this semester
        const recommendedCourses = coursesBySemester[semester] || [];
        
        for (const course of recommendedCourses) {
          if (
            !scheduled.has(course.code) &&
            semesterCredits + course.credits <= preferredCreditsPerSem &&
            arePrerequisitesSatisfied(course.code, prerequisitesSatisfied)
          ) {
            semesterCourses.push(course.code);
            semesterCredits += course.credits;
            scheduled.add(course.code);
            prerequisitesSatisfied.add(course.code);
          }
        }

        // Add other available courses if under credit limit
        for (const course of courses) {
          if (
            !scheduled.has(course.code) &&
            interestedCourses.includes(course.code) &&
            semesterCredits + course.credits <= preferredCreditsPerSem &&
            arePrerequisitesSatisfied(course.code, prerequisitesSatisfied)
          ) {
            semesterCourses.push(course.code);
            semesterCredits += course.credits;
            scheduled.add(course.code);
            prerequisitesSatisfied.add(course.code);
          }
        }

        if (semesterCourses.length > 0) {
          plan.push({
            semester,
            courses: semesterCourses,
            totalCredits: semesterCredits,
          });
        }
      }

      return plan;
    },
    []
  );

  /**
   * Validate that a plan respects all constraints
   */
  const validatePlan = useCallback(
    (plan: SemesterPlan[]): { valid: boolean; errors: string[] } => {
      const errors: string[] = [];
      const seen = new Set<string>();

      for (const semester of plan) {
        let creditsSum = 0;

        for (const courseCode of semester.courses) {
          const course = getCourseByCode(courseCode);
          if (!course) {
            errors.push(`Semester ${semester.semester}: Unknown course ${courseCode}`);
            continue;
          }

          if (seen.has(courseCode)) {
            errors.push(`Course ${courseCode} appears multiple times`);
          }
          seen.add(courseCode);

          // Check prerequisites
          const coursePrereqs = prerequisites[courseCode] || [];
          const allPriorSemesters = plan
            .filter(s => s.semester < semester.semester)
            .flatMap(s => s.courses);

          const unsatisfied = coursePrereqs.filter(p => !allPriorSemesters.includes(p));
          if (unsatisfied.length > 0) {
            errors.push(
              `Semester ${semester.semester}: Course ${courseCode} has unsatisfied prerequisites: ${unsatisfied.join(', ')}`
            );
          }

          creditsSum += course.credits;
        }

        if (creditsSum > MAX_CREDITS_PER_SEMESTER) {
          errors.push(
            `Semester ${semester.semester}: Total credits (${creditsSum}) exceeds maximum (${MAX_CREDITS_PER_SEMESTER})`
          );
        }

        if (creditsSum < MIN_CREDITS_PER_SEMESTER && semester.courses.length > 0) {
          errors.push(
            `Semester ${semester.semester}: Total credits (${creditsSum}) below recommended minimum (${MIN_CREDITS_PER_SEMESTER})`
          );
        }
      }

      return {
        valid: errors.length === 0,
        errors,
      };
    },
    []
  );

  return {
    generateSemesterPlan,
    validatePlan,
  };
}

/**
 * Helper to check if prerequisites are satisfied
 */
function arePrerequisitesSatisfied(
  courseCode: string,
  satisfied: Set<string>
): boolean {
  const reqs = prerequisites[courseCode];
  if (!reqs || reqs.length === 0) return true;
  return reqs.every(req => satisfied.has(req));
}
