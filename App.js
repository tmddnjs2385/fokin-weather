import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

import axios from "axios";

const API_KEY = 'dc448be3cb7f45bc19dd4ce9b4a1040b';

export default class extends React.Component {

  state = {

    isLoading: true

  };

  getWeather = async (latitude, longtitude) => {

    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}`);

    console.log(data);

  }


  getLocation = async () => {


    try {


      await Location.requestPermissionsAsync();

      const { coords: {
        latitude, longtitude
      } } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longtitude);

      console.log(coords.latitude, coords.longitude);

      //send to API 

      this.setState({ isLoading: false });

    } catch (error) {

      Alert.alert("can't find you.", "so sad");

    }

    const location = Location.getCurrentPositionAsync();

    console.log(location);

  }

  componentDidMount() {

    this.getLocation();

  }

  render() {

    const { isLoading } = this.state;

    return <Loading />


  }

}