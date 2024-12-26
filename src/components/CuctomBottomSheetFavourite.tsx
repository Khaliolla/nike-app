import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { RefObject, useCallback } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { forwardRef, useMemo } from 'react'
import { Idata } from '../slices/dataSlice'
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { setItems } from '../slices/bagSlice'
import firestore from '@react-native-firebase/firestore'

export type Ref = BottomSheetModal

interface BottomSheetModalProps {
    ref: RefObject<BottomSheetModal>;
    item: Idata;
  }


export const CuctomBottomSheetFavourite = forwardRef<BottomSheetModal, BottomSheetModalProps>(({ item }, ref) => {

    const dispatch = useAppDispatch()
    const userId = useAppSelector((state) => state.user.id)
    const snapPoint = useMemo(() => ['50%'], [] ) 
    const { dismiss } = useBottomSheetModal()

    const renderBackDrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []
    )

    const removeFavouriteItem = async (userId: string, id: number) => {
        try {
            const userRef = firestore().collection('users').doc(userId);
    
            await userRef.update({
            favorites: firestore.FieldValue.arrayRemove(id),
            });
            console.log('Item removed from favorites');
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleBottomButton = () => {
        dispatch(setItems(item))
        dismiss()
    }

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
            <View style={{justifyContent:'center', flexDirection:'row', gap:15, marginBottom: 10}} >
                <Image style={{width: 200, height: 200}} source={{uri: item.image3}} />
                <View style={{justifyContent: 'center', alignItems: 'center'}} >
                 <Text style={styles.title}>{item.title.slice(0, 17)}</Text>
                 <Text style={styles.totalPrice} >{item.price} tg</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeFavouriteItem(userId, item.id)} >
                <Text style={{
                    fontFamily: "Roboto-Regular",
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#000",
                }}
                >
                Remove
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleBottomButton} > <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >Add to Bag</Text> </TouchableOpacity>
        
          </BottomSheetView>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },

    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 22
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
        marginTop: 15,
        color: "#767676"
    },

    button: {
        width: 350,
        height: 52,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20
    },

    removeButton: {
        width: 350,
        height: 52,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "#f6f6f6",
        marginTop: 20
    }
})

export default CuctomBottomSheetFavourite