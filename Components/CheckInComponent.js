import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";

const CheckIn = ({ session, reservations }) => {
  const dispatch = useDispatch();

  if (reservations.filter((item) => item.memberId === "10")[0]) {
    return (
      <View style={styles.container}>
        <Text style={styles.tapCancel}>See you in class!</Text>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              type: ActionTypes.CANCEL_RES,
              payload: session.sessionId,
            })
          }
          style={styles.buttonCancel}
        >
          <Text style={styles.buttonCancelText}>Cancel reservation</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (!(session.capacity - reservations.length)) {
    return <Text style={styles.sessionFull}>Sorry, session is full!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tapReserve}>Tap to reserve spot:</Text>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: ActionTypes.ADD_RES, payload: session.sessionId })
        }
        style={styles.buttonOss}
      >
        <Text style={styles.buttonText}>OSS!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionFull: {
    fontSize: 24,
    color: "red",
    alignSelf: "center",
    fontWeight: "bold",
  },
  tapReserve: {
    fontSize: 18,
    color: "green",
    alignSelf: "center",
    marginBottom: 8,
    fontWeight: "bold",
  },
  tapCancel: {
    fontSize: 20,
    color: "blue",
    alignSelf: "center",
    marginBottom: 8,
    fontWeight: "bold",
  },
  container: {
    width: 175,
    alignSelf: "center",
  },
  buttonOss: {
    alignSelf: "center",
    backgroundColor: "green",
    width: 175,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    elevation: 5,
  },
  buttonCancel: {
    alignSelf: "center",
    backgroundColor: "blue",
    width: 175,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    elevation: 5,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
  },
  buttonCancelText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
});

export default CheckIn;
