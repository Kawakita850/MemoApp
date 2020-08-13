import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from "./src/components/MemoList";
import Appbar from "./src/components/Appbar";
import CircleButton from "./src/elements/CircleButton";

// export default class App extends React.Componet {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello!</Text>
//       </View>
//     );
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>

      <Appbar />

      <MemoList />

      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // 画面いっぱいに表示的な？ <- flex
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },

});
