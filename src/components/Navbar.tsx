// file: src/components/Navbar.tsx

import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/tasks"
        >
          Tasks
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
