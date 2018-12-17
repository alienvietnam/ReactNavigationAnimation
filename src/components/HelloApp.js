/* eslint-disable quotes */
import React, { Component } from "react";
import { Animated, Dimensions, ImageBackground } from "react-native";

import bg from "../image/bacckground_login_a.png";
import logo from "../image/account_register_black.png";

const { width, height } = Dimensions.get("window");

class HelloApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.time, {
      toValue: 2,
      duration: 2000
    }).start();
  }

  render() {
    // const opacity = this.state.time.interpolate({
    //   inputRange: [0, 2],
    //   outputRange: [0, 1]
    // });
    const marginTop = this.state.time.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-100, 100, 100]
    });
    const marginLeft = this.state.time.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-700, -700, 0]
    });
    return (
      <ImageBackground
        style={{
          justifyContent: "center",
          alignItems: "center",
          width,
          height
        }}
        source={bg}
      >
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            marginTop
          }}
          source={logo}
        />
        <Animated.Text
          style={{
            marginTop: 300,
            color: "#FFF",
            fontSize: 20,
            marginLeft,
            backgroundColor: "transparent"
          }}
        >
          Welcome to home
        </Animated.Text>
      </ImageBackground>
    );
  }
}

export default HelloApp;
