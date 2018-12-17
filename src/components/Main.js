/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";
//import FadeView from "./FadeView";
//import SlideView from "./SlideView";
//import TransformView from "./TranformView";
//import TransformRotate from "./TransfromRotate";
import HelloApp from "./HelloApp";

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
        {/* <TransformRotate style={{ backgroundColor: 'yellow' }} >
            <Text style={{ fontSize: 30 }}>Transfrom View 1</Text>
        </TransformRotate>
        <TransformRotate style={{ height: 100 }} >
            <Text style={{ fontSize: 30 }}>Transfrom View 2</Text>
        </TransformRotate> */}

            <HelloApp />
      </View>
    );
  }
}

export default Main;
