// file: src/Layout.tsx

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./components/Navbar";

import styles from "./Layout.module.css";
import mockTasks from "./assets/mockTasks";
import { TaskProps } from "./assets/mockTasks";
import { TasksContext } from "./contexts/TasksContext";

const Layout = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(mockTasks);

  const handleAddTask = (taskInput: HTMLInputElement | null) => {
    const inputValue = taskInput?.value;
    if (!inputValue || inputValue?.trim() === "") return;

    const newTask: TaskProps = {
      id: uuid(),
      name: inputValue,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    taskInput.value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <h1 className={styles.logo}>CalmPlan</h1>
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
