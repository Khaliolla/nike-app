import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Idata } from '../slices/dataSlice'

interface Iitem {
    id: number,
    title: string,
    price: number,
    img: string
}

const HomeList = ({item, index}: {item: Iitem, index: number}) => {


  return (
    <TouchableOpacity style={index === 0 ? styles.wrapper : styles.wrapper2} >
        <Image style={{width:300, height: 300, marginBottom: 20}} source={{uri:item.img}} />
        <View style={{marginBottom: 16}} >
            <Text style={styles.title} >{item.title}</Text>
        </View>
        <View style={{marginBottom:20}} >
            <Text style={styles.price} >{item.price} Tg</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      marginLeft: 20,
  },

  wrapper2: {
    marginLeft: 10,
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

export default HomeList