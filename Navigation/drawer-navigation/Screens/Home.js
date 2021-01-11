import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home is Here!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d1ab8",
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "800",
  },
});

export default Home;
