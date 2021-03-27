import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";
import MemberClassList from "./MemberClassListComponent";
import CheckIn from "./CheckInComponent";

function RenderSession({ session, members }) {
  if (session) {
    return (
      <View>
        <Image source={require("../Shared/kickboxing.jpg")} />
        <Text>{session.type}</Text>
        <Text>{session.instructor}</Text>
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
  }
  static navigationOptions = {
    title: "",
  };

  render() {
    const sessionId = this.props.navigation.getParam("sessionId");
    const sessions = this.props.navigation.getParam("sessions");
    const members = this.props.navigation.getParam("members");
    const session = sessions.filter((session) => session.id === sessionId)[0];
    return <RenderSession session={session} members={members} />;
  }
}

export default SessionInfo;
