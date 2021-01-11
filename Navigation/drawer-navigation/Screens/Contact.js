import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Contact({ navigator }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here ..!</Text>
        <Button title="Go Back" onPress={() => navigator.goback()} />
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
    backgroundColor: "#c203fc",
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "800",
  },
});

export default Contact;
