import { SESSIONS } from "../Shared/sessions";
import * as ActionTypes from "./ActionTypes";

export const Sessions = (state = SESSIONS, action) => {
  switch (action.type) {
    case ActionTypes.JOIN_CLASS:
      const newState = state.map((object) => {
        object.id === action.payload
          ? { ...object, reservations: [...reservations, 10] }
          : object;
      });
      return newState;
    default:
      return state;
  }
};
