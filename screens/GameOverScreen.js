import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          fadeDuration={1000}
          //source={{uri: 'http://www.aljanh.net/data/archive/img/2231164042.jpeg'}}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}></View>
      <BodyText style={styles.resultText}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart} >
        NEW GAME 
       </MainButton> 
    </View>
  );
};

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
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
