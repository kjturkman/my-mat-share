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
  let image = session.image;
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/fence.jpg")}
      />
      <ImageBackground source={image} style={styles.subheader}>
        <View>
          <Text style={styles.headerText}>{sessionDay}</Text>
          <Text style={styles.headerText}>{sessionTime}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.sessionTitle}>{session.type}</Text>
      <Text style={styles.sessionInstructor}>with {session.instructor}</Text>
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
  container: {
    backgroundColor: "black",
  },
  subheader: {
    height: 100,
    justifyContent: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    color: "#E02929",
    fontWeight: "bold",
    alignSelf: "center",
    textShadowColor: "white",
    textShadowRadius: 7,
  },
  sessionTitle: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  sessionInstructor: {
    fontSize: 24,
    color: "#c4c1c0",
    alignSelf: "center",
    marginBottom: 20,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: -200,
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
});

export default connect(mapStateToProps)(SessionInfo);
