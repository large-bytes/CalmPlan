// file: src/hooks/useTaskManager.ts

import { useState } from "react";
import { v4 as uuid } from "uuid";
import mockTasks, { TaskProps } from "../assets/mockTasks";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(mockTasks);

  const handleAddTask = (taskInput: HTMLInputElement | null) => {
    // exit if the input doesn't exist or is only whitespace
    if (!taskInput || !taskInput.value.trim()) return;

    const newTask: TaskProps = {
      id: uuid(),
      name: taskInput.value.trim(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    taskInput.value = "";
  };

  return { tasks, handleAddTask };
};
