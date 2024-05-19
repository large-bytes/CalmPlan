// file: src/contexts/TasksContexts.ts

import { createContext, useContext } from "react";
import { TaskProps } from "../assets/mockTasks";

type TasksContextType = {
  tasks: TaskProps[];
  handleAddTask: (taskInputRef: HTMLInputElement) => void;
};

// create Tasks context
export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

// create Tasks context hook
export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContext.Provider");
  }
  return context;
};
