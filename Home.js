import  React,{Component } from "react";
import {Text,View,StyleSheet,Image}from 'react-native'
import Menubar from './components/menubar';

export default class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
              <Menubar navigation={this.props.navigation}/>
    <Text>Welcome Home</Text>
            </View>
                );
            }
        }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'center',
            backgroundColor: '#ff00ff',
            alignItems: 'center'
        },
        icon: {
            width: 24,
            height: 24
        }
    })