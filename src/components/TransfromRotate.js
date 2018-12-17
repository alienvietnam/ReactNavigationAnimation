/* eslint-disable quotes */
import React, { Component } from "react";
import { Animated } from "react-native";

class TransformRotate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.transformAnim, {
      toValue: 1,
      duration: 1000
    });
    const anim2 = Animated.timing(this.state.transformAnim, {
      toValue: 0,
      duration: 1000
    });

    const finalAnim = Animated.sequence([anim1, anim2]);
    Animated.loop(finalAnim).start();
  }
  render() {
    const rotate = this.state.transformAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["15deg", "0deg", "-15deg"]
    });
    return (
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: 'red',
          transform: [{ rotate }, { rotateY: rotate }],
          ...this.props.style
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default TransformRotate;
