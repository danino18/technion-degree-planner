import React from 'react';
import { useStudentPlans } from '@/hooks/useStudentProgress';
import './components.css';

interface PlanSelectorProps {
  onSelectPlan: (planId: string) => void;
  onCreateNew: () => void;
}

export default function PlanSelector({ onSelectPlan, onCreateNew }: PlanSelectorProps) {
  const { plans, loading, deletePlan } = useStudentPlans();

  return (
    <div className="plan-selector">
      <h2>My Study Plans</h2>

      {loading && <div className="loading">Loading plans...</div>}

      {!loading && plans.length === 0 && (
        <div className="empty-state">
          <p>No study plans yet. Create one to get started!</p>
        </div>
      )}

      {!loading && plans.length > 0 && (
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.planId} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="plan-date">
                Last updated: {new Date(plan.lastUpdated).toLocaleDateString()}
              </p>
              <div className="plan-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectPlan(plan.planId)}
                >
                  Open Plan
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePlan(plan.planId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-large btn-success" onClick={onCreateNew}>
        + Create New Plan
      </button>
    </div>
  );
}
