import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { forwardRef, useMemo } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Idata } from '../slices/dataSlice'
import BagModalList from './BagModalList'
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

export type Ref = BottomSheetModal

const CustomBottomSheetBag = forwardRef<Ref>((props, ref) => {
const data = useAppSelector((state) => state.bag.items)
const snapPoint = useMemo(() => ['40%', '50%'], [] ) 
const { dismiss } = useBottomSheetModal()
const renderBackDrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []
)

const renderItem = useCallback(
    ({ item, index }: {item: Idata, index: number}) => (
      <View >
        <BagModalList item={item} index={index} />
      </View>
    ),
    []
  );

  return (
    <BottomSheetModal
        ref={ref} 
        index={0}
        snapPoints={snapPoint} 
        backdropComponent={renderBackDrop}
        enablePanDownToClose={true}
        handleIndicatorStyle={{display: 'none'}}
        enableContentPanningGesture={false}
        >
          <BottomSheetView style={styles.container} >
            <Text style={styles.title} >Order Review</Text>

             
             <BottomSheetView style={styles.bottomFlat} >
             <BottomSheetFlatList
             data={data}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item) => item.id.toString()}
             renderItem={renderItem}
             contentContainerStyle={styles.contentContainer}
             />
             </BottomSheetView> 
             
            <Text style={styles.totalPrice} >Purchase Summary: {data.reduce((acc, item) => {return acc += (item.price * item.quantity)},0 ) } tg</Text>

            <TouchableOpacity style={styles.button} onPress={() => dismiss()} > <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >Submit Payment</Text> </TouchableOpacity>
        
          </BottomSheetView>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 24
    },

    contentContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomFlat: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    totalPrice: {
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        marginTop: 15
    },

    button: {
        width: 350,
        height: 52,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 25,
        marginBottom: 75
    },
})

export default CustomBottomSheetBag