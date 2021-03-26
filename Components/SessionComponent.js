import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SESSIONS } from "../Shared/sessions";
import { MEMBERS } from "../Shared/members";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
    members: state.members,
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
      let month = parseInt(date.substring(4, 6) - 1, 10);
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
        <TouchableOpacity
          onPress={() =>
            navigate("SessionInfo", {
              sessionId: item.id,
              sessions: this.props.sessions,
              members: this.props.members,
            })
          }
        >
          <Text>{sessionDate}</Text>
          <Text>{item.type}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Text>Upcoming Sessions</Text>
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
  },
  sessionView: {
    justifyContent: "center",
    minWidth: 300,
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  sessionHeader: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  sessionHeaderText: {
    fontSize: 20,
    color: "white",
    flex: 7,
    textAlign: "center",
  },
  sessionBodyText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  sessionComponent: {
    flex: 1,
    alignItems: "center",
  },
  sessionComponentHeader: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },
});

export default connect(mapStateToProps)(SessionComponent);
