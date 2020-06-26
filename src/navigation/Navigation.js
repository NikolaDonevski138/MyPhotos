import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommentsScreen from '../screens/CommentsScreen';
import MyPhotosScreen from '../screens/MyPhotosScreen';
import PhotosScreen from '../screens/PhotosScreen';
import PostsScreen from '../screens/PostsScreen';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="MyPhotos" component={MyPhotosScreen} />
    </Tab.Navigator>
  );
};

