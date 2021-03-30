import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";

const CheckIn = ({ session, reservations }) => {
  const dispatch = useDispatch();

  if (reservations.filter((item) => item.memberId === "10")[0]) {
    return (
      <View>
        <Text>You are already registered for this session!</Text>
        <Button
          onPress={() =>
            dispatch({
              type: ActionTypes.CANCEL_RES,
              payload: session.sessionId,
            })
          }
          title="Tap to cancel reservation"
        />
      </View>
    );
  } else if (!(session.capacity - reservations.length)) {
    return <Text>Sorry, session is full!</Text>;
  }

  return (
    <Button
      onPress={() =>
        dispatch({ type: ActionTypes.ADD_RES, payload: session.sessionId })
      }
      title="Tap to reserve your spot!"
    />
  );
};

export default CheckIn;
