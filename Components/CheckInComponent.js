import React from "react";
import { Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";

const CheckIn = ({ session }) => {
  const dispatch = useDispatch();
  if (!(session.capacity - session.reservations.length)) {
    return <Text>Sorry, session is full!</Text>;
  }
  if (session.reservations.includes(10)) {
    return <Text>You are already registered for this session!</Text>;
  }
  return (
    <Button
      onPress={() =>
        dispatch({ type: ActionTypes.JOIN_CLASS, payload: session.id })
      }
      title="Tap to reserve your spot!"
    />
  );
};

export default CheckIn;
