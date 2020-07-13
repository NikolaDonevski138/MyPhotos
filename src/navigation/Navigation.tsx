import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import CommentsScreen from '../screens/CommentsScreen';
import MyPhotosScreen from '../screens/MyPhotosScreen';
import PhotosListScreen from '../screens/placeholderPhotos/PhotosListScreen';
import PostsScreen from '../screens/PostsScreen';
import MapScreen from '../screens/MapScreen';
import PhotoScreen from '../screens/placeholderPhotos/PhotoScreen';

type MapScreenParameters = {
  uri: string;
  latitude: number;
  longitude: number;
};

export type RootStackParamList = {
  MyPhoto: undefined;
  Map: MapScreenParameters;
  PhotosList: undefined;
  Photo: undefined;
  Posts: undefined;
  Comments: undefined;
};

export type RootTabParamList = {
  Posts: undefined;
  Comments: undefined;
  Photos: undefined;
  MyPhotos: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const PhotosAndMapScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyPhoto"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#303f9f',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="MyPhoto" component={MyPhotosScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

const PhotosPlaceholder = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhotosList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#303f9f',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="PhotosList" component={PhotosListScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

const PostsNavigatior = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhotosList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#303f9f',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
};

const CommentsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhotosList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#303f9f',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff4081',
        inactiveTintColor: '#757575',
        tabStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="Posts" component={PostsNavigatior} />
      <Tab.Screen name="Comments" component={CommentsNavigator} />
      <Tab.Screen name="Photos" component={PhotosPlaceholder} />
      <Tab.Screen name="MyPhotos" component={PhotosAndMapScreen} />
    </Tab.Navigator>
  );
};
