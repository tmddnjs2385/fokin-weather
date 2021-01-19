import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {

    Thunderstorm: {

        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]


    },

    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]

    }, Rain: {
        iconName: "weather-hail",
        gradient: ["4DA0B0", "#D39D38"]

    },

    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]

    },

    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["4DA0B0", "#D39D38"]

    }, Haze: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]

    }, Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]

    }, Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot china"

    },

    Clear: {

        iconName: "weather-sunny",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Nice Weather",
        subtitle: "Let's go outside~!"
    }

}

export default function Weather(props) {
    return (

        <LinearGradient colors={weatherOptions[props.condition].gradient} style={styles.container}>
            {/* <StatusBar barStyle="light-content" /> */}

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[props.condition].iconName} color="white" />
                <Text style={styles.temperature}>{props.temperature}</Text>
            </View>

            <View style={styles.halfContainer} >

                <Text style={styles.title}>{weatherOptions[props.condition].title}</Text>

                <Text style={styles.subtitle}>{weatherOptions[props.condition].subtitle}</Text>

            </View>

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
    },

    title: {

        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10

    },

    subtitle: {

        fontWeight: "600",
        color: "white",
        fontSize: 24

    },

    textContainer: {
        paddingVertical: 20,
        alignItems: "flex-start"
    }

});