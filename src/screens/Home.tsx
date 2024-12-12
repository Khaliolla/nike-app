import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { format } from 'date-fns';
import {data} from '../../data'
import HomeList from './components/HomeList';

export interface Iitem {
  id: number,
  title: string,
  price: number,
  img: string
}

export const Home = () => {
  
  const today = new Date();

  const formattedDate = format(today, 'EEEE, d MMMM');
  const keyExtractor = (item: Iitem) => item?.id.toString();
  const renderItem = ({ item, index }: { item: Iitem, index: number }) => <HomeList item={item} index={index} />;
  
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>
      <ScrollView>
     <View style={styles.container} >
      <View style={styles.h1} >
        <Text style={styles.text} >Discover</Text>
      </View>
      <View style={styles.date} >
        <Text style={styles.text2} >{formattedDate}</Text>
      </View>
     </View>
     
     <View style={styles.post} >
       <Image style={styles.pic} source={require('../../assets/img/Post.png')} />
     </View>
    
     <View style={styles.wrapper} >
      <View style={{marginTop: 40, marginLeft: 24, marginBottom: 10}} >
        <Text style={{fontFamily:"Roboto-Medium", fontSize: 16}} >What’s new</Text>
      </View>
      <View style={{ width: 340,marginLeft: 24, marginBottom: 20}} >
        <Text style={{fontFamily:"Roboto-Medium", fontSize: 32, color: "#767676"}} >The latest arrivals from Nike</Text>
      </View>

        <View>
          <FlatList 
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.post} >
         <Image style={{width:'100%', height:500}} source={require('../../assets/img/Post2.png')} />
        </View>

     </View>

     </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
      width: '100%',
      height: 160,
      backgroundColor: "#fff"
    },

    text: {
      fontFamily:"Roboto-Medium",
        fontSize: 30
    },

    text2: {
      fontFamily: "Roboto-Light"
    },

    h1: {
      marginTop: 50,
      marginLeft: 24,
      marginBottom: 10
    },

    date: {
      marginLeft: 24
    },

    post: {
      
    },

    pic: {
      width: "100%",
      height: 600
    },

    wrapper: {
      backgroundColor: "#fff"
    }
})

