import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Badge } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

function SessionComponent(props) {
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
      <TouchableOpacity>
        <LinearGradient
          style={styles.sessionView}
          colors={["black", "#D70000"]}
          locations={[0.3, 0.7]}
        >
          <View style={styles.sessionHeader}>
            <Text style={styles.sessionHeaderText}>{sessionDate}</Text>
            <Badge style={{ flex: 1 }} value={item.capacity} status="success" />
          </View>
          <Text style={styles.sessionBodyText}>{item.type}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.sessionComponent}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/fence.jpg")}
      />
      <Text style={styles.sessionComponentHeader}>
        Tap on a session to reserve a spot and for more info:
      </Text>
      <FlatList
        data={props.sessions}
        renderItem={renderSession}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
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

export default SessionComponent;
