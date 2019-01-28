import React, { Component } from "react";
import {Platform,Dimensions} from "react-native";
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import Home from './Home'
import  SettingsScreen  from "./settings"
import Menudrawer from "./components/menudrawer";

const WIDTH=Dimensions.get('window').width

const Drawerconfig={
    drawerWidth:WIDTH*0.75,
    contentComponent:({navigation})=>{
        return(<Menudrawer navigation={navigation}/>)
    }
}

const Drawer= createDrawerNavigator({
    Home:{
        screen:Home
      },
      Settings:{
        screen:SettingsScreen
      }
    },
    Drawerconfig
)



export default createAppContainer(Drawer)