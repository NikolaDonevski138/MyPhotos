import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const PhotosListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const imagePlaceholder = useSelector(state => state.photosPlaceholder.data);
  const [orientation, setOrientation] = useState('');

  const getOrientation = () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  };

  const calculateEmptyScreen = () => {
    const widthOfScreen = Dimensions.get('window').width;
    const sizeOfItem = 130;
    const totalItemsOnScreen = widthOfScreen / sizeOfItem;
    return Math.floor(totalItemsOnScreen);
  };

  useEffect(() => {
    getOrientation();
    Dimensions.addEventListener('change', () => {
      getOrientation();
    });
  }, [orientation]);

  useEffect(() => {
    dispatch({type: 'GET_PHOTO'});
  }, []);

  const numOfColumns = orientation === 'portrait' ? 5 : 7;

  const renderHelper = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Photo', {idPhoto: item.id})}>
        <View style={styles.container}>
          <Image
            style={{width: 110, height: 110, marginBottom: 10}}
            source={{uri: item.thumbnailUrl}}
          />
          <Text style={styles.numberOfImage}>{index + 1}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      columnWrapperStyle={{flexWrap: 'wrap', alignContent: 'flex-start'}}
      scrollEventThrottle={1900}
      horizontal={false}
      data={imagePlaceholder}
      renderItem={renderHelper}
      keyExtractor={(item, index) => index}
      numColumns={calculateEmptyScreen()}
      key={numOfColumns}
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

  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default PhotosListScreen;
