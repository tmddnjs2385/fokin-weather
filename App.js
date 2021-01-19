import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";
import axios from "axios";



const API_KEY = "dc448be3cb7f45bc19dd4ce9b4a1040b";

export default class extends React.Component {

  state = {

    isLoading: true,
    condition: "",
    temperature: 0



  };

  getWeather = async (latitude, longitude) => {




    try {

      const {

        data

      } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

      console.log(data);

      const { weather, main } = data;

      console.log(weather[0].main);

      this.setState({ isLoading: false, condition: weather[0].main, temperature: main.temp });

    } catch {

      console.log("data error?");

    }

  }


  getLocation = async () => {


    try {

      await Location.requestPermissionsAsync();

      const { coords: {
        latitude, longitude
      } } = await Location.getCurrentPositionAsync();

      console.log(latitude, longitude);

      this.getWeather(latitude, longitude);

    } catch (error) {

      Alert.alert("can't find you.", "so sad");

    }



  }

  componentDidMount() {

    this.getLocation();

  }

  render() {

    const { isLoading, temperature, condition } = this.state;

    console.log(isLoading)

    console.log(condition)

    return isLoading ? (<Loading />) : (<Weather temperature={Math.round(temperature)} condition={condition} />)


  }

}