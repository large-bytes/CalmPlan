// file: src/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./Layout.module.css";
import { TasksContext } from "./contexts/TasksContext";
import { useTaskManager } from "./hooks/useTaskManager";

const Layout = () => {
  const { tasks, handleAddTask } = useTaskManager();

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <h1 className={styles.logo}>CalmPlan [BETA]</h1>
        <Navbar />
      </div>
      <main className={styles.main}>
        <TasksContext.Provider value={{ tasks, handleAddTask }}>
          <Outlet />
        </TasksContext.Provider>
      </main>
    </div>
  );
};

export default Layout;
