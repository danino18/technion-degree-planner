/**
 * Hook for course-related business logic
 * Prerequisites, next course suggestions, GPA calculations, etc.
 */

import { useMemo, useCallback } from 'react';
import { Course, GPA } from '@/types/course';
import { courses, getCourseByCode } from '@/data/courses';
import { prerequisites, arePrerequisitesMet } from '@/data/prerequisites';

export function useCourseLogic() {
  /**
   * Check if a student can take a course
   */
  const canTakeCourse = useCallback(
    (courseCode: string, completedCourseCodes: Set<string>): boolean => {
      return arePrerequisitesMet(courseCode, completedCourseCodes);
    },
    []
  );

  /**
   * Get available courses for next semester
   */
  const getAvailableCoursesForNextSemester = useCallback(
    (completedCourseCodes: Set<string>): Course[] => {
      return courses.filter(
        course =>
          !completedCourseCodes.has(course.code) &&
          canTakeCourse(course.code, completedCourseCodes)
      );
    },
    [canTakeCourse]
  );

  /**
   * Get all courses a student hasn't completed yet but could take eventually
   */
  const getUncompletedCourses = useCallback(
    (completedCourseCodes: Set<string>): Course[] => {
      return courses.filter(c => !completedCourseCodes.has(c.code));
    },
    []
  );

  /**
   * Get prerequisites for a course
   */
  const getPrerequisitesForCourse = useCallback(
    (courseCode: string): Course[] => {
      const prereqCodes = prerequisites[courseCode] || [];
      return prereqCodes
        .map(getCourseByCode)
        .filter((c): c is Course => c !== undefined);
    },
    []
  );

  /**
   * Calculate GPA from completed courses with grades
   */
  const calculateGPA = useCallback(
    (completedCourses: Record<string, { grade?: number; courseCode: string }>): GPA => {
      let totalGradePoints = 0;
      let totalCredits = 0;

      Object.values(completedCourses).forEach(course => {
        const courseInfo = getCourseByCode(course.courseCode);
        if (courseInfo && course.grade !== undefined) {
          totalGradePoints += courseInfo.credits * course.grade;
          totalCredits += courseInfo.credits;
        }
      });

      const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

      return {
        gpa: Math.round(gpa * 100) / 100,
        completedCredits: totalCredits,
        totalGradePoints,
      };
    },
    []
  );

  /**
   * Suggest next courses based on prerequisites and interest
   */
  const suggestNextCourses = useCallback(
    (completedCourseCodes: Set<string>, limit: number = 5): Course[] => {
      const available = getAvailableCoursesForNextSemester(completedCourseCodes);
      
      // Sort by semester, then by type (core first), then by name
      return available
        .sort((a, b) => {
          if (a.semester !== b.semester) {
            return (a.semester || 8) - (b.semester || 8);
          }
          const typeOrder = { core: 0, elective: 1, general: 2 };
          if (typeOrder[a.type] !== typeOrder[b.type]) {
            return typeOrder[a.type] - typeOrder[b.type];
          }
          return a.name.localeCompare(b.name);
        })
        .slice(0, limit);
    },
    [getAvailableCoursesForNextSemester]
  );

  /**
   * Get total credits for a set of courses
   */
  const getTotalCredits = useCallback((courseCodes: string[]): number => {
    return courseCodes.reduce((sum, code) => {
      const course = getCourseByCode(code);
      return sum + (course?.credits || 0);
    }, 0);
  }, []);

  /**
   * Check specialization requirements completion
   */
  const checkSpecializationCompletion = useCallback(
    (
      specializationCourses: string[],
      completedCourseCodes: Set<string>,
      minCourses: number,
      minCredits: number
    ): { completed: boolean; coursesDone: number; creditsDone: number } => {
      const completedInSpecialization = specializationCourses.filter(code =>
        completedCourseCodes.has(code)
      );
      
      const creditsDone = getTotalCredits(completedInSpecialization);

      return {
        completed: completedInSpecialization.length >= minCourses && creditsDone >= minCredits,
        coursesDone: completedInSpecialization.length,
        creditsDone,
      };
    },
    [getTotalCredits]
  );

  return {
    canTakeCourse,
    getAvailableCoursesForNextSemester,
    getUncompletedCourses,
    getPrerequisitesForCourse,
    calculateGPA,
    suggestNextCourses,
    getTotalCredits,
    checkSpecializationCompletion,
  };
}
