// file: src/routes/Tasks.tsx
import { useTasks } from "../contexts/TasksContext";

import styles from "./Tasks.module.css";
import TaskList from "../components/task_list/TaskList";

const Tasks: React.FC = () => {
  const { tasks, handleAddTask } = useTasks();

  return (
    <>
      <h2 className={styles.header}>Tasks</h2>
      <TaskList tasks={tasks} />
      <form onSubmit={handleAddTask}>
        <label htmlFor="name">Title</label>
        <br />
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="details">Details</label>
        <br />
        <input type="text" name="details" id="details" />
        <br />
        <label htmlFor="priority">Priority</label>
        <br />
        <input type="text" name="priority" id="priority" />
        <br />
        <input type="submit" value="Add Task" />
      </form>
    </>
  );
};

export default Tasks;
