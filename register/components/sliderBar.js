import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from "react-native";

import Slider from "@react-native-community/slider";

const SliderBar = ({status}) => {
    const [value, setValue] = useState(4);
    const [timeInfo, setTimeInfo] = useState({});

    const times = [
        {UTC: -8, zone: "EDT", city: "New York"},
        {UTC: -7, zone: "EDT", city: "New York"},
        {UTC: -6, zone: "EDT", city: "New York"},
        {UTC: -5, zone: "EDT", city: "New York"},
        {UTC: -4, zone: "EDT", city: "New York"},
        {UTC: -3, zone: "EDT", city: "New York"},
        {UTC: -2, zone: "EDT", city: "New York"},
        {UTC: -1, zone: "EDT", city: "New York"},
        {UTC: 0, zone: "EDT", city: "New York"},
        {UTC: 1, zone: "EDT", city: "New York"},
        {UTC: 2, zone: "EDT", city: "New York"},
        {UTC: 3, zone: "EDT", city: "New York"},
        {UTC: 4, zone: "EDT", city: "New York"},
        {UTC: 5, zone: "EDT", city: "New York"},
        {UTC: 6, zone: "EDT", city: "New York"},
        {UTC: 7, zone: "EDT", city: "New York"},
        {UTC: 8, zone: "EDT", city: "New York"},
        {UTC: 9, zone: "EDT", city: "New York"},
        {UTC: 10, zone: "EDT", city: "New York"},
        {UTC: 11, zone: "EDT", city: "New York"},
        {UTC: 12, zone: "EDT", city: "New York"},
        {UTC: 13, zone: "EDT", city: "New York"},
    ]

    useEffect(() => {
        if (times[value])
            setTimeInfo({
                UTC: times[value].UTC >= 0 ? `+${times[value].UTC}` : times[value].UTC,
                zone: times[value].zone,
                city: times[value].city
            })
    }, [value])

    const styles = StyleSheet.create({
        sliderBar:{
            height: 50,
            marginTop: 25,
        },
        sliderBarText: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        sliderBarTextContent: {
            fontSize: "10px",
            width: "11px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginBottom: 22
        },
        sliderBarTimeInfo: {
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
            lineHeight: 24
        }
    });   

    return (
        <View className="sliderBar" style={{ width: "80%" }}>
            <Slider 
                minimumValue={0}
                maximumValue={21}
                minimumTrackTintColor={'white'}
                maximumTrackTintColor={'white'}
                thumbStyle={{
                    width: 14,
                    height: 30,
                    backgroundColor: "white",
                    clipPath: "polygon(0 0, 100% 0%, 100% 79%, 50% 100%, 0 80%)",
                    borderRadius: 0
                }}
                step={1}
                // defaultValue={value}
                value={value}
                onValueChange={value => setValue(value)}
                style={styles.sliderBar}
            />
            <View className="sliderBarText" style={styles.sliderBarText}>
                {times.map((time, index) => (
                    <Text key={index} style={styles.sliderBarTextContent}>{time.UTC}</Text>
                ))}
            </View>
            <View>
                {timeInfo ? <>
                    <Text style={styles.sliderBarTimeInfo}>{timeInfo.zone} (UTC{timeInfo.UTC})</Text>
                    <Text style={styles.sliderBarTimeInfo}>{timeInfo.city}</Text>
                </> : <></>}
            </View>
        </View>
    );
};

export default SliderBar;
