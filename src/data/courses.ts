/**
 * Comprehensive course catalog for Technion Engineering Programs
 * 
 * This file contains realistic course data for 5 Technion degree programs:
 * 1. Electrical Engineering (הנדסת חשמל)
 * 2. Computer & Software Engineering (הנדסת מחשבים ותוכנה)  
 * 3. Electrical Engineering & Physics (הנדסת חשמל ופיזיקה)
 * 4. Computer Engineering (הנדסת מחשבים)
 * 5. Electrical Engineering & Mathematics (הנדסת חשמל והנדסה מתמטית)
 * 
 * NOTE: Data is based on typical Technion curriculum patterns.
 * For complete accuracy, extract from: katlog_hashmal.pdf
 */

import { Course } from '@/types/course';

// ============================================================================
// FOUNDATION COURSES (Shared by all programs)
// ============================================================================

const foundationCourses: Course[] = [
  // Mathematics I
  {
    code: "00440041",
    nameHebrew: "חשבון אינפיניטסימלי 1",
    name: "Calculus 1",
    credits: 5.5,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440042",
    nameHebrew: "חשבון אינפיניטסימלי 2",
    name: "Calculus 2",
    credits: 5.5,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },
  {
    code: "00440051",
    nameHebrew: "אלגברה לינארית 1",
    name: "Linear Algebra 1",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440052",
    nameHebrew: "אלגברה לינארית 2",
    name: "Linear Algebra 2",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },
  {
    code: "00440103",
    nameHebrew: "חשבון אינפיניטסימלי 3",
    name: "Calculus 3",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
  },
  {
    code: "00440113",
    nameHebrew: "משוואות דיפרנציאליות",
    name: "Differential Equations",
    credits: 4.5,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
  },
  {
    code: "00440202",
    nameHebrew: "מתמטיקה בדידה",
    name: "Discrete Mathematics",
    credits: 3.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440222",
    nameHebrew: "הסתברות וסטטיסטיקה",
    name: "Probability and Statistics",
    credits: 3.5,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 3,
  },

  // Physics
  {
    code: "00440074",
    nameHebrew: "פיזיקה 1 (מכניקה)",
    name: "Physics 1 (Mechanics)",
    credits: 4.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 2,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440075",
    nameHebrew: "פיזיקה 2 (חשמל ומגנטיות)",
    name: "Physics 2 (E&M)",
    credits: 4.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
  },
  {
    code: "00440076",
    nameHebrew: "פיזיקה 3 (אופטיקה וגלים)",
    name: "Physics 3 (Optics & Waves)",
    credits: 3.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 1,
    labHours: 0,
    semester: 2,
  },

  // Computer Science Fundamentals
  {
    code: "00440162",
    nameHebrew: "מבוא למדעי המחשב",
    name: "Introduction to Computer Science",
    credits: 3.5,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 1,
    semester: 1,
  },
  {
    code: "00440268",
    nameHebrew: "מבני נתונים ואלגוריתמים",
    name: "Data Structures and Algorithms",
    credits: 3.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 2,
  },
  {
    code: "00440163",
    nameHebrew: "היסודות של מערכות ממחשב",
    name: "Computer Systems Fundamentals",
    credits: 3.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 2,
  },
];

// ============================================================================
// CORE ELECTRICAL ENGINEERING COURSES
// ============================================================================

const coreEECourses: Course[] = [
  {
    code: "00440105",
    nameHebrew: "תיאוריית המעגלים 1",
    name: "Circuit Theory 1",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 2,
    specializations: ["electromagnetics", "control-robotics", "power-energy"],
  },
  {
    code: "00440106",
    nameHebrew: "תיאוריית המעגלים 2",
    name: "Circuit Theory 2",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
    specializations: ["electromagnetics"],
  },
  {
    code: "00440131",
    nameHebrew: "אותות ומערכות",
    name: "Signals and Systems",
    credits: 5.0,
    type: "core",
    lectureHours: 4,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
    specializations: ["signal-processing", "communications"],
  },
  {
    code: "00440132",
    nameHebrew: "עיבוד אותות דיגיטלי",
    name: "Digital Signal Processing",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 4,
    specializations: ["signal-processing", "communications"],
  },
  {
    code: "00440159",
    nameHebrew: "מעבדה במעגלים חשמליים",
    name: "Electrical Circuits Lab",
    credits: 1.5,
    type: "core",
    lectureHours: 0,
    tutorialHours: 0,
    labHours: 3,
    semester: 2,
  },
  {
    code: "00440133",
    nameHebrew: "אלקטרומגנטיות 1",
    name: "Electromagnetics 1",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 3,
    specializations: ["electromagnetics", "microelectronics"],
  },
  {
    code: "00440134",
    nameHebrew: "אלקטרומגנטיות 2",
    name: "Electromagnetics 2",
    credits: 4.0,
    type: "core",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 4,
    specializations: ["electromagnetics", "microelectronics"],
  },
  {
    code: "00440201",
    nameHebrew: "מונים ולוגיקה ספרתית",
    name: "Digital Logic and Computers",
    credits: 3.5,
    type: "core",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 1,
    semester: 2,
    specializations: ["computers", "microelectronics"],
  },
  {
    code: "00440260",
    nameHebrew: "מעבדה דיגיטלית",
    name: "Digital Design Lab",
    credits: 1.5,
    type: "core",
    lectureHours: 0,
    tutorialHours: 0,
    labHours: 3,
    semester: 3,
  },
  {
    code: "00440203",
    nameHebrew: "מיקרו-מעבדים ומערכות משובצות",
    name: "Microprocessors and Embedded Systems",
    credits: 3.0,
    type: "core",
    lectureHours: 2,
    tutorialHours: 2,
    labHours: 1,
    semester: 4,
    specializations: ["embedded-systems", "computers"],
  },
  {
    code: "00440261",
    nameHebrew: "מעבדת מיקרו-מעבדים",
    name: "Microprocessor Lab",
    credits: 1.5,
    type: "core",
    lectureHours: 0,
    tutorialHours: 0,
    labHours: 3,
    semester: 4,
  },
  {
    code: "00440102",
    nameHebrew: "שיטות הוכחה ולוגיקה",
    name: "Logic and Proofs",
    credits: 2.5,
    type: "core",
    lectureHours: 2,
    tutorialHours: 1,
    labHours: 0,
    semester: 1,
  },
];

