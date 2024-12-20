import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity, StatusBar, ScrollView, Modal } from 'react-native'
import { Iitem } from './Home'
import ShopsList from '../components/ShopsList'
import SearchIcon from '../../assets/icons/SearchIcon'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchData } from '../slices/dataSlice'
import { Idata } from '../slices/dataSlice'
import ListItem from '../components/ListItem'
import Sceleton from '../components/Sceleton'
import { TextInput } from 'react-native-gesture-handler'
import SearchContainer from '../components/SearchContainer'

export const Shop = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [modalWin, setModalWin] = useState(false)
  const items: Idata[] = useAppSelector((state) => state.data.items)
  const status: string = useAppSelector((state) => state.data.status)
  const [inputValue, setInputValue] = useState('')
  const [filterItemsList, setFilterItemsList] = useState<Idata[]>([])

  const searchFilter = (searchText: any, listItems: Idata[]) => {
    if(!searchText) {
      return []
    }

    return listItems.filter((item: Idata) => 
      item.title.toLowerCase().includes(typeof searchText === 'string' ? searchText.toLowerCase() : '' )
     )
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filterItems = searchFilter(inputValue, items)
      setFilterItemsList(filterItems)
    }, 300)
    return () => clearTimeout(Debounce)
  }, [inputValue])


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

        <TouchableOpacity onPress={() => setModalWin(true)} style={{width:32, height: 32, marginRight: 16}}>
           <SearchIcon style={{width:32, height: 32}} />
        </TouchableOpacity>
      </View>
       <View style={styles.titleContainer} >
          <Text style={styles.text} >ALL</Text>
        </View>
        <View>
          { status === 'loading' ? <Sceleton /> : (<FlatList 
              data={all}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />) }
          
        </View>
        <View style={styles.titleContainer} >
          <Text style={styles.text} >Women`s</Text>
        </View>
        <View>
        { status === 'loading' ? <Sceleton /> : (<FlatList 
              data={womens}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />) }
        </View>
        <View style={styles.titleContainer} >
          <Text style={styles.text} >Men`s</Text>
        </View>
        <View>
        { status === 'loading' ? <Sceleton /> : (<FlatList 
              data={mens}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
          />) }
        </View>
        <Modal visible={modalWin} style={{backgroundColor: "#fff"}} > 
          <SafeAreaView style={styles.modalContainer}>
            <ScrollView>
            <View style={styles.searchBar} >
              <SearchIcon style={{width:32, height: 32}} />
              <TextInput style={styles.modalInput} value={inputValue} onChangeText={setInputValue} placeholder='Search Product' />
              <TouchableOpacity onPress={() => setModalWin(false)} ><Text style={{fontFamily: "Roboto-Medium",color: '#767676', fontSize: 19}} >Cancel</Text></TouchableOpacity>
            </View>
            {filterItemsList.map((item) => <SearchContainer key={item.id} item={item} /> )}
            </ScrollView>
          </SafeAreaView>
        </Modal>
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
  },

  modalContainer: {
    flex: 1
  },

  modalInput: {
    width: 290,
    fontFamily: 'Roboto-Medium',
    fontSize: 19
  },

  searchBar: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: "#f6f6f6",
    paddingBottom: 10
  }
})
