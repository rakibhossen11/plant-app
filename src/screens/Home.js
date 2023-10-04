import React from "react";
import { Image, Text, View } from "react-native";

const Home = () =>{
    return(
        <View>
            <View style={{
                backgroundColor: "#00a46c",
                // height: '28%',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
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
        </View>
    )
}

export default Home;