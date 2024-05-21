// file: src/components/task_form/TaskForm.tsx
import { useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const { handleAddTask } = useTasks();
  const [selectedPriority, setSelectedPriority] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPriority(event.target.value);
  };

  const toggleViewDetails = () => {
    setViewDetails((prevVal) => !prevVal);
    if (!viewDetails) setSelectedPriority("");
  };

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <label htmlFor="name">Title</label>
      <div className={styles.titleRow}>
        <input className={styles.formInput} type="text" name="name" id="name" />
        <button
          type="button"
          onClick={toggleViewDetails}
          className={styles.revealButton}
        >
          {viewDetails ? (
            <span className={styles.chevronUp}>&#8963;</span>
          ) : (
            <span className={styles.chevronDown}>&#8964;</span>
          )}
        </button>
      </div>
      {viewDetails && (
        <div className={styles.furtherInfo}>
          <label htmlFor="details">Details</label>
          <textarea
            className={styles.formInput}
            rows={4}
            name="details"
            id="details"
          />
          <label>Priority</label>
          <div className={styles.priorityContainer}>
            {["one", "two", "three", "four", "five"].map((priority, index) => (
              <label
                key={priority}
                className={`${styles.label} ${
                  selectedPriority === priority ? styles.selected : ""
                }`}
                htmlFor={priority}
              >
                <input
                  className={`${styles.formInput} ${styles.visuallyHidden}`}
                  type="radio"
                  name="priority"
                  id={priority}
                  value={priority}
                  onChange={handleChange}
                  checked={selectedPriority === priority}
                />
                <span>{["😴", "😌", "😐", "😰", "😱"][index]}</span>
              </label>
            ))}
          </div>
        </div>
      )}
      <input className={styles.formSubmit} type="submit" value="Add Task" />
    </form>
  );
};

export default TaskForm;
