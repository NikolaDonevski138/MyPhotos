import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Map from '../components/Map'
const MapScreen = ({route}) => {
    
    
    const {latitude,longitude,uri} = route.params
    
    return (
        <Map latitude={latitude} longitude={longitude} uri={uri}/>
    )
}

const styles = StyleSheet.create({})

export default MapScreen