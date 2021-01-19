import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather(props) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                <Text style={styles.temperature}>{props.temperature}</Text>
            </View>
            <View styles={styles.halfContainer} />
        </View>


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