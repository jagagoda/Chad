/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types';
import ChatRoomScreen from "../screens/ChatRoomScreen";

const MainTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            tabBarOptions={{
                activeTintColor: Colors.dark.tint,
                indicatorStyle: {
                    display: 0,
                    backgroundColor: '#E5E5E5',
                    height: 1,
                },
                labelStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <MainTab.Screen
                name="Chats"
                component={ChatsScreen}
                options={{
                    title: "chats",
                }}
            />
            <MainTab.Screen
                name="Current Chat"
                component={ChatRoomScreen}
            />
        </MainTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={ChatsScreen}
                options={{
                    headerTitle: 'Tab One Title',
                    headerShown: false
                }}
            />
        </TabOneStack.Navigator>
    );
}



