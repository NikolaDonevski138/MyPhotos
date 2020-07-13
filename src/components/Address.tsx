import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

interface Address {
  city: 'string';
  country: 'string';
  country_code: 'string';
  county: 'string';
  neighbourhood: 'string';
  postcode: 'string';
  road: 'string';
  state: 'string';
}

interface AdressInfo {
  address: Address;
  boundingbox: string[];
  display_name: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
}

interface AddressResponse {
  adressInfo: AdressInfo;
}

interface Props {
  latitude: number;
  longitude: number;
  address: AddressResponse;
}

const Address = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: {latitude: props.latitude, longitude: props.longitude},
    });
  }, []);

  const printingAddress = () => {
    if (props.address) {
      return <Text>Location :{props.address.adressInfo.display_name}</Text>;
    }

    return <Text>Location Not Found</Text>;
  };

  return <View>{printingAddress()}</View>;
};

const styles = StyleSheet.create({
  locationInfo: {
    width: '70%',
  },
});

export default Address;
