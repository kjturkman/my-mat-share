import { RESERVATIONS } from "../Shared/reservations";
import * as ActionTypes from "./ActionTypes";

export const Reservations = (state = RESERVATIONS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_RES:
      let newRes = {
        id: state.length,
        sessionId: action.payload,
        memberId: "10",
      };
      return [...state.concat(newRes)];
    case ActionTypes.CANCEL_RES:
      return [
        ...state.filter(
          (item) =>
            item.sessionId !== action.payload ||
            (item.sessionId === action.payload && item.memberId !== "10")
        ),
      ];
    default:
      return state;
  }
};
