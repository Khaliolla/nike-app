import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Idata } from '../slices/dataSlice'

type ListItemProps = {
  item: Idata;
  index: number;
};

 
const BagModalList: React.FC<ListItemProps> = ({item, index}) => {

  return (
    <View style={index === 0 ? styles.wrapper : styles.wrapper2} >
        <Image style={{width:100, height: 100, marginRight: 30, borderRadius: 15}} source={{uri:item.image}} />

        <View>
            <View style={{marginBottom: 16}} >
                <Text style={styles.title} >{item.title.slice(0,10)}</Text>
            </View>
            <View style={{marginBottom:20}} >
                <Text style={styles.price} >{item.price} Tg</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      width: 230,
      marginLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: '#f6f6f6',
      borderRadius: 15,
      padding: 10
  },

  wrapper2: {
    width: 230,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#f6f6f6',
    borderRadius: 15,
    padding: 10
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 14
  },

  price: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    marginLeft: 3,
    color: "#767676"
  }
})

export default BagModalList