import { SESSIONS } from "../Shared/sessions";
import * as ActionTypes from "./ActionTypes";

export const Sessions = (state = SESSIONS, action) => {
  switch (action.type) {
    case ActionTypes.JOIN_CLASS:
      let newSession = state[action.payload].reservations.concat(10);
      return { ...state, newSession };
    default:
      return state;
  }
};
