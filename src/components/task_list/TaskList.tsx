// file: src/components/task_list/TaskList.tsx

import { TaskProps } from "../../assets/mockTasks.ts";
import Task from "./Task.js";

type TaskListProps = {
  tasks: TaskProps[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const isMoreThan5 = tasks.length > 5;
  let formattedTasks = tasks;
  if (isMoreThan5) {
    formattedTasks = tasks.slice(-5);
  }

  return (
    <>
      {isMoreThan5 && <p>...</p>}
      <ul>
        {formattedTasks &&
          formattedTasks.map((task) => <Task key={task.id} {...task} />)}
      </ul>
    </>
  );
};

export default TaskList;
