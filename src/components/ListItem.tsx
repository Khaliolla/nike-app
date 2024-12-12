import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Idata } from '../slices/dataSlice'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList } from '../navigator/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type ListItemProps = {
  item: Idata;
  index: number;
  // navigation: NativeStackNavigationProp<MainParamList, 'Product'>;
};

type navigateProp = NativeStackNavigationProp<MainParamList, 'Product'>

 
const ListItem: React.FC<ListItemProps> = ({item, index}) => {

  const navigation = useNavigation<navigateProp>()



  return (
    <TouchableOpacity style={index === 0 ? styles.wrapper : styles.wrapper2} onPress={() => navigation.navigate('Product', {item}) } >
        <Image style={{width:300, height: 300, marginBottom: 20}} source={{uri:item.image}} />
        <View style={{marginBottom: 16}} >
            <Text style={styles.title} >{item.title}</Text>
        </View>
        <View style={{marginBottom:20}} >
            <Text style={styles.price} >{item.price} Tg</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      marginLeft: 20,
  },

  wrapper2: {
    marginLeft: 10,
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 20
  },

  price: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    marginLeft: 3,
    color: "#767676"
  }
})

export default ListItem