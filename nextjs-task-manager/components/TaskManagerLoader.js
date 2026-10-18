"use client";

import dynamic from "next/dynamic";

const TaskManager = dynamic(() => import("./TaskManager"), {
  ssr: false,
  loading: () => <p>Loading your tasks...</p>,
});

export default function TaskManagerLoader() {
  return <TaskManager />;
}
