import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import MemberClassList from "./MemberClassListComponent";
import CheckIn from "./CheckInComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
    members: state.members,
    reservations: state.reservations,
  };
};

function RenderSession({ session, members, reservations }) {
  let sessionReservations = reservations.filter(
    (item) => item.sessionId === session.sessionId
  );
  if (session) {
    return (
      <View>
        <Image source={require("../Shared/nogijiujitsu.jpg")} />
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
    const session = this.props.sessions.filter(
      (session) => session.id === sessionId
    )[0];
    return (
      <RenderSession
        session={session}
        members={this.props.members}
        reservations={this.props.reservations}
      />
    );
  }
}

export default connect(mapStateToProps)(SessionInfo);
