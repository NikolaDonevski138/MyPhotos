import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ListRenderItem,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import Address from './Address';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Props} from '../screens/MyPhotosScreen';

interface photoItems {
  fileName: string;
  latitude: number;
  longitude: number;
  uri: string;
}

interface cameraInfo {
  cameraInfo: photoItems;
}

interface Photo {
  photos: cameraInfo[];
}

interface addressItems {
  display_name: 'string';
  lat: string;
  licence: string;
  lon: string;
  place_id: string;
}

interface addressInfo {
  addressInfo: addressItems;
}

interface AddressData {
  addresses: addressInfo[];
}

const TakePhoto = ({navigation}: Props) => {
  const [resources, setResources] = useState({});

  const myPhotos = useSelector((state: Photo) => state.photos);
  const addresses = useSelector((state: AddressData) => state.addresses);
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

  const renderHelper: ListRenderItem<photoItems> = ({item, index}) => {
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
    flex: 1,
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    width: '50%',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 30,
  },
});

export default TakePhoto;
