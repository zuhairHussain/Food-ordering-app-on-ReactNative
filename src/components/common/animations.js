import React , {Component} from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends Component {
  state = {
    anim: new Animated.Value(0),  // Initial value for opacity: 0  
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.anim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
        useNativeDriver: true,
        delay : Number(this.props.delay)
    }
    ).start();
  }

  render() {
    const moveUp = this.state.anim.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0]
    })
    const opacity = this.state.anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: opacity,         // Bind opacity to animated value
          transform: [{ translateY: moveUp}]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
FadeInView.defaultProps = {delay: 500};

export { FadeInView }