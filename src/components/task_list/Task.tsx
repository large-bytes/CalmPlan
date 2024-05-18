// file: src/components/task_list/Task.tsx
import { TaskProps } from "../../assets/mockTasks";

const Task = ({ name }: TaskProps) => {
  return <li>{name}</li>;
};

export default Task;
