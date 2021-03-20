import React, { Component } from "react";
import { MEMBERS } from "../Shared/members";
import { SESSIONS } from "../Shared/sessions";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";

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
      return (
        <Card title={`${item.month}-${item.day}-${item.year}`}>
          <Text>{item.instructor}</Text>
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

export default Main;
