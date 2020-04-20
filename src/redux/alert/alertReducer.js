import { SHOW_ALLERT } from "./../types";
import { HIDE_ALLERT } from "./../types";

const handlers = {
  [SHOW_ALLERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALLERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
