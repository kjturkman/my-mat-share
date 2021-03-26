import * as ActionTypes from "./ActionTypes";

export const joinClass = (session) => ({
  type: ActionTypes.JOIN_CLASS,
  payload: session,
});
