import React from 'react';
import {StyleSheet} from 'react-native';
import Map from '../components/Map';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Navigation';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

type Props = {
  route: ProfileScreenRouteProp;
};

const MapScreen = ({route}: Props) => {
  const {latitude, longitude, uri} = route.params;

  return <Map latitude={latitude} longitude={longitude} uri={uri} />;
};

const styles = StyleSheet.create({});

export default MapScreen;
