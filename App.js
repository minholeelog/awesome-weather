import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // View: div 태그 역할
    <View style={styles.container}>
      {/* View: span 태그 역할 */}
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue",
  },
});
