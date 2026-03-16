/**
 * Hebrew translations for the application UI
 */

export const hebrewTranslations = {
  // Header & Navigation
  appTitle: "🎓 מתכנן תואר הנדסה - טכניון",
  appSubtitle: "תכנון תואר ראשון בהנדסה",
  
  // Navigation
  myPlans: "התוכנות שלי",
  dashboard: "לוח בקרה",
  planBuilder: "בונה תוכנית",
  degreePrograms: "תכניות תואר",
  
  // Plan Management
  myStudyPlans: "התוכניות שלי",
  createNewPlan: "+ תוכנית חדשה",
  deletePlan: "מחק",
  openPlan: "פתח תוכנית",
  planName: "שם התוכנית",
  lastUpdated: "עדכון אחרון:",
  noPlansYet: "אין תוכניות עדיין. צור אחת כדי להתחיל!",
  loadingPlans: "טוען תוכניות...",
  back: "חזרה",
  
  // Degree Programs
  electricalEngineering: "הנדסת חשמל",
  computerSoftwareEngineering: "הנדסת מחשבים ותוכנה",
  electricalEngineeringPhysics: "הנדסת חשמל ופיזיקה",
  computerEngineering: "הנדסת מחשבים",
  electricalEngineeringMath: "הנדסת חשמל והנדסה מתמטית",
  
  selectDegreeProgram: "בחר תכנית תואר",
  
  // Dashboard
  overallProgress: "התקדמות כוללת",
  academicPerformance: "ביצוע אקדמי",
  firstYearFundamentals: "יסודות השנה הראשונה",
  coursesCompleted: "קורסים סיימו:",
  creditsEarned: "נקודות שהורוויח:",
  gpa: "ממוצע",
  completedCredit: "נקודות סיימות:",
  totalGradePoints: "נקודות כלליות:",
  suggestedNextCourses: "קורסים מוצעים הבאים",
  completedCourses: "קורסים סיימים",
  noCoursesCompleted: "לא סיימת קורסים עדיין.",
  
  // Course Table
  courseCode: "קוד קורס",
  courseName: "שם הקורס",
  credits: "נקודות",
  type: "סוג",
  grade: "ציון",
  
  // Course Types
  core: "חובה",
  elective: "בחירה",
  general: "כללי",
  
  // Planner
  selectCourses: "בחר קורסים",
  selectCoursesHint: "בחר קורסים ולחץ על 'יצור תוכנית' כדי ליצור את לוח הזמנים שלך.",
  generatePlan: "יצור תוכנית",
  generatedStudyPlan: "תוכנית הלימוד שנוצרה",
  pleaseSelectCourse: "אנא בחר לפחות קורס אחד",
  
  // Semester
  semester: "סמסטר",
  courseCredits: "נקודות",
  
  // Search & Filter
  searchCourses: "חפש קורסים...",
  allTypes: "כל הסוגים",
  
  // Loading & States  
  loading: "טוען...",
  loadingDashboard: "טוען לוח בקרה...",
  loadingPlanner: "טוען מתכנן...",
  noData: "אין נתונים זמינים כרגע.",
  noCoursesAvailable: "אין קורסים זמינים כרגע.",
  
  // Errors & Messages
  error: "שגיאה",
  success: "הצליח",
  cancel: "בטל",
  save: "שמור",
  delete: "מחק",
  edit: "ערוך",
  
  // Progress Labels
  progress: "התקדמות",
  percentComplete: "% הושלם",
  
  // Specializations (Generic - specific ones will come from data)
  specializations: "התמחויות",
  selectSpecialization: "בחר התמחות",
  minCourses: "קורסים מינימום:",
  
  // Footer
  lastSync: "סנכרון אחרון:",
  daysAgo: "ימים בחזרה",
} as const;

export type TranslationKey = keyof typeof hebrewTranslations;

export function t(key: TranslationKey): string {
  return hebrewTranslations[key];
}
