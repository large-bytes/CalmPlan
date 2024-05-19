// file: src/routes/Tasks.tsx
import { useRef } from "react";
import { useTasks } from "../contexts/TasksContext";

import styles from "./Tasks.module.css";
import TaskList from "../components/task_list/TaskList";

const Tasks: React.FC = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const { tasks, handleAddTask } = useTasks();

  return (
    <>
      <h2 className={styles.header}>Tasks</h2>
      <TaskList tasks={tasks} />
      <input ref={taskInputRef} type="text" />
      <button
        onClick={() =>
          taskInputRef.current && handleAddTask(taskInputRef.current)
        }
      >
        Add Task
      </button>
    </>
  );
};

export default Tasks;
