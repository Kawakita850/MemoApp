import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CircleButton from "../elements/CircleButton";

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo })
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  dateString(date) {
      // 存在しない場合は空文字列を返すと安全です
    if (date == null) { return "null"; }
    // firebaseのTimestamp型をDate型に変換する
    const dateObject = date.toDate();
    // Dateオブジェクトを文字列に変換する
    // Tで分割した[0]→T以降全てなくなる
    return dateObject.toISOString().split('T')[0];
  }

  render() {
    const { memo } = this.state;

    if(memo == null) { return null; }

    return(
      <View style={ styles.container }>
        <View>
          <View style={ styles.memoHeader }>
            <View>
              <Text style={ styles.memoHeaderTitle }>{ String(memo.body).substring(0, 10) }</Text>
              <Text style={ styles.memoHeaderDate }>{ this.dateString(memo.ceatedOn) }</Text>
            </View>
          </View>
        </View>

        <View style={ styles.memoContent }>
          <Text style={ styles.memoBody }>
            { memo.body }
          </Text>
        </View>

        <CircleButton onPress={() => {this.props.navigation.navigate("MemoEdit", { ...{ memo: memo }, returnMemo: this.returnMemo.bind(this) })}} color = "white" style={ styles.editButton }>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({

  container: {
    // 画面いっぱいに表示的な？ <- flex
    flex: 1,
    width: "100%",
  },

  memoHeader: {
    height: 100,
    backgroundColor: "#17313c",
    justifyContent: "center",
    padding: 10,
  },

  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },

  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },

  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },

  memoBody: {
    paddingTop: 10,
    lineHeight: 22,
    fontSize: 15,
  },

  editButton: {
    top: 40,
    right: 15,
  },

});

export default MemoDetailScreen;
