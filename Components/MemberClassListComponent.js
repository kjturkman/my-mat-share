import React from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function MemberClassList({ reservations, members }) {
  const renderMember = ({ item }) => {
    let member = members.filter((member) => member.id === item)[0];

    return (
      <View>
        <Text>
          {member.firstName} {member.lastName}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Current session roster:</Text>
      <FlatList
        data={reservations}
        renderItem={renderMember}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}
export default MemberClassList;