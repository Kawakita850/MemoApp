import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from "./src/components/Appbar";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

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

      <SignupScreen />

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
