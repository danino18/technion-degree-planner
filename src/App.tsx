import { useState } from 'react';
import './App.css';
import PlanSelector from '@/components/PlanSelector';
import DashboardView from '@/components/DashboardView';
import PlannerView from '@/components/PlannerView';
import DegreeSelector from '@/components/DegreeSelector';
import { t } from '@/i18n/hebrew';

type ViewMode = 'program-select' | 'plans' | 'dashboard' | 'planner';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('program-select');
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>('ee');

  const handleSelectProgram = (programId: string) => {
    setSelectedProgram(programId);
    setCurrentView('plans');
  };

  const handleSelectPlan = (planId: string) => {
    setActivePlanId(planId);
    setCurrentView('dashboard');
  };

  const handleCreateNewPlan = () => {
    const newPlanId = `plan_${Date.now()}`;
    setActivePlanId(newPlanId);
    setCurrentView('dashboard');
  };

  const handleBackToPrograms = () => {
    setCurrentView('program-select');
    setSelectedProgram(null);
    setActivePlanId(null);
  };

  return (
    <div className="app" dir="rtl">
      <header className="app-header">
        <h1>🎓 {t('appTitle')}</h1>
        <p>{t('appSubtitle')}</p>
      </header>

      {currentView !== 'program-select' && (
        <nav className="app-nav">
          <button className="nav-button" onClick={handleBackToPrograms}>
            ← {t('degreePrograms')}
          </button>
          {selectedProgram && (
            <button
              className={`nav-button ${currentView === 'plans' ? 'active' : ''}`}
              onClick={() => setCurrentView('plans')}
            >
              {t('myPlans')}
            </button>
          )}
          {activePlanId && (
            <>
              <button
                className={`nav-button ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={() => setCurrentView('dashboard')}
              >
                {t('dashboard')}
              </button>
              <button
                className={`nav-button ${currentView === 'planner' ? 'active' : ''}`}
                onClick={() => setCurrentView('planner')}
              >
                {t('planBuilder')}
              </button>
            </>
          )}
        </nav>
      )}

      <main className="app-main">
        {currentView === 'program-select' && (
          <DegreeSelector onSelectProgram={handleSelectProgram} />
        )}

        {currentView === 'plans' && selectedProgram && (
          <PlanSelector
            programId={selectedProgram}
            onSelectPlan={handleSelectPlan}
            onCreateNew={handleCreateNewPlan}
            onBack={handleBackToPrograms}
          />
        )}

        {currentView === 'dashboard' && activePlanId && selectedProgram && (
          <DashboardView planId={activePlanId} programId={selectedProgram} />
        )}

        {currentView === 'planner' && activePlanId && selectedProgram && (
          <PlannerView planId={activePlanId} programId={selectedProgram} />
        )}
      </main>
    </div>
  );
}
