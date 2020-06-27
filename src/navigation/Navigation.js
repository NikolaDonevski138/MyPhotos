import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CommentsScreen from '../screens/CommentsScreen';
import MyPhotosScreen from '../screens/MyPhotosScreen';
import PhotosScreen from '../screens/PhotosScreen';
import PostsScreen from '../screens/PostsScreen';
import MapScreen from '../screens/MapScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PhotosAndMapScreen = () => {
  return (
   
      <Stack.Navigator initialRouteName="MyPhoto">
        <Stack.Screen name="MyPhoto" component={MyPhotosScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
   
  )
}




export const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="MyPhotos" component={PhotosAndMapScreen} />
    </Tab.Navigator>
  );
};

