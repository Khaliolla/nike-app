import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { MainParamList } from '../navigator/AppNavigator';
import { Carousel } from 'react-native-flatlist-carousel';
import { Animated } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import FavoritIcon from '../../assets/tabIcons/FavoritIcon';
import GoBackIcon from '../../assets/icons/GoBackIcon';

type ProductScreenRouteProp = RouteProp<MainParamList, 'Product'>;

type Props = {
  route: ProductScreenRouteProp;
};

type Iitem = {
  image: string
}

const renderItem = ({item}: {item: Iitem}) => {

  return (
      <View style={{flex:1}} >
          <Image source={{uri:item.image}} style={{width: "100%", height: 300}} />
      </View>
  );
}

const ProductPage: React.FC<Props> = ({route}) => {

  const navigation = useNavigation()

  const sliderData = [
    {
      image: route.params.item.image || '/'
    },
    {
      image: route.params.item.image2 || '/'
    },
    {
      image: route.params.item.image3 || '/'
    },
  ]


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}} >
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>
      <TouchableOpacity style={{marginLeft: 16,marginTop: 30 }} onPress={() => navigation.goBack()} >
        <GoBackIcon />
      </TouchableOpacity>
      <View style={styles.container} >
      <Carousel
      height={300}
      data={sliderData}
      renderCarouselItem={renderItem}
      keyExtractor={(item) => item.image}
      autoScrollInterval={5000}
      dotOptions={{ selectedFillColor: '#2196f3' }}
     />
      </View>
    <View style={styles.wrapper} >
     <Text style={styles.title} >{route.params.item.title}</Text>
     <Text style={styles.price} > {route.params.item.price} tg </Text>
     <Text style={styles.about} >The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra cushioning under the heel and forefoot and a snug, supportive arch band. Sweat-wicking power and breathability up top help keep your feet dry and cool to help push you through that extra set.</Text>
     <View style={styles.add} >
      <View style={{justifyContent: 'center', alignItems: 'center'}} >
        <TouchableOpacity style={styles.favourite} > <Text style={{ fontFamily: "Roboto-Regular", fontWeight: 'bold', fontSize: 20, color: '#000' }} > Favourite <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 23}} > <FavoritIcon color={'#000'} /> </View> </Text> </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} > <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >Add to bag</Text> </TouchableOpacity>
     </View>
    </View>

    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  wrapper: {
    marginLeft: 24,
    marginTop: 30,
    width: 400
  },

  title: {
    marginLeft: 4,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
  },

  price: {
    marginTop: 16,
    fontSize: 19,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
  },

  about: {
    marginLeft: 4,
    marginTop: 16,
    fontFamily: 'Roboto-Light',
    fontSize: 20
  },

  button: {
    width: 327,
    height: 50,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 25,
    marginBottom: 75,
  },

  add: {
    marginTop: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },

  favourite: {
    width: 327,
    height: 50,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#f6f6f6'
  }
});


export default ProductPage