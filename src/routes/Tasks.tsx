// file: src/routes/Tasks.tsx
import { useTasks } from "../contexts/TasksContext";

import TaskList from "../components/task_list/TaskList";
import TaskForm from "../components/task_form/TaskForm";

const Tasks: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <>
      <TaskList tasks={tasks} />
      <TaskForm />
    </>
  );
};

export default Tasks;
