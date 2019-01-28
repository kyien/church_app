import React, { Component } from "react";
import { View,Text, StyleSheet,Platform,Dimensions,Image} from "react-native"
import {Container,List,ListItem,Left,Header,Right,Content,Body,Icon} from 'native-base'

const WIDTH=Dimensions.get('window').width
const HEIGHT=Dimensions.get('window').height

export default class Menudrawer extends Component{

render(){

    return(
        <Container style={styles.container}>
            <Header style={styles.drawerHeader}>
            <Body>
                <Image
                style={styles.drawerImage}
                source={require('../assets/icon.png')} />
            </Body>
            </Header>
            <ListItem last>
            <Icon type="FontAwesome" name="home" style={{color:'white'}}></Icon>
            <Text style={styles.nav_text}>Home</Text>
            </ListItem>
            <ListItem last>
            <Text style={styles.nav_text}>Profile</Text>
             </ListItem>
            <ListItem last>
            <Text style={styles.nav_text}>Settings</Text>
             </ListItem>
            <ListItem last>
            <Text style={styles.nav_text}>Settings</Text>
             </ListItem>
            <ListItem last>
            <Text style={styles.nav_text}>Logout</Text>
             </ListItem>

        </Container>
    )
}
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#040C42'
    },nav_text:{
        color:'#fff',
        fontWeight: 'normal',
        paddingLeft: 50,
      },
      drawerHeader: {
        height: 200,
        backgroundColor: '#D6D9EA'
      },
      drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75,
        paddingRight: '20%',
      }
})