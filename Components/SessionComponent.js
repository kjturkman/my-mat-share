import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { Badge } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export const SessionComponent = ({ sessions }) => {
  const renderSession = ({ item }) => {
    let sessionMonth = item.date.substring(4, 6);
    switch (sessionMonth) {
      case "01":
        sessionMonth = "JAN";
        break;
      case "02":
        sessionMonth = "FEB";
        break;
      case "03":
        sessionMonth = "MAR";
        break;
      case "04":
        sessionMonth = "APR";
        break;
      case "05":
        sessionMonth = "MAY";
        break;
      case "06":
        sessionMonth = "JUN";
        break;
      case "07":
        sessionMonth = "JUL";
        break;
      case "08":
        sessionMonth = "AUG";
        break;
      case "09":
        sessionMonth = "SEP";
        break;
      case "10":
        sessionMonth = "OCT";
        break;
      case "11":
        sessionMonth = "NOV";
        break;
      case "12":
        sessionMonth = "DEC";
        break;
      default:
        sessionMonth = "";
        break;
    }
    const sessionDay = item.date.substring(6, 8);
    const sessionTime = item.date.substring(9, 14);
    const sessionDate = `${sessionMonth} ${sessionDay}, 2020  -  ${sessionTime}`;

    return (
      <View style={styles.sessionView}>
        <LinearGradient
          colors={["black", "#D70000", "black"]}
          locations={[0.4, 0.6, 0.8]}
        >
          <View style={styles.sessionHeader}>
            <Text style={styles.sessionHeaderText}>{sessionDate}</Text>
            <Badge
              value={item.capacity}
              constainerStyle={{ position: "absolute", top: 8, right: 5 }}
              status="success"
            />
          </View>
          <Text style={styles.sessionBodyText}>{item.type}</Text>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.sessionComponent}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/fence.jpg")}
      />
      <Text style={styles.sessionComponentHeader}>
        Tap on a session to reserve a spot
      </Text>
      <Text style={styles.sessionComponentHeader}>and for more info:</Text>
      <FlatList
        data={sessions}
        renderItem={renderSession}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

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
    minWidth: 250,
    margin: 10,
  },
  sessionHeader: {
    flexDirection: "row",
    flex: 1,
  },
  sessionHeaderText: {
    fontSize: 20,
    color: "white",
  },
  sessionBodyText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  sessionComponent: {
    flex: 1,
    alignItems: "center",
  },
  sessionComponentHeader: {
    color: "white",
    fontSize: 24,
  },
});

export default SessionComponent;
