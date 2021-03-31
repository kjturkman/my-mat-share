import React from "react";
import { Image } from "react-native";
import { Text, View, FlatList, StyleSheet } from "react-native";

function MemberClassList({ reservations, members }) {
  const renderMember = ({ item }) => {
    let member = members.filter(
      (member) => member.memberId === item.memberId
    )[0];

    return (
      <View style={styles.memberView}>
        <Image
          source={require("../Shared/CatchMaskWhite_1.png")}
          style={styles.mask}
        />
        <Text style={styles.rosterText}>
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
    marginBottom: 12,
  },
  rosterText: {
    color: "white",
    marginLeft: 7,
    fontSize: 18,
  },
  mask: {
    height: 20,
    width: 20,
    marginLeft: 25,
  },
  memberView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
});

export default MemberClassList;
