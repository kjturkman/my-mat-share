import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/catchlogo.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom: 50,
    alignItems: "center",
    maxHeight: 100,
  },
  image: {
    maxWidth: 300,
    maxHeight: 75,
  },
});

export default Header;
