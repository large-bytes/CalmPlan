// file: src/components/task_list/TaskList.tsx

import { TaskProps } from "../../assets/mockTasks.ts";
import Task from "./Task.js";

type TaskListProps = {
  tasks: TaskProps[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>{tasks && tasks.map((task) => <Task key={task.id} {...task} />)}</ul>
  );
};

export default TaskList;
