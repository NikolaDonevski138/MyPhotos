import React from 'react';
import TakePhoto from '../components/TakePhoto';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';

type MyPhotosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MyPhoto'
>;

interface Props {
  navigation: MyPhotosScreenNavigationProp;
}

const MyPhotosScreen = ({navigation}: Props) => {
  return <TakePhoto navigation={navigation} />;
};

export default MyPhotosScreen;
