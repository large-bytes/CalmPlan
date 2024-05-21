// file: src/components/task_list/Task.tsx
import { TaskProps } from "../../../assets/mockTasks";
import styles from "./Task.module.css";

const Task = ({ name }: TaskProps) => {
  return <li className={styles.listItem}>{name}</li>;
};

export default Task;
