/* eslint-disable no-mixed-operators */
/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Animated, Easing, Dimensions } from "react-native";

import sp1 from "../image/54.jpeg";
import sp2 from "../image/55.jpeg";
import sp3 from "../image/56.jpeg";
import sp4 from "../image/57.jpeg";
import sp5 from "../image/58.jpeg";
import sp6 from "../image/59.jpeg";

const { height, width } = Dimensions.get("window");
const arrImage = [sp1, sp2, sp3, sp4, sp5, sp6];

class ResponseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
      index: 0,
      rotateValue: new Animated.Value(0)
    };
  }

  onPress(evt) {
    const { locationX, locationY } = evt.nativeEvent;
    this.setState({ x: locationX, y: locationY });
  }

  onMove(evt) {
    const { locationX, locationY } = evt.nativeEvent;
    const { x } = this.state;
    const rate = new Animated.Value((1.5 * (locationX - x)) / width);

    if ((1.5 * (locationX - x)) / width > 1) {
      this.setState({
        index: (this.state.index + 1) % 6,
        x: locationX,
        y: locationY
      });
    }
    if ((1.5 * (locationX - x)) / width < -1) {
      this.setState({
        index: (this.state.index - 1 + 6) % 6,
        x: locationX,
        y: locationY
      });
    }
    this.setState({ rotateValue: rate });
  }

  onRelease() {
    Animated.timing(this.state.rotateValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce
    }).start();
  }

  render() {
    const { rotateValue, index } = this.state;

    const rotate = rotateValue.interpolate({
      inputRange: [-1, 1],
      outputRange: ["-35deg", "35deg"]
    });

    const opacity = rotateValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={this.onMove.bind(this)}
        onResponderRelease={this.onRelease.bind(this)}
        onResponderGrant={this.onPress.bind(this)}
        style={{
          flex: 1,
          width,
          height,
          backgroundColor: "violet",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Animated.Image
          style={{
            width: 200,
            height: 250,
            transform: [{ rotate }],
            opacity
          }}
          source={arrImage[index]}
        />
      </View>
    );
  }
}

export default ResponseView;
