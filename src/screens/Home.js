import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = () =>{
    return(
        <View>
            {/* appbar section */}
            <View style={{
                backgroundColor: "#00a46c",
                // height: '28%',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20,
            }}>
                <Image source={require('../images/1.png')} style={{height: 10, width: 20, marginTop: 50}} />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 25,
                    width: "100%"
                }}>
                    <View>
                        <Text style={{fontSize: 18, color: "#FFF",fontWeight: "bold" }}>Hi UiShopy</Text>
                    </View>
                    <View style={{width: "50%", alignItems: "flex-end"}}>
                        <Image source={require('../images/g.png')} style={{height: 60, width: 60}} />
                    </View>
                </View>
            </View>
                {/* create search */}
                <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    marginTop: -45,
                }}
                >
                    <View style={{
                        backgroundColor: "#FFF",
                        paddingVertical: 8,
                        paddingHorizontal: 20,
                        marginHorizontal: 20,
                        borderRadius: 15,
                        marginTop: 15,
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                    <TextInput 
                    placeholder="Search"
                    placeholderTextColor="#b1e5d3"
                    style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        width: 260,
                    }}
                    />
                    <Image source={require('../images/3.png')} style={{height: 20, width: 20}} />
                    </View>
                </LinearGradient>
                {/*  */}
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                }}>
                    <View style={{width: "50%"}}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 17,
                            color: "#585a61",
                        }}>Recomended</Text>
                        <View style={{
                            height: 4,
                            backgroundColor: "#b1e5d3",
                            width: 115,
                            marginTop: -5,
                        }}></View>
                    </View>
                    <View style={{
                        width: "50%",
                        alignItems: "flex-end",
                    }}>
                        <View style={{
                            backgroundColor: "#00a46c",
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 13,
                                color: "#FFF"
                            }}> More </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default Home;