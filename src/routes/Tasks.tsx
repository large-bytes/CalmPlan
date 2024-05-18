// file: src/routes/Tasks.tsx
import { useState } from "react";
import styles from "./Tasks.module.css";
import TaskList from "../components/task_list/TaskList";
import { TaskProps } from "../assets/mockTasks.ts";
import mockTasks from "../assets/mockTasks.ts";

const Tasks = () => {
  const [tasks] = useState<TaskProps[]>(mockTasks);

  return (
    <>
      <h2 className={styles.header}>Tasks</h2>
      <TaskList tasks={tasks} />
    </>
  );
};

export default Tasks;
