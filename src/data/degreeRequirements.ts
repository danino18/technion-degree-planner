/**
 * Degree requirements for Electrical Engineering B.Sc.
 * 
 * Based on Technion curriculum: 157.5 total credits
 */

import { DegreeRequirements } from '@/types/course';

export const degreeRequirements: DegreeRequirements = {
  name: "Electrical Engineering B.Sc.",
  totalCredits: 157.5,
  coreCourses: [
    // Foundation Math
    "00440041", // Calculus 1
    "00440042", // Calculus 2
    "00440051", // Linear Algebra 1
    "00440052", // Linear Algebra 2
    
    // Physics
    "00440074", // Physics 1
    "00440075", // Physics 2
    
    // Core EE
    "00440105", // Electric Circuits
    "00440159", // Circuits Lab
    "00440131", // Signals and Systems
    "00440268", // Data Structures
    
    // TODO: Add remaining ~95 credits of core courses from PDF
    // (Electromagnetics, Power Systems, Digital Electronics, Microprocessors, 
    //  Control Systems, Communication Theory, etc.)
  ],
  electiveMinCredits: 39.5,  // Must choose from faculty electives
  generalMinCredits: 12,     // General education requirements
  specializations: [
    // Will be populated from specializations.ts
  ],
};

/**
 * Calculate progress towards degree
 */
export interface DegreeProgress {
  coreCreditsDone: number;
  coreCreditsRequired: number;
  electiveCreditsDone: number;
  electiveCreditsRequired: number;
  generalCreditsDone: number;
  generalCreditsRequired: number;
  totalCreditsDone: number;
  totalCreditsRequired: number;
  percentComplete: number;
  canGraduate: boolean;
}

export function calculateDegreeProgress(completedCourses: Record<string, any>): DegreeProgress {
  // TODO: Implement full progress calculation
  // For now, placeholder
  return {
    coreCreditsDone: 0,
    coreCreditsRequired: 106,
    electiveCreditsDone: 0,
    electiveCreditsRequired: 39.5,
    generalCreditsDone: 0,
    generalCreditsRequired: 12,
    totalCreditsDone: 0,
    totalCreditsRequired: 157.5,
    percentComplete: 0,
    canGraduate: false,
  };
}
