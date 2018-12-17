/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";
//import FadeView from "./FadeView";
//import SlideView from "./SlideView";
import TransformView from "./TranformView";

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
        <TransformView />
      </View>
    );
  }
}

export default Main;
