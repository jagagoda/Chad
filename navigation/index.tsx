/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Search from '../assets/images/search.svg';
import Phone from '../assets/images/phone.svg';
import People from '../assets/images/rooms.svg';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  // @ts-ignore
    return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#B6DEFD',
            height: 124,
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
            elevation: 0,
        },
        headerTintColor: '#5603AD',
        headerTitleAlign: 'left',
        headerTitleStyle: {
            fontWeight: '700',
            fontSize: 36,
            marginTop: 25,
        }
    }}>
      <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
          title: "Rooms",
              headerRight: () => (
                  <View style={{
                      flexDirection: "row",
                      width: 100,
                      justifyContent: 'space-between',
                      marginRight: 10,
                      marginTop: 25,
                  }}>
                      <Search />
                      <People />
                  </View>
              )
          }}

      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
