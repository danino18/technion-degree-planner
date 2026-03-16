import './components.css';

interface ProgressBarProps {
  completed: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ completed, total, label = 'Progress' }: ProgressBarProps) {
  const percentage = Math.min((completed / total) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="progress-bar-labels">
        <span className="progress-label">{label}</span>
        <span className="progress-value">
          {completed} / {total}
        </span>
      </div>
      <div className="progress-percentage">{Math.round(percentage)}%</div>
    </div>
  );
}
