import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native';

// import Detail from "../register/detail"

const bimage = require('../assets/images/background.svg');
const fimages = require('../assets/images/ficons.svg');


const Home = ({ navigation }) => {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: "100%"
      },
      image: {
        flex: 1,
        alignItems: "center",
        paddingTop: 118,
      },
      ficons: {
        marginTop: 48,
        width: 190,
        height: 49.39,
        backgroundSize: "auto",
      },
      text1: {
        fontStyle: "AnnieUseYourTelescope-Regular",
        fontWeight: 400,
        fontSize: 55,
        color: "#C0FF00",
        marginBottom: 4,
      },
      text2: {
        fontSize: 12,
        flexDirection: "row-reverse",
        alignItems: "flex-end",
      },
      textIntro: {
        alignItems:"center", 
        marginTop: 48,
      },
      text3: {
        fontSize: 20, 
        lineHeight: 30, 
        color: "#FFFFFF"
      },
      text4: {
        fontSize: 16, 
        lineHeight: 24, 
        color: "#FFFFFF"
      },
      button:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: "120",
        // padding: "8px 16px",
        borderRadius: 99,
        elevation: 3,
        backgroundColor: '#C0FF00',
      },
      buttonText:{
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 22,
        color: "#224851",
      },
      rightIcon:{
        marginLeft: 10,
        width: 13.33,
        height: 13.33,
      }
    });

    return (
      <View style={styles.container}>
        <ImageBackground source={bimage} resizeMode="cover" style={styles.image}>
          <View style={{alignItems: "flex-end"}}>
          <Text style={styles.text1}>Habits Game</Text>
          <Text stle={styles.text2}>Brought to you by <Text style={{color:"#C0FF00"}}>Bitgreen</Text></Text>
        </View>
          <Image style={styles.ficons}  source={fimages}></Image>
        <View style={styles.textIntro}>
          <Text style={styles.text3}>Welcome!</Text>
          <Text style={styles.text4}>Lorem ipsum dolor sit amet</Text>
          <Text style={styles.text4}>consectetur. Morbi magna lacus</Text>
          <Text style={styles.text4}>habitasse arcu egestas dictum.</Text>
        </View>
        <View style={{marginTop:"48px"}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('detail')}
          >
            <Text style={styles.buttonText}>Let's go <Image source={require("../assets/images/rightvector.svg")} style={styles.rightIcon}></Image></Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default Home;
  