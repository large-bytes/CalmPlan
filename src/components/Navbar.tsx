// file: src/components/Navbar.tsx

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
