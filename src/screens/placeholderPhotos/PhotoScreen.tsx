import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigation';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Photo'>;

type Props = {
  route: ProfileScreenRouteProp;
};

interface ImageData {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface Data {
  data: ImageData[];
}

interface Placeholder {
  photosPlaceholder: Data;
}

const PhotoScreen = ({route}: Props) => {
  const photoId = route.params.idPhoto;

  const getPhotoFromStore = useSelector(
    (state: Placeholder) => state.photosPlaceholder.data,
  );
  console.log(getPhotoFromStore, 'getPhotoFromStore');

  const selectedPhoto = getPhotoFromStore.find(item => item.id === photoId);

  return (
    <View style={styles.imageContainer}>
      <Image
        style={{width: 300, height: 300}}
        source={{uri: selectedPhoto?.url}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoScreen;
