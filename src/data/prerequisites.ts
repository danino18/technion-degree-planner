/**
 * Prerequisites graph for EE curriculum
 * Maps course code to array of prerequisite course codes
 * 
 * TODO: Extract from PDF katlog_hashmal.pdf and populate with actual prerequisites
 */

export const prerequisites: Record<string, string[]> = {
  // Math Foundation
  "00440131": ["00440105"],  // Signals & Systems requires Electric Circuits
  "00440268": ["00440011"],  // Data Structures requires Intro to CS
  
  // TBD: Will populate fully from PDF
  // This is a template structure
};

/**
 * Check if a course's prerequisites are met
 */
export function arePrerequisitesMet(
  courseCode: string,
  completedCourses: Set<string>
): boolean {
  const reqs = prerequisites[courseCode];
  if (!reqs || reqs.length === 0) return true;
  
  return reqs.every(req => completedCourses.has(req));
}

/**
 * Get all prerequisite courses recursively
 */
export function getAllPrerequisites(courseCode: string): Set<string> {
  const allPrereqs = new Set<string>();
  const queue = [courseCode];
  
  while (queue.length > 0) {
    const current = queue.shift()!;
    const directPrereqs = prerequisites[current] || [];
    
    directPrereqs.forEach(prereq => {
      if (!allPrereqs.has(prereq)) {
        allPrereqs.add(prereq);
        queue.push(prereq);
      }
    });
  }
  
  return allPrereqs;
}
