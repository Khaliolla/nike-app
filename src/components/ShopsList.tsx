import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import ListItem from './ListItem'
import { Idata } from '../slices/dataSlice'


const ShopsList = ({item, index}: {item: Idata, index: number}) => {

  const keyExtractor = (item: Idata) => item?.id.toString();
  const renderItem = ({ item, index }: { item: Idata, index: number }) => <ListItem item={item} index={index} />;

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer} >
            <Text style={styles.text} >{item.title}</Text>
        </View>

    

     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {

    },

    titleContainer: {
        marginLeft: 20,
        marginBottom: 40
    },

    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 25
    }
})

export default ShopsList;