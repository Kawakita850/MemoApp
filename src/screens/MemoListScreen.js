import React from "react";
import { StyleSheet, View, Text } from "react-native";
import firebase from "firebase";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class  MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase.firestore().collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapShot) => {
        const memoList = [];
        snapShot.forEach((doc) => {
          // memoList.push(doc.data());
          memoList.push({ ...doc.data(), key: doc.id });
        });

        //キーの名前がおんなじなら省略できる({ memoList: memoList })
        this.setState({ memoList });
      });

      // .get()
      // .then((querySnapshot) => {
      //   const memoList = [];
      //   querySnapshot.forEach((doc) => {
      //     // memoList.push(doc.data());
      //     memoList.push({ ...doc.data(), key: doc.id });
      //   });
      //
      //   //キーの名前がおんなじなら省略できる({ memoList: memoList })
      //   this.setState({ memoList });
      // })
      // .catch((error) => {
      //   console.log("error");
      // });
  }

  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate("MemoCreate");
  }

  render() {
    return(
      <View style={ styles.container }>

        <MemoList memoList={ this.state.memoList } navigation={ this.props.navigation } />

        <CircleButton onPress={ this.handlePress.bind(this) }>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    // 画面いっぱいに表示的な？ <- flex
    flex: 1,
    width: "100%",
    backgroundColor: "#fffdf6",
  },

});

export default MemoListScreen;
