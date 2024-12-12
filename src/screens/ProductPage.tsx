import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { MainParamList } from '../navigator/AppNavigator';
import Carousel from 'react-native-snap-carousel';

type ProductScreenRouteProp = RouteProp<MainParamList, 'Product'>;

type Props = {
  route: ProductScreenRouteProp;
};

type Iitem = {
  image: string
}

const renderItem = ({item}: {item: Iitem}) => {
  console.log(item)
  return (
      <View>
          <Image source={{uri: item.image}} style={{width: 300, height: 200, borderRadius: 10}} />
      </View>
  );
}


const ProductPage: React.FC<Props> = ({route}) => {

  const sliderWidth = Dimensions.get('window').width;


  const sliderData = [
    {
      image: route.params.item.image
    },
    {
      image: route.params.item.image2
    },
    {
      image: route.params.item.image3
    }
  ]



  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>

      {/* <Carousel
              data={sliderData}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={300}
            /> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  }
})

export default ProductPage