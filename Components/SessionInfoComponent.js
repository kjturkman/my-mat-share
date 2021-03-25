import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderSession({ session }) {
  if (session) {
    return (
      <Card
        featuredTitle={session.type}
        image={require("../assets/catchlogo.jpg")}
      >
        <Text>{session.instructor}</Text>
      </Card>
    );
  }
  return (
    <View>
      <Text>No session selected</Text>
    </View>
  );
}

function SessionInfo(props) {
  return <RenderSession session={props.session} />;
}

export default SessionInfo;
