import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import MemberClassList from "./MemberClassListComponent";
import CheckIn from "./CheckInComponent";

function RenderSession({ session, members, reservations }) {
  let sessionReservations = reservations.filter(
    (item) => item.sessionId === session.sessionId
  );
  if (session) {
    return (
      <View>
        <Image source={require("../Shared/gijiujitsu.jpg")} />
        <Text>{session.type}</Text>
        <Text>{session.instructor}</Text>
        <CheckIn session={session} reservations={sessionReservations} />
        <MemberClassList reservations={sessionReservations} members={members} />
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
    const reservations = this.props.navigation.getParam("reservations");
    const session = sessions.filter((session) => session.id === sessionId)[0];
    return (
      <RenderSession
        session={session}
        members={members}
        reservations={reservations}
      />
    );
  }
}

export default SessionInfo;
