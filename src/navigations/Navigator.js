import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigator = () =>{
    return( 
        <Tab.Navigator tabBarOptions={{
            style:{
                height:65,
                justifyContent:"center",
                paddingVertical:15,
                backgroundColor:"#eff4f0",
                elevation:2
            }
        }} screenOptions={screenOptionStyle}>
            <Tab.Screen name="Home"  component={Home} options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }} />
            <Tab.Screen name="Favourite"  component={Favourite} options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }} />
            <Tab.Screen name="Profile"  component={Profile}  options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomNavigator} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;
