import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
import Colors from '../constants/Colors'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image 
          // source={require('../assets/original.png')} 
          source={{ uri: 'https://images.financialexpress.com/2020/03/mount-everest.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.userNumber}</Text> rounds to guess the numbeer <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
      </View>
      
      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },

  image: {
    // always use when use internet image
    width: '100%',
    height: '100%'
  },

  resultContainer: {
    marginHorizontal: 40,
  },

  resultText: {
    alignItems: 'center'
  },

  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
})

export default GameOverScreen