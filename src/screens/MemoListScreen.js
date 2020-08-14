import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class  MemoListScreen extends React.Component {
  render() {
    return(
      <View sytle={styles.container}>

        <MemoList />

        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});

export default MemoListScreen;
