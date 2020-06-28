import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const Address = props => {
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

    return null;
  };

  return <View>{printingAddress()}</View>;
};

export default Address;
