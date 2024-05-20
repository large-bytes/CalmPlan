// file: src/components/task_form/TaskForm.tsx

import { useTasks } from "../../contexts/TasksContext";

const TaskForm = () => {
  const { handleAddTask } = useTasks();

  return (
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
  );
};

export default TaskForm;
