"use client";

// TaskStats: a small summary panel. This component is finished.
// Your job is to lazy load it (see the TODO in TaskManager.js).

export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.completed).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="task-stats">
      <p>
        {done} of {total} tasks complete ({percent}%)
      </p>
      <div
        className="progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label="Tasks complete"
      >
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
