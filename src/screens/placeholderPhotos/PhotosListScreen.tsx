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
  ListRenderItem,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';

type MyPhotosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhotosList'
>;

export interface Props {
  navigation: MyPhotosScreenNavigationProp;
}

interface imageData {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface data {
  data: imageData[];
}

interface RootState {
  photosPlaceholder: data;
}

const PhotosListScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const imagePlaceholder = useSelector(
    (state: RootState) => state.photosPlaceholder.data,
  );

  console.log(imagePlaceholder, 'img');

  console.log(imagePlaceholder, 'imggg');
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

  const renderHelper: ListRenderItem<imageData> = ({item, index}) => {
    console.log(item, 'item');
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
