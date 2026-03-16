import './components.css';
import { getAllDegreePrograms } from '@/data/degreePrograms';
import { t } from '@/i18n/hebrew';

interface DegreeSelectorProps {
  onSelectProgram: (programId: string) => void;
}

export default function DegreeSelector({ onSelectProgram }: DegreeSelectorProps) {
  const programs = getAllDegreePrograms();

  return (
    <div className="degree-selector">
      <h2>{t('selectDegreeProgram')}</h2>
      <p className="degree-selector-subtitle">
        בחר את תכנית התואר שלך מהרשימה הבאה
      </p>

      <div className="degree-grid">
        {programs.map(program => (
          <div key={program.id} className="degree-card">
            <h3>{program.nameHebrew}</h3>
            {program.name && <p className="degree-english-name">{program.name}</p>}
            {program.description && (
              <p className="degree-description">{program.description}</p>
            )}
            <div className="degree-info">
              <span className="degree-credits">
                {program.totalCredits} {t('credits')}
              </span>
              <span className="degree-core">
                חובה: {program.coreCredits}
              </span>
            </div>
            <button
              className="btn btn-primary btn-large"
              onClick={() => onSelectProgram(program.id)}
            >
              בחר תכנית זו
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
