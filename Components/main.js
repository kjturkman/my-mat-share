import React, { Component } from "react";
import Header from "./HeaderComponent";
import { MEMBERS } from "../Shared/members";
import { SESSIONS } from "../Shared/sessions";
import { View, StyleSheet } from "react-native";
import SessionComponent from "./SessionComponent.js";
import SessionInfo from "./SessionInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: MEMBERS,
      sessions: SESSIONS,
      selectedSession: null,
    };
  }

  onSessionSelect(sessionId) {
    this.setState({ selectedSession: sessionId });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SessionComponent
          sessions={this.state.sessions}
          onPress={(sessionId) => this.onSessionSelect(sessionId)}
        />
        <SessionInfo
          session={
            this.state.sessions.filter(
              (session) => session.id === this.state.selectedSession
            )[0]
          }
        />
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
