import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

class CircleButton extends React.Component {
  render() {
    const {style, color, onPress} = this.props;

    let bgColor = "#e31676";
    let textcolor = "#fff";

    if(color === "white"){
      bgColor = "#fff";
      textcolor = "#e31676";
    }

    return (
      <TouchableHighlight style={ [styles.container, style] } onPress={ onPress } underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          <Text style={[styles.circleButtonTitle, { color: textcolor }]}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 32,
    right: 32,
  },

  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },

});

export default CircleButton;
