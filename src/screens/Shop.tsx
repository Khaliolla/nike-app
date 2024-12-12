import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { Iitem } from './Home'
import ShopsList from './components/ShopsList'
import SearchIcon from '../../assets/icons/SearchIcon'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchData } from './slices/dataSlice'
import { Idata } from './slices/dataSlice'
import ListItem from './components/ListItem'


export const Shop = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const items: Idata[] = useAppSelector((state) => state.data.items)

  const all = items
  const mens = items.filter((item) => item.cat === 0)
  const womens = items.filter((items) => items.cat === 1)

  const keyExtractor = (item: Idata) => item?.id.toString()
  const renderItem = ({ item, index }: { item: Idata, index: number }) => <ListItem item={item} index={index} />

  return (
    <SafeAreaView style={styles.mainContainer} >
      <ScrollView>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>
      
      <View style={styles.header} >
        
        <Text style={styles.headerText} >Shop</Text>

        <TouchableOpacity style={{width:32, height: 32, marginRight: 16}}>
           <SearchIcon style={{width:32, height: 32}} />
        </TouchableOpacity>
      </View>
       <View style={styles.titleContainer} >
          <Text style={styles.text} >ALL</Text>
        </View>
        <View>
          <FlatList 
              data={all}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.titleContainer} >
          <Text style={styles.text} >Women`s</Text>
        </View>
        <View>
          <FlatList 
              data={womens}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.titleContainer} >
          <Text style={styles.text} >Men`s</Text>
        </View>
        <View>
          <FlatList 
              data={mens}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />
        </View>
     </ScrollView>
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
