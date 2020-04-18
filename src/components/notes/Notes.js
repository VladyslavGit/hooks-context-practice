import React from "react";
import styles from "./Notes.module.css";

export const Notes = ({ notes }) => {
  return (
    <ul className={styles.notesList}>
      {notes.map((note) => (
        <li className={styles.noteListItem} key={note.id}>
          {note.title}
          <button class={styles.btnDel} type="submit"></button>
        </li>
      ))}
    </ul>
  );
};
