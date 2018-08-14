import React, { Component } from 'react'
import {
  ActivityIndicator,
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'
import YouTubeVideo from './YouTubeVideo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from 'react-navigation';

const apiKey = ''
const results = 30

class DetailsScreen extends React.Component {
  channelImages = {'DjMaRiiO': require('./images/channel1.jpg'), 'DjMaRiiO HD': require('./images/channel2.jpg')}


  constructor(props){
    super(props)
    this.state = {
      name: 'DjMaRiiO',
      channelImage: 'channel1.jpg',
      imageUrl: this.channelImages['DjMaRiiO'],
      data: [],
      loading: true
    }
  }
  
  static navigationOptions = {
    headerTitle: 'DjMaRiiO APP',
    headerStyle: {
        backgroundColor: '#e62117'
    }, 
    headerTitleStyle: {
        color: '#fff'
    }
}

  componentDidMount(){
    this.fetchVideoFeed('UCi7TVXyvrIwqeS9tfYD8UDA', 'DjMaRiiO')
  }

  fetchVideoFeed(channelId, channelName) {
    this.setState({
      loading: true
    }) 
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
    //fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
      })
      console.log(res);
      this.setState({
        data: videoId,
        imageUrl: this.channelImages[channelName],
        loading: false,
        name: channelName
      }) 
    })
    .catch(error => {
      console.error(error)
    })
    
  }

  render() {
    const { navigate } = this.props.navigation
    const { channelId, channelImage, loading } = this.state 

    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.body}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView>
            <View style={styles.body}>
              {this.state.data.map((item, i) => 
              <TouchableHighlight 
                key={item.id.videoId} 
                onPress={() => navigate('YouTubeVideo', {youtubeId: item.id.videoId, videoTitle: item.snippet.title, imageUri: this.state.imageUrl})}>
                {/* onPress={() => this.props.navigation.navigate('YoutubeVideo', {youtubeId: item.id.videoId})}> */}
                <View style={styles.vids}>
                  <Image 
                    source={{uri: item.snippet.thumbnails.medium.url}} 
                    style={{width: 320, height: 180}}/>
                  <View style={styles.vidItems}>
                    <Image 
                      source={this.state.imageUrl}
                      style={{width: 50, height: 50, borderRadius: 25, marginRight: 5, flex: 1}}/>
                    <Text style={styles.vidText}>{item.snippet.title}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              )}
            </View>
          </ScrollView>
        )}
        <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItems} onPress={()=>{this.fetchVideoFeed('UCi7TVXyvrIwqeS9tfYD8UDA', 'DjMaRiiO' )}}>
          <Image source={require('./images/channel1.jpg')} style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
            <Text style={styles.tabTitle}>DjMaRiiO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems} onPress={()=>{this.fetchVideoFeed('UCEhV7Kms52H2HrdwthU2QmA', 'DjMaRiiO HD' )}}>
            <Image source={require('./images/channel2.jpg')} style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
            <Text style={styles.tabTitle}>DjMaRiiO HD</Text>
          </TouchableOpacity>
        </View>
	    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomColor: '#000',
    padding: 0
  },
  vids: {
    paddingTop: 22,
    paddingBottom: 0,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa'
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#000',
    flex: 4
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline'
  }
})

export default DetailsScreen