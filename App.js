import React from 'react';
import { StyleSheet, FlatList, Image, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}} >
        <View style={{flex: 1}}>
        </View>
        <View style={{flex: 3}}>
          <Image style={styles.canvas} resizeMode="contain" source={require('./images/channel1.jpg')} />
        </View>
        <View style={{flex: 3}}>
          <Image style={styles.canvas} resizeMode="contain" source={require('./images/channel2.jpg')} />
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  canvas: {
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
