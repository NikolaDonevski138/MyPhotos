import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../components/ListItem';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  value: Post[];
}

interface RootState {
  posts: PostsState;
}

const PostsScreen = () => {
  const postsData = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_POST' });
  }, []);

  return (
    <View>
      <ListItem data={postsData.value} titleText="Title:" text="Post:" />
    </View>
  );
};

export default PostsScreen;
