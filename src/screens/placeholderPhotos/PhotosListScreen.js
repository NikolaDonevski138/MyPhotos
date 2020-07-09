import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const PhotosListScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const imagePlaceholder = useSelector(state => state.photosPlaceholder.data)
  const [orientation, setOrientation] = useState('')


  const getOrientation = () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setOrientation('portrait')
    } else {
      setOrientation('landscape')
    }
  }




  useEffect(() => {
    getOrientation()
    Dimensions.addEventListener('change', () => {
      getOrientation()
    })
  }, [orientation])

  useEffect(() => {
    dispatch({ type: 'GET_PHOTO' })
  }, [])

  const numOfColumns = orientation === "portrait" ? 3 : 8

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
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imagePlaceholder}
        renderItem={renderHelper}
        keyExtractor={index => index.toString()}
        key={orientation}
        numColumns={numOfColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // a: {
  //   flex: 1,
  //   paddingTop: Platform.OS === 'android' ? 10 : 40
  // },
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
