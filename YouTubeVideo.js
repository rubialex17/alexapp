import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'

class YouTubeVideo extends React.Component{
    static navigationOptions = {
        headerTitle: 'YouTube',
        headerStyle: {
            backgroundColor: '#000'
        }, 
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <YouTube
                videoId={this.props.navigation.state.params.youtubeId}   
                play={true}             
                fullscreen={true}       
                loop={false}            
                apiKey={'AIzaSyAKWtp_4IokzoKZu5u3mg00BC7FTia95z4'}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default YouTubeVideo