import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'
import { YouTubeStandaloneIOS } from 'react-native-youtube';
import { BackHandler } from 'react-native';

class YouTubeVideo extends React.Component{

    static navigationOptions = {
        headerTitle: 'Video',
        headerStyle: {
            backgroundColor: '#e62117'
        }, 
        headerTitleStyle: {
            color: '#fff'
        }
    }
    constructor(props) {
        super(props)
    }
    componentDidMount(){   

    }

    render() {
        return (
        <View style={styles.background}>
          <View>
            <YouTube
                videoId={this.props.navigation.state.params.youtubeId}   
                play={true}             
                fullscreen={true}       
                loop={false}            
                apiKey={''}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
          </View>
            <View style={styles.vidItems}>
            <Image 
                      source={this.props.navigation.state.params.imageUri}
                      style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
                    <Text style={styles.vidText}>{this.props.navigation.state.params.videoTitle}</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    background: {
        backgroundColor: '#fff',
        flex: 1,
    },
    vidText: {
        padding: 20,
        color: '#000',
        flex: 4,
      },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.6,
        borderColor: '#aaa',
        padding: 20
      }
})


export default YouTubeVideo