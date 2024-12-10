import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { data } from '../../../data'
import ListItem from './ListItem'

interface Iitem {
    id: number,
    title: string,
    price: number,
    img: string
}

const ShopsList = ({item, index}: {item: Iitem, index: number}) => {

  const keyExtractor = (item: Iitem) => item?.id.toString();
  const renderItem = ({ item, index }: { item: Iitem, index: number }) => <ListItem item={item} index={index} />;

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer} >
            <Text style={styles.text} >New Arrivals</Text>
        </View>

    <FlatList 
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
    />

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