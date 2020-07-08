import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CommentsScreen from '../screens/CommentsScreen';
import MyPhotosScreen from '../screens/MyPhotosScreen';
import PhotosListScreen from '../screens/placeholderPhotos/PhotosListScreen';
import PostsScreen from '../screens/PostsScreen';
import MapScreen from '../screens/MapScreen';
import PhotoScreen from '../screens/placeholderPhotos/PhotoScreen'
import { TouchableOpacity, Text } from 'react-native'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PhotosAndMapScreen = () => {
  return (
    <Stack.Navigator initialRouteName="MyPhoto" >
      <Stack.Screen name="MyPhoto" component={MyPhotosScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

const PhotosPlaceholder = () => {
  return (
    <Stack.Navigator initialRouteName="PhotosList" screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="PhotosList" component={PhotosListScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen}
      // options={({ navigation }) => ({
      //   headerRight: () => (
      //     <TouchableOpacity>
      //       <Text>P</Text>
      //     </TouchableOpacity>
      //   )
      // })} 
      />
    </Stack.Navigator >
  )
}


const BottomTabBarNavigation = () => {
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
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
      <Tab.Screen name="Photos" component={PhotosPlaceholder} />
      <Tab.Screen name="MyPhotos" component={PhotosAndMapScreen} />
    </Tab.Navigator>
  );
};



export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={BottomTabBarNavigation} />
    </Stack.Navigator>
  )
}
