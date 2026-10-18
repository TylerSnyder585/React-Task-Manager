"use client";

import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="visually-hidden">
        New task
      </label>
      <input
        id="new-task"
        type="text"
        placeholder="What needs doing?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}