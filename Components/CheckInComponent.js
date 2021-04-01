import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";
import * as Animatable from "react-native-animatable";

const CheckIn = ({ session, reservations }) => {
  const dispatch = useDispatch();
  const pulse = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.3,
    },
    1: {
      scale: 1,
    },
  };

  if (reservations.filter((item) => item.memberId === "10")[0]) {
    return (
      <View style={styles.container}>
        <Animatable.View
          animation="tada"
          duration={1000}
          iterationCount="infinite"
          iterationDelay={1000}
        >
          <Text style={styles.tapCancel}>See you in class!</Text>
        </Animatable.View>
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
    return (
      <Animatable.View
        animation={pulse}
        iterationCount="infinite"
        iterationDelay={1000}
        duration={2000}
      >
        <Text style={styles.sessionFull}>Session is full!</Text>
      </Animatable.View>
    );
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
        <Animatable.View
          animation="flash"
          iterationCount="infinite"
          iterationDelay={1500}
        >
          <Text style={styles.buttonText}>OSS!</Text>
        </Animatable.View>
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
    fontSize: 24,
    color: "#20833E",
    alignSelf: "center",
    marginBottom: 8,
    fontWeight: "bold",
  },
  tapCancel: {
    fontSize: 24,
    color: "blue",
    alignSelf: "center",
    marginBottom: 8,
    fontWeight: "bold",
  },
  container: {
    width: 225,
    alignSelf: "center",
  },
  buttonOss: {
    alignSelf: "center",
    backgroundColor: "#20833E",
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
