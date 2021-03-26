import React, { Component } from "react";
import { View, StyleSheet, Platform, Image } from "react-native";
import SessionComponent from "./SessionComponent.js";
import SessionInfo from "./SessionInfoComponent";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const SessionsNavigator = createStackNavigator(
  {
    SessionComponent: { screen: SessionComponent },
    SessionInfo: { screen: SessionInfo },
  },
  {
    initialRouteName: "SessionComponent",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerBackground: (
        <Image
          style={{
            width: 300,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("../assets/catchlogo.jpg")}
        />
      ),
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "fff",
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
  headerImage: {
    width: 300,
    height: 100,
  },
});

export default Main;
