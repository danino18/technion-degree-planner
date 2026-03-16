import { SemesterPlan, StudentProgress } from '@/types/course';
import { getCourseByCode } from '@/data/courses';
import './components.css';

interface SemesterViewerProps {
  semester: SemesterPlan;
  progress: StudentProgress;
}

export default function SemesterViewer({ semester, progress }: SemesterViewerProps) {
  const courses = semester.courses
    .map(code => getCourseByCode(code))
    .filter((c): c is typeof c => c !== null);

  return (
    <div className="semester-card">
      <h4 className="semester-header">Semester {semester.semester}</h4>
      <div className="semester-credits">
        {semester.totalCredits} credits
      </div>
      <div className="semester-courses">
        {courses.map(course => {
          const isCompleted = progress.completedCourses[course.code]?.completed;
          return (
            <div
              key={course.code}
              className={`semester-course ${isCompleted ? 'completed' : ''}`}
            >
              <div className="course-code">{course.code}</div>
              <div className="course-name-short">{course.name}</div>
              <div className="course-credits-small">{course.credits} cr</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
