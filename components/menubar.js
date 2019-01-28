import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { MaterialIcons,Ionicons } from "@expo/vector-icons"

export default class Menubar extends Component{

    render(){

        return(
            <Ionicons
                name="md-menu"
                color="#000000"
                size={32}
                onPress={() =>this.props.navigation.toggleDrawer()}
                style={styles.menuicon}
            />
        )
    }
}

const styles= StyleSheet.create({

    menuicon:{
        zIndex: 0,
        position:'absolute',
        top:40,
        left:20
    }
})
 