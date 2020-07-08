import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux'

const PhotoScreen = (props) => {
    console.log(props, 'photoScreen')
    const photoId = props.route.params.idPhoto
    const selectedPhoto = useSelector(state => state.photosPlaceholder.data.find(item => item.id === photoId))
    console.log(selectedPhoto, 'slika')

    //selectedPhoto.url


    return (
        <View style={styles.imageContainer}>
            <Image style={{ width: 300, height: 300 }} source={{ uri: selectedPhoto.url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PhotoScreen