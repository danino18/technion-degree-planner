import { useState, useEffect } from 'react';
import { useStudentProgress } from '@/hooks/useStudentProgress';
import { usePlanningAlgorithm } from '@/hooks/usePlanningAlgorithm';
import SemesterViewer from '@/components/SemesterViewer';
import CourseSelector from '@/components/CourseSelector';
import './components.css';

interface PlannerViewProps {
  planId: string;
}

export default function PlannerView({ planId }: PlannerViewProps) {
  const { progress, updatePlannedSemesters } =
    useStudentProgress(planId);
  const { generateSemesterPlan, validatePlan } = usePlanningAlgorithm();

  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set());
  const [plan, setPlan] = useState(progress?.plannedSemester || []);

  useEffect(() => {
    if (progress) {
      setSelectedCourses(new Set(progress.completedCourses ? Object.keys(progress.completedCourses) : []));
    }
  }, [progress]);

  const handleGeneratePlan = () => {
    if (selectedCourses.size === 0) {
      alert('Please select at least one course');
      return;
    }

    const newPlan = generateSemesterPlan(Array.from(selectedCourses), [], 24);
    const validation = validatePlan(newPlan);

    if (!validation.valid) {
      console.warn('Plan validation errors:', validation.errors);
    }

    setPlan(newPlan);
    updatePlannedSemesters(newPlan);
  };

  const handleAddCourse = (courseCode: string) => {
    const newSelected = new Set(selectedCourses);
    newSelected.add(courseCode);
    setSelectedCourses(newSelected);
  };

  const handleRemoveCourse = (courseCode: string) => {
    const newSelected = new Set(selectedCourses);
    newSelected.delete(courseCode);
    setSelectedCourses(newSelected);
  };

  if (!progress) {
    return <div className="loading">Loading planner...</div>;
  }

  return (
    <div className="planner">
      <div className="planner-container">
        <div className="planner-sidebar">
          <CourseSelector
            selectedCourses={selectedCourses}
            onAddCourse={handleAddCourse}
            onRemoveCourse={handleRemoveCourse}
          />
          <button className="btn btn-large btn-primary" onClick={handleGeneratePlan}>
            Generate Plan
          </button>
        </div>

        <div className="planner-main">
          {plan && plan.length > 0 ? (
            <div>
              <h3>Generated Study Plan</h3>
              <div className="semesters-grid">
                {plan.map(semester => (
                  <SemesterViewer
                    key={`sem-${semester.semester}`}
                    semester={semester}
                    progress={progress}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>Select courses and click "Generate Plan" to create your study schedule.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
