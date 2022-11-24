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
} from 'react-native'
import CheckBox from 'expo-checkbox'
import ProgressBar from "./components/progressBar"

const bDetailImage = require('../assets/images/backdetail.svg')

const Detail = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: '100%',
        },
        image: {
            flex: 1,
            alignItems: 'center',
        },
        rightIcon:{
          marginLeft: 10,
          width: 13.33,
          height: 13.33,
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            // paddingVertical: 15,
            paddingTop: 12,
        },
        text: {
            lineHeight: 20,
            marginLeft: 8,
            fontSize: 14,
            color: "#FFFFFF",
            fontWeight: 500,
        },
        whiteColor: {
            color: '#FFFFFF',
            fontSize: 14,
        },
        fInput: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            border: "1px solid #FFF",
            backgroundColor: '#224851',
            color: "#FFF",
            borderRadius: 4,
            marginTop: 5
        },
        button:{
          display: "flex",
          paddingVertical: 8,
          paddingHorizontal: 16,
          width: "33%",
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
        mButton: {
            alignItems: 'center',
            padding: 13,
            border: "1px solid #FFF",
            borderRadius: 4,
            color: "#C0FF00",
            backgroundColor: '#224851',
        },
        feButton: {
            alignItems: 'center',
            padding: 13,
            border: "1px solid #FFF",
            borderRadius: 4,
        },
        sayButton: {
          alignItems: 'center',
          padding: 13,
          border: "1px solid #FFF",
          borderRadius: 4,
        },
        progressBarTitles: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        progressBarTitlesText: {
            fontSize: '10px',
            color: '#FFFFFF',
            fontWeight: '500',
        },
        progressBarNumbers: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        progressBarNumbersText: {
            fontSize: '16px',
            color: '#FFFFFF',
            fontWeight: '500',
            border: '1px solid #fff',
        },
    })

    const [agree, setAgree] = useState(false)
    const [bagree, setBAgree] = useState(false)

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bDetailImage}
                resizeMode='cover'
                style={styles.image}
            >
                <ProgressBar status={1}/>
                <View style={{ flexDirection: 'column', marginTop: "55px" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                color: '#FFFFFF',
                                fontSize: '14px',
                                paddingRight: '10px',
                            }}
                        >
                            <Text style={styles.whiteColor}>First name</Text>
                            <TextInput
                                // value={'Joe'}
                                onChangeText={() => ''}
                                placeholder={'Joe'}
                                style={styles.fInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.whiteColor}>Last name</Text>
                            <TextInput
                                // value={'bbb'}
                                onChangeText={() => ''}
                                placeholder={'Citizen'}
                                style={styles.fInput}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: "16px" }}>
                        <View
                            style={{
                                flex: '1',
                                color: '#FFFFFF',
                                fontSize: '14px',
                                paddingRight: '10px',
                            }}
                        >
                            <Text style={styles.whiteColor}>Age</Text>
                            <TextInput
                                // value={'ccc'}
                                onChangeText={() => ''}
                                placeholder={'35'}
                                style={styles.fInput}
                            />
                        </View>
                        <View style={{ flex: '3' }}>
                            <Text style={styles.whiteColor}>Email address</Text>
                            <TextInput
                                // value={'ddd'}
                                onChangeText={() => ''}
                                placeholder={'joe@example.com'}
                                style={styles.fInput}
                            />
                        </View>
                    </View>
                    <View style={{marginTop: "16px"}}>
                        <Text style={styles.whiteColor}>Telegram handle</Text>
                        <TextInput
                            // value={'eee'}
                            onChangeText={() => ''}
                            placeholder={'@'}
                            style={styles.fInput}
                        />
                    </View>
                    <View style={{marginTop: "16px"}}>
                        <Text style={styles.whiteColor}>Gender</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: "5px"}}>
                        <View style={{flex: "1", marginRight: "10px"}}>
                            <TouchableOpacity
                                style={styles.mButton}
                                onPress={() => {}}
                            >
                                <Text
                                    style={{
                                        fontSize: '14px',
                                        color: '#C0FF00',
                                    }}
                                >
                                    MALE
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: "1"}}>
                            <TouchableOpacity
                                style={styles.feButton}
                                onPress={() => {}}
                            >
                                <Text style={{color: "#FFFFFF"}}>FEMALE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: "10px"}}>
                        <TouchableOpacity
                            style={styles.sayButton}
                            onPress={() => {}}
                        >
                            <Text style={{color: "#FFFFFF"}}>
                                PREFER NOT TO SAY
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wrapper}>
                        <CheckBox
                            value={agree}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? '#124d5b' : undefined}
                            // style={{marginTop: "8px"}}
                        />
                        <Text style={styles.text}>
                            I agree to the privacy policy
                        </Text>
                    </View>
                    <Text style={{marginLeft: "20px", fontSize: "12px", lineHeight: "18px", color: "#FFFFFF"}}>You must confirm in order to proceed.</Text>
                    <View style={styles.wrapper}>
                        <CheckBox
                            value={bagree}
                            onValueChange={() => setBAgree(!bagree)}
                            color={bagree ? '#124d5b' : undefined}
                        />
                        <Text style={styles.text}>
                            Allow anonymised data
                        </Text>
                    </View>
                    <Text style={{marginLeft: "20px", fontSize: "12px", lineHeight: "18px", color: "#FFFFFF"}}>
                        This inform dashboards, population analytics, and insights 
                    </Text>
                    <Text style={{marginLeft: "20px", fontSize: "12px", lineHeight: "18px", color: "#FFFFFF"}}>to help improve this game over time.</Text>
                </View>
                <View style={{width: "100%", flexDirection: "row-reverse", marginTop: "30px", marginRight: "70px"}}>
                <TouchableOpacity
                    style={styles.button}
                    disabled={!(agree && bagree)}
                    onPress={() => navigation.navigate('timezone')}
                >
                    <Text style={styles.buttonText}>TimeZone<Image source={require("../assets/images/rightvector.svg")} style={styles.rightIcon}></Image></Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style='auto' />
        </View>
    )
}

export default Detail
 