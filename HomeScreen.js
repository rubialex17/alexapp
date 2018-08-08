import React from 'react';
import { StyleSheet, Image, Button, TouchableOpacity, View, Text } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
      <View style={{flex: 1}} >
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
        <View style={styles.rectangle}>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Details', { channelId: 'UCi7TVXyvrIwqeS9tfYD8UDA', channelName: 'DjMaRiiO' })}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={styles.canvas} resizeMode="contain" source={require("./images/channel1.jpg")}/>
                <Text style={styles.text}> DjMaRiiO </Text>
            </View>        
        </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
        <View style={styles.rectangle}>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Details', { channelId: 'UCEhV7Kms52H2HrdwthU2QmA' , channelName: 'DjMaRiiO HD' })}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.canvas} resizeMode="contain" source={require("./images/channel2.jpg")}/>
            <Text style={styles.text}> DjMaRiiO HD </Text>
          </View>        
        </TouchableOpacity>
        </View>  
        <View style={{flex: 3, backgroundColor: 'white'}}></View>      
      </View> 
      );
    }
  }

  const styles = StyleSheet.create({
    canvas: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        top: 0,
        left: 10,
        borderWidth: 1,
        borderRadius: 75
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        top: 0,
        left: 40,
    },
    rectangle:{
        flex: 2, 
        flexDirection: 'row',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderWidth: 1,
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: '#efefef',
        borderBottomColor: '#efefef',

    }

  });

  export default HomeScreen