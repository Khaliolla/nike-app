import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Idata } from '../slices/dataSlice'

const width = Dimensions.get('window').width
 
const FavouritesList = ({item, index}: {item: Idata, index: number}) => {
    
  return (
    <TouchableOpacity style={styles.wrapper} >
        <Image style={{width:(width/2)-1, height: 200}} source={{uri:item.image}} />
        <View style={{marginBottom: 16}} >
            <Text style={styles.title} >{item.title.slice(0, 19)}</Text>
        </View>
        <View style={{marginBottom:20}} >
            <Text style={styles.price} >{item.price} Tg</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: (width/2)-1
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 20
  },

  price: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    marginLeft: 3,
    color: "#767676"
  }
})

export default FavouritesList