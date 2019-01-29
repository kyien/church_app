import  React,{Component } from "react";
import {Text,View,StyleSheet,Image}from 'react-native'
import Menubar from './components/menubar';
import {Container,List,ListItem,Left,Header,Right,Content,Body,Icon} from 'native-base'

export default class Home extends Component {
    render() {
        return(
            <Container style={styles.container}>
            <Header style={styles.drawerHeader}>
              <Menubar navigation={this.props.navigation}/>
              </Header>
              <Content  style={styles.content}>
    <Text>Welcome Home</Text>
            </Content>
            </Container>
                );
            }
        }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            // justifyContent: 'center',
            backgroundColor: '#ff00ff',        },
        icon: {
            width: 24,
            height: 24
        },
        content:{
            flex:1,
            //  justifyContent: 'center',
            alignItems: 'center',
        },
        drawerHeader: {
            backgroundColor: '#D6D9EA',
            paddingTop: '20%',
          },
    })