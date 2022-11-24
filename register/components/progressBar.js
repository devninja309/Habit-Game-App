import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
} from "react-native";

const ProgressBar = ({status}) => {
    const styles = StyleSheet.create({
        progressBarTitles: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "45px",
        },
        progressBarTitlesText: {
            fontSize: "10px",
            color: "white",
            fontWeight: "500",
            width: "52px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        },
        progressBarNumbers: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "15px",
        },
        progressBarNumbersText: {
            fontSize: "16px",
            color: "white",
            fontWeight: "500",
            border: "1px solid #fff",
            width: "32px",
            height: "32px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "99px",
            display: "flex",
        },
        progressBarNumbersTextActive: {
            fontSize: "16px",
            color: "#224851",
            fontWeight: "500",
            border: "1px solid #C0FF00",
            backgroundColor: "#C0FF00",
            width: "32px",
            height: "32px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "99px",
            display: "flex",
        },
        progressBarLines: {
            flexDirection: "row",
            marginTop: "-16px",
        },
        progressBarLine: {
            width: "25%",
            paddingLeft: "16px",
            paddingRight: "16px",
            height: "1px",
        },
        progressBarLineInactive: { 
            backgroundColor: "white", 
            width: "100%", 
            height: "100%" 
        },
        progressBarLineActive: {
            backgroundColor: "#C0FF00", 
            width: "100%", 
            height: "100%" 
        }
    });

    return (
        <View className="progressBar" style={{ width: "80%" }}>
            <View
                className="progressBarTitles"
                style={styles.progressBarTitles}
            >
                <Text style={styles.progressBarTitlesText}>DETAILS</Text>
                <Text style={styles.progressBarTitlesText}>TIMEZONE</Text>
                <Text style={styles.progressBarTitlesText}>GOALS</Text>
                <Text style={styles.progressBarTitlesText}>WAGER</Text>
            </View>
            <View
                className="progressBarNumbers"
                style={styles.progressBarNumbers}
            >
                <Text style={styles.progressBarNumbersTextActive}>1</Text>
                <Text style={status>1 ? styles.progressBarNumbersTextActive : styles.progressBarNumbersText}>2</Text>
                <Text style={status>2 ? styles.progressBarNumbersTextActive : styles.progressBarNumbersText}>3</Text>
                <Text style={status>3 ? styles.progressBarNumbersTextActive : styles.progressBarNumbersText}>4</Text>
            </View>
            <View style={styles.progressBarLines}>
                <View style={{ width: "12.5%" }}></View>
                <View style={styles.progressBarLine}>
                    <View style={status>1 ? styles.progressBarLineActive : styles.progressBarLineInactive}></View>
                </View>
                <View style={styles.progressBarLine}>
                    <View style={status>2 ? styles.progressBarLineActive : styles.progressBarLineInactive}></View>
                </View>
                <View style={styles.progressBarLine}>
                    <View style={status>3 ? styles.progressBarLineActive : styles.progressBarLineInactive}></View>
                </View>
                <View style={{ width: "12.5%" }}></View>
            </View>
        </View>
    );
};

export default ProgressBar;
