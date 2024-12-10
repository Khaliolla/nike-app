import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity, StatusBar } from 'react-native'
import { data } from '../../data'
import { Iitem } from './Home'
import ShopsList from './components/ShopsList'
import SearchIcon from '../../assets/icons/SearchIcon'


export const Shop = () => {

  
  const keyExtractor = (item: Iitem) => item?.id.toString();
  const renderItem = ({ item, index }: { item: Iitem, index: number }) => <ShopsList item={item} index={index} />;

  return (
    <SafeAreaView style={styles.mainContainer} >
      <View style={styles.header} >
        
        <Text style={styles.headerText} >Shop</Text>

        <TouchableOpacity style={{width:32, height: 32, marginRight: 16}}>
           <SearchIcon style={{width:32, height: 32}} />
        </TouchableOpacity>
      </View>
        <FlatList 
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    height: 90,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginLeft: 189
  }
})
