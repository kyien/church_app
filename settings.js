import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

//import { Container, Content, Icon, Button } from 'native-base'
//import CustomHeader from './header'
import Menubar from "./components/menubar";

export default class SettingsScreen extends Component {
  

    render() {
        return (

            <View style={styles.container}>
              <Menubar navigation={this.props.navigation}/>
                

                <Text>Settings page</Text>
            </View>
        )
    }

}



const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }
      
})