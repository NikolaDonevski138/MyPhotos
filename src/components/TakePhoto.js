//import * as R from 'ramda'
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Address from './Address'


const TakePhoto = () => {
  const [resources, setResources] = useState({});

  const myPhotos = useSelector(state => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ADD_PHOTO', payload: resources });
  }, [resources]);


  const imageResource = myPhotos.map(imageData => imageData.cameraInfo);
  const filteredImageUri = imageResource.filter(image => Object.keys(image).length !== 0);


  const selectFile = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setResources({
          uri: res.uri,
          latitude: res.latitude,
          longitude: res.longitude,
          fileName: res.fileName,
        });
      }
    });
  };

  const renderHelper = ({ item }) => {

    console.log(item, 'itemcinja')

    const { uri } = item
    const { latitude } = item
    const { longitude } = item
    return (
      <View style={styles.imageContainer}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: uri }} />
        <View style={styles.address}>
          <Address latitude={latitude} longitude={longitude} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={filteredImageUri}
        renderItem={renderHelper}

      />

      <TouchableOpacity onPress={selectFile} style={styles.button}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20

  }
});

export default TakePhoto;
