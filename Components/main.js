import React, { Component } from "react";
import Header from "./HeaderComponent";
import { MEMBERS } from "../Shared/members";
import { SESSIONS } from "../Shared/sessions";
import { View, StyleSheet } from "react-native";
import SessionComponent from "./SessionComponent.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: MEMBERS,
      sessions: SESSIONS,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SessionComponent sessions={this.state.sessions} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 25,
  },
});

export default Main;
