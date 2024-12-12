import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native'
import Orders from '../../assets/icons/Orders'
import Pass from '../../assets/icons/Pass'
import Events from '../../assets/icons/Events'
import Settings from '../../assets/icons/Settings'
import { useAppSelector } from '../../hooks/reduxHooks'

export const Profile = () => {

  const userName = useAppSelector((state) => state.user.email)

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>

      <View style={styles.wrapper} >
        <Image style={styles.avatar} source={{uri: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"}} />
        <View style={styles.userName} >
          <Text style={styles.userNameText} >{userName}</Text>
        </View>
        <TouchableOpacity style={styles.editProfile} >
          <Text style={styles.btnText} >Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.settings} >
          <TouchableOpacity style={{width: 100, height: 46, borderRightWidth: 2, borderRightColor: "#BABABA", justifyContent: 'center', alignItems: 'center'}} >
            <Orders style={styles.icon} />
            <Text>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 100, height: 46, borderRightWidth: 2, borderRightColor: "#BABABA", justifyContent: 'center', alignItems: 'center'}} >
            <Pass style={styles.icon}  />
            <Text>Pass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 100, height: 46, borderRightWidth: 2, borderRightColor: "#BABABA", justifyContent: 'center', alignItems: 'center'}} >
            <Events style={styles.icon}  />
            <Text>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 100, height: 46, justifyContent: 'center', alignItems: 'center'}} >
            <Settings style={styles.icon}  />
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.wrap} >

      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  wrapper: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  avatar: {
    width: 130,
    height: 130,
    marginTop: 120,
    marginBottom: 30,
    borderRadius:70
  },

  userNameText: {
    fontFamily: "Roboto-Medium",
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30
  },

  userName: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  editProfile: {
    width: 230,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#BABABA",
    borderRadius: 50,
    marginBottom: 80
  },

  btnText: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    color: '#000'
  },

  settings: {
    width: '100%',
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    marginBottom: 3
  },

  wrap: {
    flex: 1
  },

})