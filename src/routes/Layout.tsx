// file: src/routes/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <h1 className={styles.logo}>CalmPlan</h1>
        <Navbar />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
