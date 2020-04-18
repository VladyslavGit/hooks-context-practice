import React from "react";
import { Form } from "../form/Form";
import { Notes } from "./../notes/Notes";

export const Home = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));
  return (
    <>
      <Form />
      <Notes notes={notes} />
    </>
  );
};
