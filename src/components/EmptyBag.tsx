import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BagIcon from '../../assets/tabIcons/BagIcon'
import BagEmptyIcon from '../../assets/icons/BagEmptyIcon'

const EmptyBag = () => {
  return (
    <View style={styles.container} >
      <BagEmptyIcon />
      <Text style={styles.text}>Your bag is empty.{'\n'}
When you add products, they’ll{'\n'}
appear here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 280,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 16,
        width: 300,
        fontFamily: 'Roboto-Medium',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default EmptyBag