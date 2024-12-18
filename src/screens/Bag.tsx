import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native'
import BagCart from '../components/BagCart'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Dropdown } from 'react-native-element-dropdown';


export const Bag = () => {

  const bagItems = useAppSelector((state) => state.bag.items )

  return (
    <SafeAreaView style={styles.container} >
       <StatusBar barStyle={'dark-content'} backgroundColor={"#f6f6f6"}/>
       <ScrollView>
        {bagItems.length ? 
        (bagItems.map((item) => {
          return <BagCart item={item} /> 
        })) :
        (<Text>ERRRR</Text>) }
       </ScrollView>

       <View style={styles.cost} >
        <Text style={styles.total} >Total :</Text> 
        <Text style={styles.price} >
          {bagItems.reduce((acc, item) => {return acc += (item.price * item.quantity)},0 ) } tg 
        </Text>
        <TouchableOpacity style={styles.button}> 
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >
            Checkout
          </Text> 
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
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
  }
})


export default Bag;
