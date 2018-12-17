/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, Animated } from "react-native";

class TransformView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.transformAnim, {
      toValue: 1,
      duration: 3000
    });
    const anim2 = Animated.timing(this.state.transformAnim, {
      toValue: 0,
      duration: 3000
    });

    const finalAnim = Animated.sequence([anim1, anim2]);
    Animated.loop(finalAnim).start();
  }
  render() {
    const backgroundColor = this.state.transformAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['green', 'red', 'yellow']
    });
    return (
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor,
        }}
      >
        <Text>Animated Demo</Text>
      </Animated.View>
    );
  }
}

export default TransformView;
