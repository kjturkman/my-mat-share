import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
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

function RenderSession({ session, members, reservations, sessionDate }) {
  let sessionReservations = reservations.filter(
    (item) => item.sessionId === session.sessionId
  );
  let sessionDay = sessionDate.substring(0, 10);
  let sessionTime = sessionDate.substring(12, 18);
  return (
    <View>
      <ImageBackground
        source={require("../Shared/kickboxing.jpg")}
        style={styles.subheader}
      >
        <View>
          <Text style={styles.headerText}>{sessionDay}</Text>
          <Text style={styles.headerText}>{sessionTime}</Text>
        </View>
      </ImageBackground>
      <Text>
        {session.type} with {session.instructor}
      </Text>
      <CheckIn session={session} reservations={sessionReservations} />
      <MemberClassList reservations={sessionReservations} members={members} />
    </View>
  );
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
    const sessionDate = this.props.navigation.getParam("sessionDate");
    const session = this.props.sessions.filter(
      (session) => session.id === sessionId
    )[0];
    return (
      <RenderSession
        session={session}
        sessionDate={sessionDate}
        members={this.props.members}
        reservations={this.props.reservations}
      />
    );
  }
}

const styles = StyleSheet.create({
  subheader: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default connect(mapStateToProps)(SessionInfo);
