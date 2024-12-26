import React, { useRef } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Idata } from '../slices/dataSlice'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import CuctomBottomSheetFavourite from './CuctomBottomSheetFavourite'

const width = Dimensions.get('window').width

 
const FavouritesList = ({item, index}: {item: Idata, index: number}) => {

  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const handlePresentModal = () => bottomSheetRef.current?.present()
    
  return (
  <>
    <TouchableOpacity style={styles.wrapper} onPress={handlePresentModal} >
        <Image style={{width:(width/2)-1, height: 200}} source={{uri:item.image}} />
        <View style={{marginBottom: 16}} >
            <Text style={styles.title} >{item.title.slice(0, 19)}</Text>
        </View>
        <View style={{marginBottom:20}} >
            <Text style={styles.price} >{item.price} Tg</Text>
        </View>
    </TouchableOpacity>
    <CuctomBottomSheetFavourite
        ref={bottomSheetRef}
        item={item}
     />
  </>
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