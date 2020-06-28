import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ListItem = props => {
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
          <Text style={styles.text}>{props.titleText}</Text>
          <View style={styles.marginBetweenText} />
          <Text style={styles.text}>{item.title ? item.title : item.name}</Text>
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
