"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const STORAGE_KEY = "tasks";

// Lazy load TaskStats: it only appears after a click.
const TaskStats = dynamic(() => import("./TaskStats"), {
  loading: () => <p>Loading stats...</p>,
});

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [showStats, setShowStats] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load saved tasks from localStorage when the component mounts.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to read tasks from localStorage", err);
    }

    setLoaded(true);
  }, []);

  // Save tasks to localStorage whenever tasks changes.
  useEffect(() => {
    if (!loaded) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to save tasks to localStorage", err);
    }
  }, [tasks, loaded]);

  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="task-manager">
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

      <button
        type="button"
        className="button-secondary"
        onClick={() => setShowStats((s) => !s)}
        aria-expanded={showStats}
      >
        {showStats ? "Hide stats" : "Show stats"}
      </button>

      {showStats && <TaskStats tasks={tasks} />}
    </div>
  );
}
