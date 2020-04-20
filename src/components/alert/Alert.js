import React from "react";
import styles from "./Alert.module.css";

export const Alert = ({ alert }) => {
  if (!alert) {
    return null;
  }
  return (
    <div
      className={`styles.alert + '' + ${styles.alert.type || "warning"} + '' +
        styles.dismissible
      `}
    >
      <strong>Caution!</strong>
      <span className={styles.notifyType}>&nbsp;{alert.text}</span>
      <button type="button" className={styles.close} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
