import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native'
import NikeIcon from '../../assets/icons/NikeIcon'

export const Main = ({navigation}: {navigation: any} ) => {
  return (
    <View style={styles.mainContainer} >
      <StatusBar barStyle={'light-content'} backgroundColor={"#000"}/>
    
     <View style={styles.wrapper} >
        <View style={{marginBottom: 20}} >
          <NikeIcon />
        </View>
        <Text style={styles.text} >Hi,
            Welcome to Nike.
            Thanks for becoming
            a Member!</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login') } style={styles.button} > <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20 }} >Join Us</Text> </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000",
    },

    text: {
        fontFamily: "Roboto-Medium",
        color: "#fff",
        fontSize: 50,
        marginBottom: 20
    },

    wrapper: {
        marginTop: 291,
        marginLeft: 20
    },

    button: {
        width: 150,
        height: 50,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
         marginTop: 15,
        borderRadius: 25,
        marginBottom: 30
    }
})
