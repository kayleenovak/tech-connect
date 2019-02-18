import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native'


export default class SuggestedConnection extends Component {
  
  
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./profile-pic.jpeg')} style={styles.picture} />
      </View>
        <TouchableHighlight onPress={() => this.props.viewProfile(this.props.suggestion.id)}>
          <Text style={styles.name}>{ this.props.suggestion.name }</Text>
        </TouchableHighlight>
        <Text style={styles.position}>{ this.props.suggestion.job_title }</Text>
        <Text style={styles.position}>{ this.props.suggestion.city }</Text>
        <TouchableHighlight style={styles.connectBtn}>
          <Button title='Connect' color='white' />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4AA9C5',
    height: 110,
    shadowOffset: {  width: 2,  height: 2 },
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: .5,
    marginLeft: 50,
    marginRight: 40,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    marginBottom: 15,
  },
  imageContainer: {
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  picture: {
    height: 90,
    width: 90,
    borderRadius: 45,
    position: 'absolute',
    left: -40,
    top: 10
  },
  name: {
    marginLeft: 60,
    marginTop: 10,
    fontSize: 22,
    color: 'white'
  },
  position: {
    marginLeft: 60,
    marginTop: 2,
    fontSize: 17,
    color: 'white'
  },
  connectBtn: {
    position: 'absolute',
    right: -30,
    top: 35,
    backgroundColor: '#93548F',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  }
})