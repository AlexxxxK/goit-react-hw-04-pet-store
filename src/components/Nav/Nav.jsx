import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navlist}>
      <li className={styles.navlistItem}>
        <NavLink
          to="/"
          exact
          className={styles.navlistLink}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navlistItem}>
        <NavLink
          to="/pets"
          className={styles.navlistLink}
          activeClassName={styles.active}
        >
          Pets
        </NavLink>
      </li>
      <li className={styles.navlistItem}>
        <NavLink
          to="/about"
          className={styles.navlistLink}
          activeClassName={styles.active}
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
