import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../components/ListItem'

const PostsScreen = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_POST'});
  },[]);

  return (
    <View>
      <ListItem data={posts.value}  titleText="Title:" text="Post:"/>
    </View>
  );
};


export default PostsScreen;

//To Do drag vertical and remove scroll and fix position bug on text
//need to be add some id in list
//making more reusable components
