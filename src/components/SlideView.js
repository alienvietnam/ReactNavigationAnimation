/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";

class SlideView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim1: new Animated.Value(-700),
      slideAnim2: new Animated.Value(-700)
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.slideAnim1, {
      toValue: 0,
      duration: 2000,
      easing: Easing.bounce
    });
    const anim2 = Animated.timing(this.state.slideAnim2, {
      toValue: 0,
      duration: 2000,
      easing: Easing.bounce
    });

    Animated.stagger(300, [anim1, anim2]).start();
  }
  render() {
    const marginLeft1 = this.state.slideAnim1;
    const marginLeft2 = this.state.slideAnim2;
    return (
      <View>
        <Animated.View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "green",
            marginLeft: marginLeft1
          }}
        >
          <Text>Animated Demo</Text>
        </Animated.View>
        <Animated.View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "red",
            marginLeft: marginLeft2
          }}
        >
          <Text>Animated Demo</Text>
        </Animated.View>
      </View>
    );
  }
}

export default SlideView;
