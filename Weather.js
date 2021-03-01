import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#b1c3c7", "#2c3e50"],
    title: "Rain",
    subtitle: "Don't forget to wearing mask every single moment. 😷",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#2b5876", "#4e4376"],
    title: "Thunderstorm",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#536976", "#BBD2C5"],
    title: "Drizzle",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Snow",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f8b500", "#fceabb"],
    title: "Clear",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#19547b", "#ffd89b"],
    title: "Clouds",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#616161", "#9bc5c3"],
    title: "Mist",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#FFA17F", "#00223E"],
    title: "Haze",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "Fog",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#DECBA4", "#3E5151"],
    title: "Dust",
    subtitle: "Don't forget to wear a mask every single moment. 😷",
  },
};

export default function Weather({ temp, condition, city }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle='light-content'></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={95} color='#fff' />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Haze",
    "Fog",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  city: {
    fontSize: 33,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 46,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 25,
    alignItems: "flex-start",
  },
});
