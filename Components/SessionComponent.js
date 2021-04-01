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
import { LinearGradient } from "expo-linear-gradient";

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
      if (cropTime[0] === "0") {
        cropTime = cropTime.substring(1, 5);
      }
      const sessionDate = `${cropDate}, ${cropTime}`;

      return (
        <Animatable.View animation="fadeInUpBig" duration={5000}>
          <TouchableOpacity
            onPress={() =>
              navigate("SessionInfo", {
                sessionId: item.id,
                sessionDate: sessionDate,
              })
            }
            style={styles.sessionView}
          >
            <LinearGradient colors={["rgba(255,0,0,0.7)", "transparent"]}>
              <Text style={styles.sessionBodyText}>
                {cropDate} -{" "}
                <Text style={{ fontWeight: "bold" }}>{cropTime}</Text>
              </Text>
              <Text style={styles.sessionBodyText2}>{item.type}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      );
    };

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/fence.jpg")}
        />
        <Text style={styles.sessionHeaderText}>UPCOMING SESSIONS:</Text>
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
  container: {
    paddingBottom: 50,
    backgroundColor: "black",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: -200,
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  sessionView: {
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "black",
  },
  sessionHeader: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  sessionHeaderText: {
    fontSize: 32,
    color: "#c4c1c0",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    textAlign: "center",
    marginBottom: 10,
  },
  sessionBodyText: {
    fontSize: 24,
    fontFamily: "Roboto",
    textAlign: "center",
    color: "#c4c1c0",
  },
  sessionBodyText2: {
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
    color: "white",
  },
  sessionComponentHeader: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },
});

export default connect(mapStateToProps)(SessionComponent);
