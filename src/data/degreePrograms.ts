/**
 * Degree program definitions for Technion
 * 
 * Includes all 5 official undergraduate programs
 */

import { DegreeProgram } from '@/types/course';

export const degreePrograms: DegreeProgram[] = [
  {
    id: "ee",
    nameHebrew: "הנדסת חשמל",
    name: "Electrical Engineering",
    totalCredits: 157.5,
    coreCredits: 106,
    electiveMinCredits: 39.5,
    generalMinCredits: 12,
    coreCourses: [
      // TODO: Populate from PDF with actual core courses
      // Foundation Math (Calculus, Linear Algebra)
      // Physics (1, 2, Modern Physics)
      // Core EE (Circuits, Signals, Digital, Electronics, etc.)
      // Total: ~106 credits
    ],
    specializations: [
      // TODO: Populate from PDF specialization groups
      // 10 specialization options available
    ],
    description:
      "תואר ראשון בהנדסת חשמל כולל קורסי יסוד במתמטיקה ופיזיקה, וקורסי חשמל הנדסיים עיקריים",
  },
  {
    id: "cse",
    nameHebrew: "הנדסת מחשבים ותוכנה",
    name: "Computer and Software Engineering",
    totalCredits: 157.5,
    coreCredits: 106,
    electiveMinCredits: 39.5,
    generalMinCredits: 12,
    coreCourses: [
      // TODO: Populate from PDF with CSE core courses
      // Likely includes: Data Structures, Algorithms, Computer Architecture,
      // Operating Systems, Databases, Software Engineering, etc.
    ],
    specializations: [],
    description:
      "תואר ראשון בהנדסת מחשבים ותוכנה עם התמקדות בתאוריה ויישומים של מחשבים",
  },
  {
    id: "ee-physics",
    nameHebrew: "הנדסת חשמל ופיזיקה",
    name: "Electrical Engineering & Physics",
    totalCredits: 157.5,
    coreCredits: 106,
    electiveMinCredits: 39.5,
    generalMinCredits: 12,
    coreCourses: [
      // TODO: Populate from PDF with combined EE + Physics courses
      // Emphasis on electromagnetic theory, quantum mechanics, etc.
    ],
    specializations: [],
    description:
      "תואר משולב בהנדסת חשמל ופיזיקה המשלב מחקר הנדסי עם פיזיקה תיאוריתית",
  },
  {
    id: "ce",
    nameHebrew: "הנדסת מחשבים",
    name: "Computer Engineering",
    totalCredits: 157.5,
    coreCredits: 106,
    electiveMinCredits: 39.5,
    generalMinCredits: 12,
    coreCourses: [
      // TODO: Populate from PDF with CE core courses
      // Hardware + Software focus: Digital Design, Microprocessors, etc.
    ],
    specializations: [],
    description:
      "תואר ראשון בהנדסת מחשבים עם התמקדות בחומרה ותוכנה של מחשבים",
  },
  {
    id: "ee-math",
    nameHebrew: "הנדסת חשמל והנדסה מתמטית",
    name: "Electrical Engineering & Mathematics",
    totalCredits: 157.5,
    coreCredits: 106,
    electiveMinCredits: 39.5,
    generalMinCredits: 12,
    coreCourses: [
      // TODO: Populate from PDF with combined EE + Math courses
      // Advanced mathematics: Complex Analysis, Functional Analysis, etc.
    ],
    specializations: [],
    description:
      "תואר משולב בהנדסת חשמל ומתמטיקה המשלב יישומים הנדסיים עם מתמטיקה מתקדמת",
  },
];

export function getDegreeProgram(id: string): DegreeProgram | undefined {
  return degreePrograms.find(p => p.id === id);
}

export function getAllDegreePrograms(): DegreeProgram[] {
  return degreePrograms;
}
