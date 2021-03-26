import { SESSIONS } from "../Shared/sessions";
import { MEMBERS } from "../Shared/members";

export const initialState = {
  sessions: SESSIONS,
  members: MEMBERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
