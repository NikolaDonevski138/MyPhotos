import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
const Map = (props) => {
   //latitude
   //longitude
   const dispatch = useDispatch()
   const mapResource = useSelector(state => state.map)
   useEffect(()=> {
        dispatch({type:'ADD_MAP',payload: {latitude:props.latitude,longitude:props.longitude}})
   },[])

  
   
    return(
        <View>
         <Image style={{ width: 150, height: 150 }} source={{ uri:mapResource.map }} />
        </View>
    )
}

const styles = StyleSheet.create({})


export default Map