import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Card, Badge } from "react-native-elements";

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
      <Card title={sessionDate}>
        <View style={styles.cardBody}>
          <Badge value={item.capacity} status="success" />
          <Text style={styles.cardBodyText}>
            {item.type} w/{item.instructor}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View>
      <FlatList
        data={sessions}
        renderItem={renderSession}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: "row",
  },
  cardBodyText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SessionComponent;
