import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const PostsScreen = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  console.log(posts.value, 'postovi');

  useEffect(() => {
    dispatch({type: 'FETCH_POST'});
  }, []);

  const helperRenderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#c9c9c9',
          borderBottomStyle: 'solid',
          backgroundColor: 'white',
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Title</Text>
          <View style={styles.marginBetweenText} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Post:</Text>
          <View style={styles.marginBetweenText} />
          <Text style={styles.text}>{item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={posts.value} renderItem={helperRenderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#737373',
    fontWeight: 'bold',
    fontSize: 16,
  },
  marginBetweenText: {
    marginRight: 5,
  },
});

export default PostsScreen;

//To Do drag vertical and remove scroll and fix position bug on text
//need to be add some id in list
//making more reusable components
