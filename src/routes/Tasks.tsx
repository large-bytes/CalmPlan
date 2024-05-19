// file: src/routes/Tasks.tsx
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Tasks.module.css";
import TaskList from "../components/task_list/TaskList";
import { TaskProps } from "../assets/mockTasks.ts";
import mockTasks from "../assets/mockTasks.ts";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(mockTasks);
  const taskInputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    const taskInput = taskInputRef?.current?.value;
    if (!taskInput || taskInput?.trim() === "") return;

    const newTask = {
      id: uuid(),
      name: taskInput,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    taskInputRef.current.value = "";
  };

  return (
    <>
      <h2 className={styles.header}>Tasks</h2>
      <TaskList tasks={tasks} />
      <input ref={taskInputRef} type="text" />
      <button onClick={handleAddTask}>Add Task</button>
    </>
  );
};

export default Tasks;
