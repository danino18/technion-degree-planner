import React from 'react';
import { GPA } from '@/types/course';
import './components.css';

interface GPADisplayProps {
  gpa: GPA;
}

export default function GPADisplay({ gpa }: GPADisplayProps) {
  const getGPAColor = (value: number) => {
    if (value >= 90) return '#27ae60'; // Green
    if (value >= 80) return '#2980b9'; // Blue
    if (value >= 70) return '#f39c12'; // Orange
    return '#e74c3c'; // Red
  };

  return (
    <div className="gpa-display">
      <div className="gpa-main">
        <div
          className="gpa-circle"
          style={{ borderColor: getGPAColor(gpa.gpa) }}
        >
          <span className="gpa-value">{gpa.gpa.toFixed(2)}</span>
          <span className="gpa-label">GPA</span>
        </div>
      </div>
      <div className="gpa-details">
        <div className="gpa-detail">
          <span>Credits Completed:</span>
          <strong>{gpa.completedCredits}</strong>
        </div>
        <div className="gpa-detail">
          <span>Grade Points:</span>
          <strong>{gpa.totalGradePoints.toFixed(1)}</strong>
        </div>
      </div>
    </div>
  );
}
