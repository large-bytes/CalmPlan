// file: src/hooks/useTaskManager.ts

import { useState } from "react";
import { v4 as uuid } from "uuid";
import mockTasks, { TaskProps } from "../assets/mockTasks";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(mockTasks);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const form = event.currentTarget; // Access the form element
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const details = formData.get("details") as string;
    const priority = formData.get("priority") as string;

    if (!name.trim()) return; // Ensure there's a name at least

    const newTask: TaskProps = {
      id: uuid(),
      name,
      details,
      priority,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    form.reset();
  };

  return { tasks, handleAddTask };
};
