import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALLERT, HIDE_ALLERT } from "./../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALLERT,
      payload: { text, type },
    });
  };

  const hide = () => dispatch({ type: HIDE_ALLERT });

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
