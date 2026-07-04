import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 15,
        }
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon: () => (
          <Icon name="home" size={30} color="#900" />
        )
      }}
       />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarIcon: () => (
          <Icon name="user" size={30} color="#900" />
        )
      }}
      />
      <Tab.Screen 
      name="Search" 
      component={Search} 
      options={{
        tabBarIcon: () => (
          <EvilIcons name="search" size={30} color="#900" />
        )
      }}
      />
    </Tab.Navigator>
  )
}
const App = () => {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // <View>
    //   <Home />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
  }
});