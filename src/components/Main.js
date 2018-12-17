/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";
//import FadeView from "./FadeView";
//import SlideView from "./SlideView";
//import TransformView from "./TranformView";
import TransformRotate from "./TransfromRotate";

class Main extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue"
        }}
      >
        <TransformRotate />
      </View>
    );
  }
}

export default Main;
