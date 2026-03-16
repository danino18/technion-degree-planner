/**
 * Core types for the Technion Degree Planner
 */

export interface Course {
  code: string;                    // "00440105"
  name: string;                    // "Electric Circuits"
  nameHebrew?: string;             // "תיאוריית המעגלים"
  credits: number;                 // 4.0
  type: 'core' | 'elective' | 'general';
  lectureHours: number;            // 3
  tutorialHours: number;           // 2
  labHours: number;                // 0
  semester?: number;               // 1-8 (recommended semester)
  specializations?: string[];      // ["control", "electromagnetics"]
  description?: string;
}

export interface Specialization {
  id: string;                      // "networks"
  name: string;                    // "Computer Networks"
  nameHebrew?: string;
  minCourses: number;              // typically 3
  minCredits?: number;             // minimum credits required
  courses: string[];               // array of course codes
}

export interface DegreeRequirements {
  name: string;                    // "Electrical Engineering"
  totalCredits: number;            // 157.5
  coreCourses: string[];           // course codes (106 credits)
  electiveMinCredits: number;      // 39.5
  generalMinCredits: number;       // 12
  specializations: Specialization[];
}

export interface StudentCourseProgress {
  courseCode: string;
  completed: boolean;
  dateCompleted?: string;
  grade?: number;                  // 0-100 scale
  credits: number;                 // for GPA calculation
}

export interface StudentProgress {
  planId: string;                  // unique plan identifier
  name: string;                    // "Plan A - 2024"
  completedCourses: Record<string, StudentCourseProgress>;
  currentSemester: number;
  selectedSpecializations: string[];  // specialization IDs
  plannedSemester: SemesterPlan[];    // auto-generated or custom
  lastUpdated: string;
}

export interface SemesterPlan {
  semester: number;                // 1-8
  courses: string[];               // course codes for this semester
  totalCredits: number;
}

export interface SAPCourse {
  code: string;
  name: string;
  nameHebrew?: string;
  credits: number;
  lectureHours?: number;
  tutorialHours?: number;
  labHours?: number;
  schedule?: ScheduleItem[];
}

export interface ScheduleItem {
  day: string;
  time: string;
  type: 'lecture' | 'tutorial' | 'lab';
  location?: string;
}

export interface GPA {
  gpa: number;                     // weighted GPA
  completedCredits: number;
  totalGradePoints: number;
}
