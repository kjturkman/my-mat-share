import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Sessions } from "./sessions";
import { Members } from "./members";
import { Reservations } from "./reservations";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      sessions: Sessions,
      members: Members,
      reservations: Reservations,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
