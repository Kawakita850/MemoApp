import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from "react-native";

class MemoList extends React.Component {
  renderMemo( {item} ) {
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate("MemoDetail")}}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{ item.body }</Text>
          <Text style={styles.memoDate}>2020/08/13</Text>
        </View>
      </TouchableHighlight>
    );
  }

  //JSXは必ず1つのComponentを返さなければいけない

  // プロパティの値が変化するとrender()は再度実行される
  render(){
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo} />
      </View>

    );
  }
}

const styles = StyleSheet.create({

  memoList: {
    width: "100%",
    flex: 1,
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },

  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },

  memoDate: {
    fontSize: 12,
    color: "#a2a2a2",
  },

});

export default MemoList;
