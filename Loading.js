import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the awesome weather</Text>
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
