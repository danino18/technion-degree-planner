import { useState } from 'react';
import { getCourseByCode } from '@/data/courses';
import { t } from '@/i18n/hebrew';
import { StudentCourseProgress } from '@/types/course';
import './components.css';

interface CourseTableProps {
  courseCodes: string[];
  progress: Record<string, StudentCourseProgress>;
  onMarkComplete?: (courseCode: string, grade: number) => void;
  showGrades?: boolean;
}

export default function CourseTable({
  courseCodes,
  progress,
  onMarkComplete,
  showGrades = false,
}: CourseTableProps) {
  const [editingGrade, setEditingGrade] = useState<string | null>(null);
  const [gradeValue, setGradeValue] = useState('');

  const handleGradeUpdate = (courseCode: string, grade: number) => {
    if (onMarkComplete) {
      onMarkComplete(courseCode, grade);
      setEditingGrade(null);
    }
  };

  return (
    <div className="course-table-container">
      <table className="course-table">
        <thead>
          <tr>
            <th>{t('courseCode')}</th>
            <th>{t('courseName')}</th>
            <th>{t('credits')}</th>
            <th>{t('type')}</th>
            {showGrades && <th>{t('grade')}</th>}
          </tr>
        </thead>
        <tbody>
          {courseCodes.map(code => {
            const course = getCourseByCode(code);
            const courseProgress = progress[code];
            if (!course) return null;

            return (
              <tr key={code} className="course-row">
                <td>{code}</td>
                <td>
                  <div>
                    <div className="course-name">{course.name}</div>
                    {course.nameHebrew && (
                      <div className="course-name-hebrew">{course.nameHebrew}</div>
                    )}
                  </div>
                </td>
                <td>{course.credits}</td>
                <td>
                  <span className={`course-type course-type-${course.type}`}>
                    {course.type}
                  </span>
                </td>
                {showGrades && (
                  <td>
                    {editingGrade === code ? (
                      <div className="grade-input">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={gradeValue}
                          onChange={e => setGradeValue(e.target.value)}
                          onBlur={() => {
                            if (gradeValue) {
                              handleGradeUpdate(code, parseFloat(gradeValue));
                            }
                            setEditingGrade(null);
                          }}
                          autoFocus
                        />
                      </div>
                    ) : (
                      <div
                        className="grade-display"
                        onClick={() => {
                          setEditingGrade(code);
                          setGradeValue(courseProgress?.grade?.toString() || '');
                        }}
                      >
                        {courseProgress?.grade ? (
                          <span>{courseProgress.grade}</span>
                        ) : (
                          <span className="no-grade">-</span>
                        )}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
