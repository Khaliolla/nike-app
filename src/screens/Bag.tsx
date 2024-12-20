import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native'
import BagCart from '../components/BagCart'
import { useAppSelector } from '../../hooks/reduxHooks'
import { useState } from 'react';
import EmptyBag from '../components/EmptyBag';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheet from '../components/CustomBottomSheet';
 
export const Bag = () => {

  const bagItems = useAppSelector((state) => state.bag.items )
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const handlePresentModal = () => bottomSheetRef.current?.present()

  return (
    <SafeAreaView style={styles.container} >
       <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>
       <ScrollView>
        {bagItems.length ? 
        (bagItems.map((item) => {
          return <BagCart key={item.id} item={item} /> 
        })) :
        (<EmptyBag />) }
       </ScrollView>

       <View style={styles.cost} >
        <Text style={styles.total} >Total :</Text> 
        <Text style={styles.price} >
          {bagItems.reduce((acc, item) => {return acc += (item.price * item.quantity)},0 ) } tg 
        </Text>
        <TouchableOpacity onPress={handlePresentModal} disabled={!bagItems.length} style={styles.button}> 
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >
            Checkout
          </Text> 
        </TouchableOpacity>
       </View>
       <CustomBottomSheet 
       ref={bottomSheetRef}
       />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  cost: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  total: {
    width: 70,
    fontFamily: "Roboto-Medium",
    fontSize: 25,
    marginLeft: 20
  },

  button: {
    width: 170,
    height: 55,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 20
  },

  price: {
    position: 'absolute',
    fontFamily: "Roboto-Medium",
    fontSize: 19,
    marginLeft: 100
  },
  drop: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})


export default Bag;
