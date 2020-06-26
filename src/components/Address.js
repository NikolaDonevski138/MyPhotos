import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


const Address = (props) => {

    const addresses = useSelector(state => state.addresses);
    const dispatch = useDispatch();


    const address = addresses[0].adressInfo.display_name


    useEffect(() => {
        dispatch({ type: 'ADD_ADDRESS', payload: { latitude: props.latitude, longitude: props.longitude } });
    }, [props.latitude]);




    return (
        <Text>Location:{address}</Text>
    )
}


export default Address;
