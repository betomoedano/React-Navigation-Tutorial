import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}   


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

