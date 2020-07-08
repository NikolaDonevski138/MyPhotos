import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const PhotosListScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const imagePlaceholder = useSelector(state => state.photosPlaceholder.data)


  useEffect(() => {
    dispatch({ type: 'GET_PHOTO' })
  }, [])



  const renderHelper = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Photo', { idPhoto: item.id })}>
        <View style={styles.container}>
          <Image
            style={{ width: 110, height: 110, marginBottom: 10 }}
            source={{ uri: item.thumbnailUrl }}
          />
          <Text style={styles.numberOfImage}>{index + 1}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={imagePlaceholder}
      renderItem={renderHelper}
      keyExtractor={index => index.toString()}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  numberOfImage: {
    display: 'flex',
    alignSelf: 'center',
  },
});

export default PhotosListScreen;
