import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Enter your task"
        />
        <button class={styles.btnAdd} type="submit"></button>
      </div>
      <hr class={styles.hr} />
    </form>
  );
};
