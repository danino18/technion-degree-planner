import { useStudentProgress } from '@/hooks/useStudentProgress';
import { useCourseLogic } from '@/hooks/useCourseLogic';
import ProgressBar from '@/components/ProgressBar';
import GPADisplay from '@/components/GPADisplay';
import SuggestedCourses from '@/components/SuggestedCourses';
import CourseTable from '@/components/CourseTable';
import './components.css';

interface DashboardViewProps {
  planId: string;
}

export default function DashboardView({ planId }: DashboardViewProps) {
  const { progress, loading, markCourseCompleted, updatePlanName } =
    useStudentProgress(planId);
  const { calculateGPA, suggestNextCourses, getTotalCredits } = useCourseLogic();

  if (loading || !progress) {
    return <div className="loading">Loading dashboard...</div>;
  }

  const completedSet = new Set(Object.keys(progress.completedCourses));
  const gpa = calculateGPA(progress.completedCourses);
  const suggestedCourses = suggestNextCourses(completedSet, 5);

  const firstYearCredits = getTotalCredits(
    ['00440041', '00440051', '00440042', '00440052', '00440074', '00440075'].filter(
      c => completedSet.has(c)
    )
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>
            <input
              type="text"
              value={progress.name}
              onChange={e => updatePlanName(e.target.value)}
              className="plan-title-input"
            />
          </h2>
          <p className="plan-semester">Semester {progress.currentSemester}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Main Progress */}
        <div className="dashboard-section">
          <h3>Overall Progress</h3>
          <ProgressBar
            completed={getTotalCredits(Array.from(completedSet))}
            total={157.5}
            label="Credits"
          />
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-label">Courses Completed:</span>
              <span className="stat-value">{completedSet.size}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Credits Earned:</span>
              <span className="stat-value">{getTotalCredits(Array.from(completedSet))}</span>
            </div>
          </div>
        </div>

        {/* GPA */}
        <div className="dashboard-section">
          <h3>Academic Performance</h3>
          <GPADisplay gpa={gpa} />
        </div>

        {/* First Year Progress */}
        <div className="dashboard-section">
          <h3>First Year Fundamentals</h3>
          <ProgressBar
            completed={firstYearCredits}
            total={31}
            label="Foundation courses"
          />
        </div>
      </div>

      {/* Suggested Courses */}
      <div className="dashboard-section full-width">
        <h3>Suggested Next Courses</h3>
        <SuggestedCourses courses={suggestedCourses} onSelectCourse={() => {}} />
      </div>

      {/* Completed Courses */}
      <div className="dashboard-section full-width">
        <h3>Completed Courses</h3>
        {completedSet.size === 0 ? (
          <p className="no-data">No courses completed yet.</p>
        ) : (
          <CourseTable
            courseCodes={Array.from(completedSet)}
            progress={progress.completedCourses}
            onMarkComplete={markCourseCompleted}
            showGrades={true}
          />
        )}
      </div>
    </div>
  );
}
