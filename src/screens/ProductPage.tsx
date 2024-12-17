import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { MainParamList } from '../navigator/AppNavigator';
import { Carousel } from 'react-native-flatlist-carousel';
import { Animated } from 'react-native';
import { useRef, useEffect, useState } from 'react';

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
          <Image source={{uri:item.image}} style={{width: "100%", height: 250}} />
      </View>
  );
}

const ProductPage: React.FC<Props> = ({route}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000); // Автоматическое переключение каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const onSnapToItem = (index: number) => {
    setCurrentIndex(index);
  };


  const sliderWidth = Dimensions.get('window').width;

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
      <Text>Product</Text>
      <View style={styles.container}>
      <Carousel
      height={200}
      data={sliderData}
      renderCarouselItem={renderItem}
      keyExtractor={(item) => item.image}
      autoScrollInterval={3000}
      showDots
      dotOptions={{ selectedFillColor: '#2196f3' }}
    />
      
    </View>
  

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
});


export default ProductPage