import { useStudentPlans } from '@/hooks/useStudentProgress';
import { t } from '@/i18n/hebrew';
import './components.css';

interface PlanSelectorProps {
  programId: string;
  onSelectPlan: (planId: string) => void;
  onCreateNew: () => void;
  onBack: () => void;
}

export default function PlanSelector({ programId, onSelectPlan, onCreateNew, onBack }: PlanSelectorProps) {
  const { plans, loading, deletePlan } = useStudentPlans();
  
  // Filter plans for the selected program
  const filteredPlans = plans.filter(plan => plan.programId === programId);

  return (
    <div className="plan-selector">
      <div className="view-header">
        <button className="btn btn-back" onClick={onBack}>
          ← {t('back')}
        </button>
        <h2>{t('myStudyPlans')}</h2>
      </div>

      {loading && <div className="loading">{t('loadingPlans')}</div>}

      {!loading && filteredPlans.length === 0 && (
        <div className="empty-state">
          <p>{t('noPlansYet')}</p>
        </div>
      )}

      {!loading && filteredPlans.length > 0 && (
        <div className="plans-grid">
          {filteredPlans.map(plan => (
            <div key={plan.planId} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="plan-date">
                {t('lastUpdated')}: {new Date(plan.lastUpdated).toLocaleDateString('he-IL')}
              </p>
              <div className="plan-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectPlan(plan.planId)}
                >
                  {t('openPlan')}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePlan(plan.planId)}
                >
                  {t('delete')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-large btn-success" onClick={onCreateNew}>
        + {t('createNewPlan')}
      </button>
    </div>
  );
}
