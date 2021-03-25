import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { SESSIONS } from "../Shared/sessions";

function RenderSession({ session }) {
  if (session) {
    return (
      <Card
        featuredTitle={session.type}
        image={require("../assets/catchlogo.jpg")}
      >
        <Text>{session.instructor}</Text>
      </Card>
    );
  }
  return <View />;
}

class SessionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: SESSIONS,
    };
  }

  static navigationOptions = {
    title: "Session Info",
  };

  render() {
    const sessionId = this.props.navigation.getParam("sessionId");
    const session = this.state.sessions.filter(
      (session) => session.id === sessionId
    )[0];
    return <RenderSession session={session} />;
  }
}

export default SessionInfo;
