/**
 * Course catalog for Technion Electrical Engineering
 * 
 * TODO: Extract course list from PDF katlog_hashmal.pdf
 * Expected format per course:
 * - Code: 8-digit course code
 * - Name: English + Hebrew names
 * - Credits: decimal (3.0, 4.0, 5.0, 5.5, etc)
 * - Type: core, elective, or general
 * - Hours: lecture, tutorial, lab
 * - Semester: recommended semester (1-8)
 */

import { Course } from '@/types/course';

export const courses: Course[] = [
  // Foundation Math - Semester 1-2
  {
    code: "00440041",
    name: "Calculus 1",
    nameHebrew: "חשבון אינפיניטסימלי 1",
    credits: 5.5,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440051",
    name: "Linear Algebra 1",
    nameHebrew: "אלגברה לינארית 1",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440042",
    name: "Calculus 2",
    nameHebrew: "חשבון אינפיניטסימלי 2",
    credits: 5.5,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },
  {
    code: "00440052",
    name: "Linear Algebra 2",
    nameHebrew: "אלגברה לינארית 2",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },

  // Physics - Semester 1-2
  {
    code: "00440074",
    name: "Physics 1",
    nameHebrew: "פיזיקה 1",
    credits: 4.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440075",
    name: "Physics 2",
    nameHebrew: "פיזיקה 2",
    credits: 4.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },

  // Core EE Courses
  {
    code: "00440105",
    name: "Electric Circuits",
    nameHebrew: "תיאוריית המעגלים",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
    specializations: ["electromagnetics", "signal-processing"],
  },
  {
    code: "00440131",
    name: "Signals and Systems",
    nameHebrew: "אותות ומערכות",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
    specializations: ["signal-processing", "communications"],
  },
  {
    code: "00440268",
    name: "Data Structures and Algorithms",
    nameHebrew: "מבני נתונים ואלגוריתמים",
    credits: 3.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 1,
    specializations: ["computers"],
  },

  // Lab Courses
  {
    code: "00440159",
    name: "Electrical Circuits Lab",
    nameHebrew: "מעבדה במעגלים חשמליים",
    credits: 1.5,
    type: "core",
    lectureHours: 0,
    tutorialHours: 0,
    labHours: 3,
    semester: 2,
  },

  // Electives (samples - will need to add many more)
  {
    code: "00440160",
    name: "Advanced Control Systems",
    nameHebrew: "מערכות בקרה מתקדמות",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["control-robotics"],
  },
  {
    code: "00440161",
    name: "Communication Networks",
    nameHebrew: "רשתות תקשורת",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["computer-networks"],
  },

  // General Education (samples)
  {
    code: "00440501",
    name: "Technical Writing",
    nameHebrew: "כתיבה טכנית",
    credits: 2.0,
    type: "general",
    lectureHours: 2,
    tutorialHours: 0,
    labHours: 0,
    semester: 1,
  },
];

/**
 * Get course by code
 */
export function getCourseByCode(code: string): Course | undefined {
  return courses.find(c => c.code === code);
}

/**
 * Get courses by type
 */
export function getCoursesByType(type: 'core' | 'elective' | 'general'): Course[] {
  return courses.filter(c => c.type === type);
}

/**
 * Calculate total credits
 */
export function calculateTotalCredits(courseCodes: string[]): number {
  return courseCodes.reduce((sum, code) => {
    const course = getCourseByCode(code);
    return sum + (course?.credits || 0);
  }, 0);
}