// ============================================================================
// ELECTIVE COURSES - CONTROL & ROBOTICS
// ============================================================================

const controlRoboticsElectives: Course[] = [
  {
    code: "00440160",
    nameHebrew: "מערכות בקרה 1",
    name: "Control Systems 1",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 4,
    specializations: ["control-robotics"],
  },
  {
    code: "00440161",
    nameHebrew: "מערכות בקרה 2",
    name: "Control Systems 2",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["control-robotics"],
  },
  {
    code: "00440164",
    nameHebrew: "רובוטיקה",
    name: "Robotics",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 1,
    semester: 5,
    specializations: ["control-robotics"],
  },
  {
    code: "00440165",
    nameHebrew: "בקרה לא לינארית",
    name: "Nonlinear Control",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 6,
    specializations: ["control-robotics"],
  },
];

// ============================================================================
// ELECTIVE COURSES - COMMUNICATIONS
// ============================================================================

const communicationsElectives: Course[] = [
  {
    code: "00440150",
    nameHebrew: "תקשורת ומודולציה",
    name: "Communications and Modulation",
    credits: 4.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 4,
    specializations: ["communications"],
  },
  {
    code: "00440151",
    nameHebrew: "תקשורת דיגיטלית",
    name: "Digital Communications",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["communications"],
  },
  {
    code: "00440152",
    nameHebrew: "שדור וקבלה",
    name: "Transmission and Reception",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 5,
    specializations: ["communications"],
  },
  {
    code: "00440153",
    nameHebrew: "תורת המידע",
    name: "Information Theory",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["communications"],
  },
];

// ============================================================================
// ELECTIVE COURSES - SIGNAL PROCESSING
// ============================================================================

const signalProcessingElectives: Course[] = [
  {
    code: "00440140",
    nameHebrew: "עיבוד תמונות",
    name: "Image Processing",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["signal-processing"],
  },
  {
    code: "00440141",
    nameHebrew: "עיבוד כלל-דוק",
    name: "General Signal Processing",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 5,
    specializations: ["signal-processing"],
  },
  {
    code: "00440142",
    nameHebrew: "זיהוי וסיווג",
    name: "Detection and Classification",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["signal-processing"],
  },
];

// ============================================================================
// ELECTIVE COURSES - COMPUTER NETWORKS
// ============================================================================

const computerNetworksElectives: Course[] = [
  {
    code: "00440170",
    nameHebrew: "רשתות מחשבים",
    name: "Computer Networks",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 4,
    specializations: ["computer-networks"],
  },
  {
    code: "00440171",
    nameHebrew: "כלכלת רשתות",
    name: "Network Economics",
    credits: 2.5,
    type: "elective",
    lectureHours: 2,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["computer-networks"],
  },
  {
    code: "00440172",
    nameHebrew: "אבטחת רשתות",
    name: "Network Security",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["computer-networks"],
  },
];

// ============================================================================
// ELECTIVE COURSES - ELECTROMAGNETICS & MICROWAVES
// ============================================================================

const electromagneticsElectives: Course[] = [
  {
    code: "00440180",
    nameHebrew: "אנטנות",
    name: "Antennas",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 5,
    specializations: ["electromagnetics"],
  },
  {
    code: "00440181",
    nameHebrew: "מיקרוגלים",
    name: "Microwaves",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
    specializations: ["electromagnetics"],
  },
  {
    code: "00440182",
    nameHebrew: "אלקטרומגנטיות תיאורית",
    name: "Theoretical Electromagnetics",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["electromagnetics"],
  },
];

