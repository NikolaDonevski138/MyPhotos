import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import Address from './Address';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const TakePhoto = ({navigation}) => {
  const [resources, setResources] = useState({});

  const myPhotos = useSelector(state => state.photos);
  const addresses = useSelector(state => state.addresses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(resources).length !== 0) {
      dispatch({type: 'ADD_PHOTO', payload: resources});
    }
  }, [resources]);

  const imageResource = myPhotos.map(imageData => imageData.cameraInfo);

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

  const renderHelper = ({item, index}) => {
    const {uri, latitude, longitude} = item;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Map', {
            latitude: latitude,
            longitude: longitude,
            uri: uri,
          });
        }}>
        <View style={styles.imageContainer}>
          <Image style={{width: 150, height: 150}} source={{uri}} />
          <View style={styles.address}>
            <Address
              latitude={latitude}
              longitude={longitude}
              address={addresses[index]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imageResource}
        renderItem={renderHelper}
        keyExtractor={item => item.fileName}
      />
      <TouchableOpacity onPress={selectFile} style={styles.icon}>
        <FontAwesomeIcon icon={faPlusCircle} color={'#009688'} size={80} />
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
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 30,
  },
});

export default TakePhoto;
