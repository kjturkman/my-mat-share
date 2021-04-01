import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
    members: state.members,
    reservations: state.reservations,
  };
};

class SessionComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderSession = ({ item }) => {
      const date = item.date;
      let month = parseInt(date.substring(4, 6), 10);
      let day = parseInt(date.substring(6, 8), 10);
      let hours = parseInt(date.substring(9, 11), 10);
      let minutes = parseInt(date.substring(12, 14), 10);
      const d = new Date();
      d.setMonth(month);
      d.setDate(day);
      d.setHours(hours);
      d.setMinutes(minutes);
      let cropDate = d.toString().substring(0, 10);
      let cropTime = d.toString().substring(16, 21);
      const sessionDate = `${cropDate}, ${cropTime}`;

      return (
        <Animatable.View animation="zoomInUp" duration={4000}>
          <TouchableOpacity
            onPress={() =>
              navigate("SessionInfo", {
                sessionId: item.id,
                sessionDate: sessionDate,
              })
            }
            style={styles.sessionView}
          >
            <Text style={styles.sessionBodyText}>{sessionDate}</Text>
            <Text style={styles.sessionBodyText}>{item.type}</Text>
          </TouchableOpacity>
        </Animatable.View>
      );
    };

    return (
      <View>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/fence.jpg")}
        />
        <Text style={styles.sessionHeaderText}>Upcoming Sessions</Text>
        <FlatList
          data={this.props.sessions}
          renderItem={renderSession}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: -200,
    bottom: 0,
    right: 0,
    opacity: 0.9,
  },
  sessionView: {
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
  },
  sessionHeader: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  sessionHeaderText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  sessionBodyText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  sessionComponentHeader: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },
});

export default connect(mapStateToProps)(SessionComponent);