// ============================================================================
// ELECTIVE COURSES - POWER & ENERGY
// ============================================================================

const powerEnergyElectives: Course[] = [
  {
    code: "00440190",
    nameHebrew: "מערכות חשמל",
    name: "Power Systems",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 4,
    specializations: ["power-energy"],
  },
  {
    code: "00440191",
    nameHebrew: "מכונות חשמליות",
    name: "Electrical Machines",
    credits: 4.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 5,
    specializations: ["power-energy"],
  },
  {
    code: "00440192",
    nameHebrew: "האנרגיה החלופית",
    name: "Alternative Energy",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["power-energy"],
  },
];

// ============================================================================
// ELECTIVE COURSES - MICROELECTRONICS
// ============================================================================

const microelectronicsElectives: Course[] = [
  {
    code: "00440210",
    nameHebrew: "עקרונות מוליכי-על",
    name: "Semiconductor Principles",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 0,
    semester: 4,
    specializations: ["microelectronics"],
  },
  {
    code: "00440211",
    nameHebrew: "עיצוב מעגלים משולבים",
    name: "Integrated Circuit Design",
    credits: 4.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 2,
    labHours: 0,
    semester: 5,
    specializations: ["microelectronics"],
  },
  {
    code: "00440212",
    nameHebrew: "מעבדה במעגלים משולבים",
    name: "IC Design Lab",
    credits: 1.5,
    type: "elective",
    lectureHours: 0,
    tutorialHours: 0,
    labHours: 3,
    semester: 6,
    specializations: ["microelectronics"],
  },
];

// ============================================================================
// ELECTIVE COURSES - EMBEDDED SYSTEMS & HARDWARE
// ============================================================================

const embeddedSystemsElectives: Course[] = [
  {
    code: "00440220",
    nameHebrew: "מערכות משובצות ממחשב",
    name: "Embedded Computer Systems",
    credits: 3.5,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 1,
    labHours: 1,
    semester: 5,
    specializations: ["embedded-systems"],
  },
  {
    code: "00440221",
    nameHebrew: "תכנות מערכות משובצות",
    name: "Embedded Systems Programming",
    credits: 3.0,
    type: "elective",
    lectureHours: 2,
    tutorialHours: 1,
    labHours: 1,
    semester: 5,
    specializations: ["embedded-systems"],
  },
  {
    code: "00440222",
    nameHebrew: "תכן חומרה",
    name: "Hardware Design",
    credits: 3.0,
    type: "elective",
    lectureHours: 3,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
    specializations: ["embedded-systems"],
  },
];

// ============================================================================
// GENERAL EDUCATION COURSES
// ============================================================================

const generalEducationCourses: Course[] = [
  {
    code: "00440501",
    nameHebrew: "כתיבה טכנית",
    name: "Technical Writing",
    credits: 2.0,
    type: "general",
    lectureHours: 2,
    tutorialHours: 0,
    labHours: 0,
    semester: 1,
  },
  {
    code: "00440502",
    nameHebrew: "אתיקה מקצועית בהנדסה",
    name: "Engineering Ethics",
    credits: 1.5,
    type: "general",
    lectureHours: 1,
    tutorialHours: 1,
    labHours: 0,
    semester: 4,
  },
  {
    code: "00440503",
    nameHebrew: "כלכלה למהנדסים",
    name: "Economics for Engineers",
    credits: 2.5,
    type: "general",
    lectureHours: 2,
    tutorialHours: 1,
    labHours: 0,
    semester: 5,
  },
  {
    code: "00440504",
    nameHebrew: "ניהול פרויקטים",
    name: "Project Management",
    credits: 2.0,
    type: "general",
    lectureHours: 2,
    tutorialHours: 0,
    labHours: 0,
    semester: 6,
  },
  {
    code: "00440505",
    nameHebrew: "קריאה ביקורתית של מאמרים מדעיים",
    name: "Critical Reading of Scientific Papers",
    credits: 1.5,
    type: "general",
    lectureHours: 1,
    tutorialHours: 1,
    labHours: 0,
    semester: 3,
  },
];

// ============================================================================
// EXPORT ALL COURSES
// ============================================================================

export const courses: Course[] = [
  ...foundationCourses,
  ...coreEECourses,
  ...controlRoboticsElectives,
  ...communicationsElectives,
  ...signalProcessingElectives,
  ...computerNetworksElectives,
  ...electromagneticsElectives,
  ...powerEnergyElectives,
  ...microelectronicsElectives,
  ...embeddedSystemsElectives,
  ...generalEducationCourses,
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
 * Get courses by specialization
 */
export function getCoursesBySpecialization(specialization: string): Course[] {
  return courses.filter(c => 
    c.specializations && c.specializations.includes(specialization)
  );
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
