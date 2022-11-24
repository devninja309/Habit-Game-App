import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native'
import ProgressBar from './components/progressBar'
import SliderBar from './components/sliderBar'


const vector = require('../assets/images/vector.svg')
const vector2 = require('../assets/images/vector2.svg')
const bDetailImage = require('../assets/images/backdetail.svg')

const Timezone = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    image: {
      // position: "relative",
      flex: 1,
      alignItems: 'center',
    },
    textIntro: {
      alignItems: 'center',
      marginTop: 65,
      // flexDirection: "column",
      color: '#FFFFFF',
    },
    text0: {
      fontSize: '16',
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },
    fVector: {
      // position: "relative",
      marginTop: 50,
      width: '100%',
      height: 119.08,
    },
    fVector2: {
      // position: "absolute",
      width: '100%',
      height: 117.08,
    },
    timezone: {
      marginTop: 50,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },
    time: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },
    country: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },

    button: {
      marginTop: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: '120',
      borderRadius: 99,
      elevation: 3,
      backgroundColor: '#C0FF00',
    },
    buttonText: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 22,
      color: '#224851',
    },
    rightIcon: {
      marginLeft: 15,
      width: 13.33,
      height: 13.33,
    },
  })

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bDetailImage}
        resizeMode="cover"
        style={styles.image}
      >
        <ProgressBar status={2} />
        <View style={styles.textIntro}>
          <Text style={styles.text0}>For the best experience, help us</Text>
          <Text style={styles.text0}>connect you with like-minded</Text>
          <Text style={styles.text0}>people in your region</Text>
        </View>
        <ImageBackground style={styles.fVector} source={vector}>
          <Image style={styles.fVector2} source={vector2}></Image>
        </ImageBackground>
        <Text style={styles.timezone}>Select your timezone</Text>
        <SliderBar/>
        <View style={{width: "100%", flexDirection: "row-reverse", marginTop: "30px", marginRight: "70px"}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('goal')}
        >
          <Text style={styles.buttonText}>
            Goals
            <Image
              source={require('../assets/images/rightvector.svg')}
              style={styles.rightIcon}
            ></Image>
          </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  )
}

export default Timezone
