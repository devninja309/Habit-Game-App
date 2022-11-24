import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
// import Spinner from "react-native-loading-spinner-overlay";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    ActivityIndicator,
    Clipboard
} from "react-native";
import ProgressBar from "./components/progressBar";

const bDetailImage = require("../assets/images/backdetail.svg");

const Timezone = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const address = "0xC84Fd4ec2dA772C9f45d35a4b3Aed7ffFf4E7a4C";
    const addressLast = "7a4C";

    const copyToClipboard = () => {
        Clipboard.setString('0xC84Fd4ec2dA772C9f45d35a4b3Aed7ffFf4E7a4C');
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: "100%",
        },
        image: {
            // position: "relative",
            flex: 1,
            alignItems: "center",
        },
        textIntro: {
            alignItems: "center",
            marginTop: 65,
            // flexDirection: "column",
            color: "#FFFFFF",
            paddingBottom: 45,
        },
        text0: {
            fontSize: "16",
            lineHeight: 24,
            fontWeight: 400,
            color: "#FFFFFF",
        },
        text1: {
            fontSize: 14,
            lineHeight: 20,
            fontWeight: 400,
            color: "#FFFFFF",
        },
        price: {
            flexDirection: "row",
            color: "white",
            marginBottom: 20,
        },
        priceField: {
            width: 70,
            // height: 54
        },
        priceField1: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
        },
        priceFieldNumber: {
            color: "white",
            fontSize: 32,
            display: "flex",
            justifyContent: "center",
        },
        priceFieldSign: {
            color: "white",
            fontSize: 16,
            paddingBottom: 5,
        },
        priceFieldBottom: {
            fontSize: 12,
            marginTop: 4,
            color: "white",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
        },
        priceEqual: {
            width: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: 700,
        },
        loading: {
            border: "4px solid #ffffff",
            borderTopColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            marginRight: 16
        },
        waiting: {
            height: 50,
            width: 50
        },
        depositWaiting: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50
        },
        address: {
            maxWidth: 380,
            paddingLeft: 20,
            paddingRight: 20
        },
        
        addressSubject: {
            color: "white",
            fontSize: 14,
            paddingBottom: 8
        },
        addressContent: {
            position: "relative",
        },
        addressInput: {
            paddingVertical: 11,
            paddingLeft: 12,
            paddingRight: 40,
            backgroundColor: "#224851",
            border: "1px solid #FFFFFF",
            borderRadius: 4,
            width: "100%",
            flexDirection: "row",
            height: 40
        },
        addressClipboard: {
            height: 20,
            width: 20,
            position: "absolute",
            top: 12,
            right: 11,
        },
        addressIntro: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 18,
            color: "white",
            paddingTop: 8,
        },
        addressTextLtr: {
            color: "white",
            textOverflow: "ellipsis",
            // paddingRight: 40,
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        addressTextRtl: {
            color: "white",
            textOverflow: "clip",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: 40,
        },

        button: {
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            paddingHorizontal: 16,
            width: "120",
            borderRadius: 99,
            elevation: 3,
            backgroundColor: "#D5D6DA",
        },
        buttonText: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 22,
            color: "#224851",
        },
        rightIcon: {
            marginLeft: 10,
            width: 13.33,
            height: 13.33,
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bDetailImage}
                resizeMode="cover"
                style={styles.image}
            >
                <ProgressBar status={2} />
                <View style={styles.textIntro}>
                    <Text style={styles.text0}>
                        Deposit BBB tokens to play.
                    </Text>
                    <br />
                    <Text style={styles.text0}>
                        If you meet your points target at the end
                    </Text>
                    <Text style={styles.text0}>
                        of the game, you get your tokens back.{" "}
                    </Text>
                    <Text style={styles.text0}>
                        Otherwise we donate them to charity.
                    </Text>
                </View>

                <View style={styles.price}>
                    <View style={styles.priceField}>
                        <View style={styles.priceField1}>
                            <Text style={styles.priceFieldSign}>$</Text>
                            <Text style={styles.priceFieldNumber}>100</Text>
                        </View>
                        <Text style={styles.priceFieldBottom}>USD VALUE</Text>
                    </View>
                    <View style={styles.priceEqual}>
                        <Image
                            source={require("../assets/images/equal.svg")}
                            style={{ width: 10, height: 10 }}
                        ></Image>
                    </View>
                    <View style={styles.priceField}>
                        <Text style={styles.priceFieldNumber}>285</Text>
                        <Text style={styles.priceFieldBottom}>BBB TOKENS</Text>
                    </View>
                </View>

                <View style={styles.depositWaiting}>
                    {/* <ActivityIndicator
                        animating={loading}
                        style={styles.waiting}
                        size="large"
                        color="#ffffff"
                        backgroundColor="#ffffff"
                    /> */}
                    <View style={styles.loading}></View>
                    <View>
                        <Text style={styles.text1}>Waiting for confirmation</Text>
                        <Text style={styles.text1}>of deposit received.</Text>
                    </View>
                </View>

                <View style={styles.address}>
                    <Text style={styles.addressSubject}>Send 285 BBB tokens to this escrow address:</Text>
                    <View style={styles.addressContent}>
                        <View style={styles.addressInput}>
                            <Text style={styles.addressTextLtr}>{address}</Text>
                            <Text style={styles.addressTextRtl}>{addressLast}</Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard()} style={styles.addressClipboard}>
                            <Image source={require("../assets/images/clipboard.svg")} style={{height:20, width:20}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.addressIntro}>Funds will be held in escrow until the game has been completed. 
                    Depending on your game outcome, the BBB tokens will either be transferred back to your sending address, 
                    or donated to charity.</Text>
                </View>

                <View
                    style={{
                        width: "100%",
                        flexDirection: "row-reverse",
                        marginTop: "30px",
                        marginRight: "70px",
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("proceed")}
                    >
                        <Text style={styles.buttonText}>
                            Proceed
                            <Image
                                source={require("../assets/images/rightvector.svg")}
                                style={styles.rightIcon}
                            ></Image>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
};

export default Timezone;
