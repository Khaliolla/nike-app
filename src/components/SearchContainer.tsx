import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Idata } from '../slices/dataSlice'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../navigator/AppNavigator';
import { useNavigation } from '@react-navigation/native';


type navigateProp = NativeStackNavigationProp<MainParamList, 'Product'>

 
const SearchContainer = ({item, setInputValue, setFilterItemsList}: {item: Idata, setInputValue: any, setFilterItemsList: any}) => {

  const navigation = useNavigation<navigateProp>()
  const handlePress = () => {
    navigation.navigate('Product', {item})
    setInputValue('')
    setFilterItemsList([])
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePress } >
        <View style={styles.container} >
            <Image style={styles.image} source={{uri: item.image}} />
            <View>
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.price} >{item.price} tg</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      width: '100%',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    borderWidth: 3,
    borderColor: '#f6f6f6'
  },

  image: {
    width: 130,
    height: 130,
    marginLeft: 10,
    borderRadius: 15
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    marginLeft: 10
  },

  price: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    marginLeft: 10,
    color: '#767676'
  }
})

export default SearchContainer