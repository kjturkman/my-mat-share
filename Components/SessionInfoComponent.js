import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { SESSIONS } from "../Shared/sessions";
import { MEMBERS } from "../Shared/members";
import MemberClassList from "./MemberClassListComponent";
import CheckIn from "./CheckInComponent";

function RenderSession({ session, members }) {
  if (session) {
    return (
      <View>
        <Card
          featuredTitle={session.type}
          image={require("../assets/catchlogo.jpg")}
        >
          <Text>{session.instructor}</Text>
        </Card>
        <CheckIn session={session} />
        <MemberClassList
          reservations={session.reservations}
          members={members}
        />
      </View>
    );
  }
  return <View />;
}

class SessionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: SESSIONS,
      members: MEMBERS,
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
    return <RenderSession session={session} members={this.state.members} />;
  }
}

export default SessionInfo;
