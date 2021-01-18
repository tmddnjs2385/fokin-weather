import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

import axios from "axios";
import Weather from "./Weather";

const API_KEY = "dc448be3cb7f45bc19dd4ce9b4a1040b";

export default class extends React.Component {

  state = {

    isLoading: true

  };

  getWeather = async (latitude, longtitude) => {
    try {

      latitude = 33;
      longtitude = 127;

      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}`);

      console.log(data);

      this.setState({ isLoading: false, temp: data.main.temp });

    } catch (error) {

      console.log("data error");

    }



  }


  getLocation = async () => {


    try {


      await Location.requestPermissionsAsync();

      const { coords: {
        latitude, longtitude
      } } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longtitude);



    } catch (error) {

      Alert.alert("can't find you.", "so sad");

    }



  }

  componentDidMount() {

    this.getLocation();

  }

  render() {

    const { isLoading, temp } = this.state;

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />


  }

}