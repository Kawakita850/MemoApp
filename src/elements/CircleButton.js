import React from "react";
import { StyleSheet, View, Text } from "react-native";

class CircleButton extends React.Component {
  render() {
    const {style, color} = this.props;

    let bgColor = "#e31676";
    let textcolor = "#fff";

    if(color === "white"){
      bgColor = "#fff";
      textcolor = "#e31676";
    }

    return (
      //配列で定義すると0から順に上書きされている
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textcolor }]}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
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
