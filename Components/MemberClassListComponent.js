import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

function MemberClassList({ reservations, members }) {
  const renderMember = ({ item }) => {
    let member = members.filter(
      (member) => member.memberId === item.memberId
    )[0];

    return (
      <View>
        <Text style={{ color: "white" }}>
          {member.firstName} {member.lastName}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rosterHeader}>Current session roster:</Text>
      <FlatList
        data={reservations}
        renderItem={renderMember}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 900,
  },
  rosterHeader: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
  },
});

export default MemberClassList;
