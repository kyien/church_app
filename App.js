import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//drawer
import Drawer from './drawer'
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
        <Drawer/>
      //   {/* <Text>Hello</Text>
      // </View> */}
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
