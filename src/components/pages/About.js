import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          src={require("../../images/logo.png")}
          alt="Note app logo"
          className={styles.logo}
        />
        <h2 className={styles.title}>Note App</h2>
        <p className={styles.version}> Version 1.2 (201.3)</p>
        <p className={styles.autor}>
          Copyright &copy; 2020{" "}
          <a
            href="https://github.com/VladyslavGit"
            target="blanc"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Vladyslav inc.
          </a>
          <span className={styles.span}>All rights reserved.</span>
        </p>
      </div>
    </>
  );
};
