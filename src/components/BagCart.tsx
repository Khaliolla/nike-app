import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { Idata } from '../slices/dataSlice';
import PlusIcon from '../../assets/icons/PlusIcon';
import MinusIcon from '../../assets/icons/MinusIcon';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { decrementItems, incrementItems } from '../slices/bagSlice';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Size 37', value: '1' },
    { label: 'Size 38', value: '2' },
    { label: 'Size 39', value: '3' },
    { label: 'Size 40', value: '4' },
    { label: 'Size 41', value: '5' },
    { label: 'Size 42', value: '6' },
    { label: 'Size 43', value: '7' },
    { label: 'Size 44', value: '8' },
  ];

const BagCart = ({ item }: { item: Idata }) => {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
        <View>
        <View>
        <Dropdown
          style={styles.drop}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label" 
          valueField="value"
          maxHeight={200}
          placeholder={!isFocus ? 'Size' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item:any) => {
            setValue(item.value);
            console.log(value)
            setIsFocus(false);
          }}
        />
      </View>
        <View style={styles.incr} >
          <TouchableOpacity onPress={() => dispatch(decrementItems(item.id))} > <MinusIcon /> </TouchableOpacity> 
            <Text style={{fontFamily: "Roboto-Medium", fontSize: 19 }} >{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(incrementItems(item.id))} >  <PlusIcon /> </TouchableOpacity> 
        </View>
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
    fontSize: 22,
    flex: 1, 
    marginRight: 10, 
  },
  price: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
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
  },
  drop: {
    backgroundColor: 'white',
    padding: 16,
    width:130,
    height: 55,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#f6f6f6',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  selectedTextStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default BagCart;
