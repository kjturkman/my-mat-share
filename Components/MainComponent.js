import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import SessionComponent from "./SessionComponent.js";
import SessionInfo from "./SessionInfoComponent";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const SessionsNavigator = createStackNavigator(
  {
    SessionComponent: { screen: SessionComponent },
    SessionInfo: { screen: SessionInfo },
  },
  {
    initialRouteName: "SessionComponent",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D80032",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "black",
      },
    },
  }
);

const AppNavigator = createAppContainer(SessionsNavigator);

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: "black",
    paddingBottom: 25,
  },
});

export default Main;
