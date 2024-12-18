import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { Idata } from '../slices/dataSlice';
import PlusIcon from '../../assets/icons/PlusIcon';
import MinusIcon from '../../assets/icons/MinusIcon';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { decrementItems, incrementItems } from '../slices/bagSlice';

const BagCart = ({ item }: { item: Idata }) => {

  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} tg</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 15 }}
          source={{ uri: item.image }}
        />
        <View style={styles.incr} >
          <TouchableOpacity onPress={() => dispatch(decrementItems(item.id))} > <MinusIcon /> </TouchableOpacity> 
            <Text style={{fontFamily: "Roboto-Medium", fontSize: 19 }} >{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(incrementItems(item.id))} >  <PlusIcon /> </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 10, 
  },
  textRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15, 
    marginLeft: 16,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 19,
    flex: 1, 
    marginRight: 10, 
  },
  price: {
    fontFamily: 'Roboto-Medium',
    fontSize: 19,
    marginRight: 16
  },
  image: {
    marginLeft: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50
  },
  incr: {
    width: 130,
    height: 55,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#f6f6f6',
  }
});

export default BagCart;
