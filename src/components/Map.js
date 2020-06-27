import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
const Map = (props) => {
   console.log(props.uri,'slikce')

   const dispatch = useDispatch()
   const mapResource = useSelector(state => state.map)
   useEffect(()=> {
        dispatch({type:'ADD_MAP',payload: {latitude:props.latitude,longitude:props.longitude}})
   },[])
  
   console.log(mapResource.url,'mapa')
   
    return(
        <>
        <Image style={styles.image} source={{uri:props.uri}} />
         <Image style={{ width: 400, height: 400 }} source={{uri:mapResource.url}} /> 
        </>
    )
}

const styles = StyleSheet.create({
    image:{
         position:'absolute',
         zIndex:100,
         top:0,
         alignSelf:'center',
         width:150,
         height:150
    }
})


export default Map