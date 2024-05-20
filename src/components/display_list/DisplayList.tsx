// file: src/components/display_list/DisplayList.tsx
import { useTasks } from "../../contexts/TasksContext";
import styles from "./DisplayList.module.css";

const DisplayList = () => {
  const { tasks } = useTasks();
  const getStyle = (priority: string | undefined): string => {
    const priorityStyle = {
      one: styles.one,
      two: styles.two,
      three: styles.three,
      four: styles.four,
      five: styles.five,
    };
    return (
      priorityStyle[priority as keyof typeof priorityStyle] || styles.three
    );
  };

  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li className={getStyle(task.priority)}>{task.name}</li>
        ))}
    </ul>
  );
};

export default DisplayList;
