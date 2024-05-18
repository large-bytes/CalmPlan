// file: src/components/task_list/TaskList.tsx
import mockTasks from "../../assets/mockTasks.js";
import Task from "./Task.js";

const TaskList = () => {
  return (
    <ul>{mockTasks && mockTasks.map((task) => <Task name={task.name} />)}</ul>
  );
};

export default TaskList;
