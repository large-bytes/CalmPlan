// file: src/components/task_form/TaskForm.tsx
import { useTasks } from "../../contexts/TasksContext";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const { handleAddTask } = useTasks();

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <label htmlFor="name">Title</label>
      <input className={styles.formInput} type="text" name="name" id="name" />
      <label htmlFor="details">Details</label>
      <textarea
        className={styles.formInput}
        rows={4}
        name="details"
        id="details"
      />
      <label>Priority</label>
      <label htmlFor="one">
        One
        <input
          className={styles.formInput}
          type="radio"
          name="priority"
          id="one"
          value="one"
        />
      </label>
      <label htmlFor="two">
        Two
        <input
          className={styles.formInput}
          type="radio"
          name="priority"
          id="two"
          value="two"
        />
      </label>
      <label htmlFor="three">
        Three
        <input
          className={styles.formInput}
          type="radio"
          name="priority"
          id="three"
          value="three"
        />
      </label>
      <label htmlFor="four">
        Four
        <input
          className={styles.formInput}
          type="radio"
          name="priority"
          id="four"
          value="four"
        />
      </label>

      <label htmlFor="five">
        Five
        <input
          className={styles.formInput}
          type="radio"
          name="priority"
          id="five"
          value="five"
        />
      </label>
      <input className={styles.formSubmit} type="submit" value="Add Task" />
    </form>
  );
};

export default TaskForm;
