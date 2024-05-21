// file: src/components/task_list/TaskList.tsx

import { TaskProps } from "../../assets/mockTasks.ts";
import Task from "./Task.js";

type TaskListProps = {
  tasks: TaskProps[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const isMoreThan3 = tasks.length > 3;
  let formattedTasks = tasks;
  if (isMoreThan3) {
    formattedTasks = tasks.slice(-3);
  }

  return (
    <>
      {isMoreThan3 && <p>...</p>}
      <ul>
        {formattedTasks &&
          formattedTasks.map((task) => <Task key={task.id} {...task} />)}
      </ul>
    </>
  );
};

export default TaskList;
