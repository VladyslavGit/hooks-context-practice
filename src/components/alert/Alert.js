import React, { useContext } from "react";
import { AlertContext } from "./../../redux/alert/alertContext";
import styles from "./Alert.module.css";
import "./style.css";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div
      className={`${styles.alert}  ${alert.type || "warning"} ${
        styles.dismissible
      }`}
    >
      <div>
        <strong>Caution!</strong>
        <span className={styles.notifyType}>&nbsp;{alert.text}</span>
      </div>
      <button
        onClick={hide}
        type="button"
        className={styles.close}
        aria-label="Close"
      >
        <span aria-hidden="true"></span>
      </button>
    </div>
  );
};
