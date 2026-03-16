import React, { useState } from 'react';
import './App.css';
import PlanSelector from '@/components/PlanSelector';
import DashboardView from '@/components/DashboardView';
import PlannerView from '@/components/PlannerView';

type ViewMode = 'plans' | 'dashboard' | 'planner';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('plans');
  const [activePlanId, setActivePlanId] = useState<string | null>(null);

  const handleSelectPlan = (planId: string) => {
    setActivePlanId(planId);
    setCurrentView('dashboard');
  };

  const handleCreateNewPlan = () => {
    const newPlanId = `plan_${Date.now()}`;
    setActivePlanId(newPlanId);
    setCurrentView('dashboard');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Technion Degree Planner</h1>
        <p>Electrical Engineering B.Sc.</p>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-button ${currentView === 'plans' ? 'active' : ''}`}
          onClick={() => setCurrentView('plans')}
        >
          My Plans
        </button>
        {activePlanId && (
          <>
            <button
              className={`nav-button ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`nav-button ${currentView === 'planner' ? 'active' : ''}`}
              onClick={() => setCurrentView('planner')}
            >
              Plan Builder
            </button>
          </>
        )}
      </nav>

      <main className="app-main">
        {currentView === 'plans' && (
          <PlanSelector
            onSelectPlan={handleSelectPlan}
            onCreateNew={handleCreateNewPlan}
          />
        )}

        {currentView === 'dashboard' && activePlanId && (
          <DashboardView planId={activePlanId} />
        )}

        {currentView === 'planner' && activePlanId && (
          <PlannerView planId={activePlanId} />
        )}
      </main>
    </div>
  );
}
