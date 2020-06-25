import React, {useState,useEffect,useReducer} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux'


const TakePhoto = () => {
  const [resources, setResources] = useState({});

  const myPhotos = useSelector(state => state.photos)
  const dispatch = useDispatch();

   useEffect(() => {
       dispatch({type: 'ADD_PHOTO', payload:resources})
   },[resources])


   console.log(myPhotos);

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
          fileName: res.fileName
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{uri: resources.uri}}
          style={{width: 200, height: 200}}
        />
        <TouchableOpacity onPress={selectFile} style={styles.button}>
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
      </View>
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
});

export default TakePhoto;
