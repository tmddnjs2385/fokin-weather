import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {

    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Drizzle: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Rain: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Snow: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Atmosphere: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Clear: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Clouds: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Haze: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Mist: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    }, Dust: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    },

    Clear: {

        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]

    }

}

export default function Weather(props) {
    return (

        <LinearGradient colors={weatherOptions[props.condition].gradient} style={styles.container}>
            {/* <StatusBar barStyle="light-content" /> */}
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[props.condition].iconName} color="white" />
                <Text style={styles.temperature}>{props.temperature}��</Text>
            </View>
            <View styles={styles.halfContainer} />

        </LinearGradient >

    )
}

Weather.propTypes = {

    temperature: PropTypes.number.isRequired,

    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired,

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temperature: {
        fontSize: 32
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});