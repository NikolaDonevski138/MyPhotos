import React from 'react';
import {View, Text, FlatList, StyleSheet, ListRenderItem} from 'react-native';
import {Post} from '../screens/PostsScreen';
import {Comment} from '../screens/CommentsScreen';

interface Props {
  data: Array<Post | Comment>;
  titleText: string;
  text: string;
}

const ListItem = (props: Props) => {
  const helperRenderItem: ListRenderItem<Post | Comment> = ({item}) => {
    return (
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#c9c9c9',
          backgroundColor: 'white',
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{props.titleText}</Text>
          <View style={styles.marginBetweenText} />
          <Text style={styles.text}>
            {'title' in item ? item.title : item.name}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.marginBetweenText} />
          <Text style={styles.text}>{item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={helperRenderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: '80%',
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

export default ListItem;
