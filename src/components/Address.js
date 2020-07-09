import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const Address = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: { latitude: props.latitude, longitude: props.longitude },
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
    width: '70%'
  }
})


export default Address;
