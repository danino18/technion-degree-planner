import { Course } from '@/types/course';
import './components.css';

interface SuggestedCoursesProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export default function SuggestedCourses({ courses, onSelectCourse }: SuggestedCoursesProps) {
  if (courses.length === 0) {
    return <p className="no-data">No courses available at this time.</p>;
  }

  return (
    <div className="suggested-courses">
      {courses.map(course => (
        <div key={course.code} className="course-suggestion">
          <div className="course-info">
            <h4>
              {course.code} - {course.name}
            </h4>
            {course.nameHebrew && <p className="course-name-hebrew">{course.nameHebrew}</p>}
            <div className="course-meta">
              <span className="course-credits">{course.credits} credits</span>
              <span className={`course-type course-type-${course.type}`}>{course.type}</span>
              {course.semester && <span className="course-semester">Semester {course.semester}</span>}
            </div>
          </div>
          <button
            className="btn btn-small btn-primary"
            onClick={() => onSelectCourse(course)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
