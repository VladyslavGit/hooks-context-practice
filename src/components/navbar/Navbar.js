import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarLogo}>
      <img src={require("../../images/logo.png")} alt="Note app logo" />
    </div>
    <ul className={styles.navbarList}>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="/" exact>
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="/about" exact>
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
