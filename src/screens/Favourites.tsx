import defaultExport from '@react-native-firebase/auth'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../../hooks/reduxHooks';
import FavouritesList from '../components/FavouritesList';
import { Loader } from '../components/Loader';
import { Idata } from '../slices/dataSlice';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CuctomBottomSheetFavourite from '../components/CuctomBottomSheetFavourite';


export const Favourites = () => {
  const [favourites, setFavourites] = useState<any>()
  const items = useAppSelector((state) => state.data.items)
  const userId = useAppSelector((state) => state.user.id)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchFavourites = async () => {
    try {
      const user = await firestore().
      collection('users').
      doc(userId).get()
      
      const response = user.data() as any
      const result  = items.filter(obj => response.favorites?.includes(obj.id))
        setFavourites(result)
        setIsLoading(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchFavourites()
  }, [items, favourites])

  

  return (
    isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Favourites</Text>
          </View>
          <View style={styles.wrap}>
            {favourites.map((item: Idata, index: number) => (
              <FavouritesList key={item.image} item={item} index={index} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    marginTop: 20,
    padding: 24
  },

  headerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },

  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 2
  }
})

export default Favourites