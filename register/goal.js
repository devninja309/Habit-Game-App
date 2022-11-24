import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'

import ProgressBar from './components/progressBar'
import DropDownPicker from 'react-native-dropdown-picker'
import Slider from "@react-native-community/slider";

const bDetailImage = require('../assets/images/backdetail.svg')

const Goal = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    image: {
      flex: 1,
      alignItems: 'center',
    },
    textIntro: {
      alignItems: 'center',
      marginTop: 65,
      color: '#FFFFFF',
    },
    text0: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },
    text1: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 400,
      color: '#FFFFFF',
    },
    box: {
      position: "relative",
      flexDirection: 'column',
      marginTop: 50,
      padding: 8,
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: 8,
    },
    picker: {
      position: "relative",
      zIndex: 1,
      width: 240,
      backgroundColor: '#224851',
      border: '1px solid #FFFFFF',
      borderRadius: 4,
      borderColor: '#FFFFFF',
      color: 'white',
      fontSize: 16,
      paddingHorizontal: 8,
      paddingVertical: 8,
    },
    itemstyle: {
      fontColor: '#FFFFFF',
      // justifyContent: "flex-start",
      borderColor: 'red',
    },
    dropDownContainerStyle: {
      position: "absolute",
      zIndex: 2,
      width: 240,
      backgroundColor: '#224851',
      border: '1px solid #FFFFF',
      borderColor: '#FFFFFF',
    },
    target: {
      border: '1px solid #FFF',
      borderRadius: 99,
      padding: 7,
    },
    sliderBar: {
      height: 50,
      // marginTop: 5,
    },
    sliderBarText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sliderBarTextContent: {
      fontSize: '10px',
      width: '11px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginBottom: 3,
    },
    plusIcon: {
      height: 17,
      width: 17,
    },
    button: {
      marginTop: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: 120,
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

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('ce')
  const [items, setItems] = useState([
    { label: 'Consume less of a substance', value: 'ce' },
    { label: 'DeutschConsume less of', value: 'de' },
    { label: 'French', value: 'fr' },
  ])

  const [open1, setOpen1] = useState(false)
  const [value1, setValue1] = useState('aa')
  const [items1, setItems1] = useState([
    { label: '4 weeks', value: 'aa' },
    { label: '3 weeks', value: 'ab' },
    { label: '1 month', value: 'ac' },
  ])

  const [values, setValues] = useState(80)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bDetailImage}
        resizeMode="cover"
        style={styles.image}
      >
        <ProgressBar status={3} />
        <View style={styles.textIntro}>
          <Text style={styles.text0}>What aspects about yourself are</Text>
          <Text style={styles.text0}>you most looking to improve?</Text>
          <Text style={styles.text1}>Specify your goals below.</Text>
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', padding: 15 }}>I want to</Text>
            <View>
              <DropDownPicker
                zIndex={3000}
                open={open}
                value={value}
                theme="DARK"
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.picker}
                itemStyle={styles.itemstyle}
                labelStyle={{ fontSize: '14px', color: '#FFFFFF' }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '12px',
              justifyContent: 'flex-end',
            }}
          >
            <Text style={{ color: '#FFFFFF', padding: 15 }}>within</Text>
            <View>
              <DropDownPicker
                zIndex={4000}
                open={open1}
                value={value1}
                theme="DARK"
                items={items1}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setItems1}
                style={styles.picker}
                itemStyle={styles.itemstyle}
                labelStyle={{ fontSize: '14px', color: '#FFFFFF' }}
                dropDownContainerStyle={styles.dropDownContainerStyle}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", justifyContent: "flex-end" }}>
            <Text style={{ color: '#FFFFFF', padding: 15 }}>worth</Text>
            <View style={{width: "50%"}}>
              <Slider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={'white'}
                maximumTrackTintColor={'white'}
                thumbStyle={{
                  width: 14,
                  height: 30,
                  backgroundColor: 'white',
                  clipPath: 'polygon(0 0, 100% 0%, 100% 79%, 50% 100%, 0 80%)',
                  borderRadius: 0,
                }}
                step={1}
                // defaultValue={value}
                value={values}
                onValueChange={(values) => setValues(values)}
                style={styles.sliderBar}
              />
              <View className="sliderBarText" style={styles.sliderBarText}>
                <Text style={styles.sliderBarTextContent}>0</Text>
                <Text style={styles.sliderBarTextContent}>100</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 30}}>
              <Text style={{color:"white", fontSize: "24px"}}>{values}</Text>
              <Text style={{color: "white"}}>points</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: '30px' }}>
          <TouchableOpacity style={styles.target} onPress={() => {}}>
            <Image
              source={require('../assets/images/plus.svg')}
              style={styles.plusIcon}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row-reverse',
            marginTop: '30px',
            marginRight: '70px',
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('wager')}>
            <Text style={styles.buttonText}>
              Wager
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

export default Goal
