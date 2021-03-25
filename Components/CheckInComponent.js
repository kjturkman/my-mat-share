import React from "react";
import { View, Text, Button } from "react-native";

function CheckIn({ session }) {
  if (!(session.capacity - session.reservations.length)) {
    return <Text>Sorry, session is full!</Text>;
  }
  if (session.reservations.includes(99)) {
    return <Text>You are already registered for this session!</Text>;
  }
  return <Button title="Tap to reserve your spot!" />;
}

export default CheckIn;
