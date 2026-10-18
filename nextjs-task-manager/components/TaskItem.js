"use client";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task-item is-done" : "task-item"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        type="button"
        className="button-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.text}"`}
      >
        Delete
      </button>
    </li>
  );
}