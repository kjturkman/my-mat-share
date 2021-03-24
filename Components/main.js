import React, { Component } from "react";
import { MEMBERS } from "../Shared/members";
import { SESSIONS } from "../Shared/sessions";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Card, Badge } from "react-native-elements";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: MEMBERS,
      sessions: SESSIONS,
    };
  }

  render() {
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
      const sessionDate = `${sessionMonth} ${sessionDay}, 2020`;

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
      <FlatList
        data={this.state.sessions}
        renderItem={renderSession}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: "row",
  },
  cardBodyText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Main;
