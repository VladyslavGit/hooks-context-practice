import React, { useState, useContext } from "react";
import styles from "./Form.module.css";
import { AlertContext } from "./../../redux/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = (event) => {
    event.preventDefault();
    alert.show(value, "success");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Enter your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button class={styles.btnAdd} type="submit"></button>
      </div>
      <hr class={styles.hr} />
    </form>
  );
};
