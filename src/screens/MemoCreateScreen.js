import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";

class MemoCreateScreen extends React.Component {
  state = {
    body: "",
  }

  hundlePress() {
    const { params } = this.props.navigation.state;
    // console.log(params);

    const db = firebase.firestore();

    const { currentUser } = firebase.auth();

    /*
    `バッククオート`を用いて変数を動的に代入できる
    */
    db.collection(`users/${ currentUser.uid }/memos`).add({
      body: this.state.body,
      ceatedOn: new Date(),
    })
      .then((docRef) => {
        // console.log(docRef.id);
        this.props.navigation.goBack();
      })
      .catch((error) => {
        // console.log("Error");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />

        <CircleButton onPress={this.hundlePress.bind(this)} style={ styles.checkButton }>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: "100%",
  },

  memoEditInput: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
