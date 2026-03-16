/**
 * Specialization tracks for Electrical Engineering
 * 
 * Students must complete at least 3 courses (typically ~10-12 credits) in one specialization
 */

import { Specialization } from '@/types/course';

export const specializations: Specialization[] = [
  {
    id: "computer-networks",
    name: "Computer Networks",
    nameHebrew: "רשתות מחשבים",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440161", // Communication Networks
      "00440162", // Advanced Networks
      "00440163", // Network Security
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "control-robotics",
    name: "Control and Robotics",
    nameHebrew: "בקרה ורובוטיקה",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440160", // Advanced Control Systems
      "00440164", // Robotics
      "00440165", // Adaptive Control
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "communications",
    name: "Communications and Information",
    nameHebrew: "תקשורת ומידע",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440131", // Signals and Systems
      "00440166", // Digital Communications
      "00440167", // Information Theory
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "microelectronics",
    name: "Microelectronics and Nanoelectronics",
    nameHebrew: "מיקרואלקטרוניקה",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440168", // Semiconductor Devices
      "00440169", // VLSI Design
      "00440170", // Nanofabrication
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "electromagnetics",
    name: "Electromagnetics and Photonics",
    nameHebrew: "אלקטרומגנטיות ופוטוניקה",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440105", // Electric Circuits
      "00440171", // Electromagnetic Theory
      "00440172", // Optics and Photonics
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "computers",
    name: "Computers",
    nameHebrew: "מחשבים",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440268", // Data Structures and Algorithms
      "00440173", // Computer Architecture
      "00440174", // Operating Systems
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "signal-processing",
    name: "Signal and Image Processing",
    nameHebrew: "עיבוד אותות תמונה",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440131", // Signals and Systems
      "00440175", // Digital Signal Processing
      "00440176", // Image Processing
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "biomedical",
    name: "Biological Systems and Signals",
    nameHebrew: "מערכות ביולוגיות",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440177", // Biomedical Signals
      "00440178", // Neuroscience
      "00440179", // Biological Systems
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "integrated-circuits",
    name: "Integrated Circuits",
    nameHebrew: "מעגלים משולבים",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440180", // Circuit Design
      "00440181", // Analog ICs
      "00440182", // Digital ICs
      // TODO: Add more courses from PDF
    ],
  },
  {
    id: "research",
    name: "Research and Excellence Track",
    nameHebrave: "מסלול מחקר",
    minCourses: 3,
    minCredits: 9,
    courses: [
      "00440183", // Research Methodology
      "00440184", // Advanced Topics
      "00440185", // Graduate Seminar
      // TODO: Add more courses from PDF
    ],
  },
];

/**
 * Get specialization by ID
 */
export function getSpecializationById(id: string): Specialization | undefined {
  return specializations.find(s => s.id === id);
}

/**
 * Get all specializations available
 */
export function getAllSpecializations(): Specialization[] {
  return specializations;
}
