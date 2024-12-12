import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Shop } from '../screens/Shop'
import { Favourites } from '../screens/Favourites'
import { Bag } from '../screens/Bag'
import { Profile } from '../screens/Profile'
import HomeIcon from '../../assets/tabIcons/HomeIcon'
import ShopIcon from '../../assets/tabIcons/ShopIcon'
import FavoritIcon from '../../assets/tabIcons/FavoritIcon'
import BagIcon from '../../assets/tabIcons/BagIcon'
import ProfileIcon from '../../assets/tabIcons/ProfileIcon'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: "#767676",
      tabBarStyle: {
        height: 60,
        backgroundColor: '#fff'
      }
    }} >
        <Tab.Screen name='Home2' component={Home} options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? '#000' : "#767676"} />
          )
        }} />
        <Tab.Screen name='Shop' component={Shop} options={{
          tabBarIcon: ({focused}) => (
            <ShopIcon color={focused ? '#000' : "#767676"} />
          )
        }} />
        <Tab.Screen name='Favourites' component={Favourites} options={{
          tabBarIcon: ({focused}) => (
            <FavoritIcon color={focused ? '#000' : "#767676"} />
          )
        }} />
        <Tab.Screen name='Bag' component={Bag} options={{
          tabBarIcon: ({focused}) => (
            <BagIcon color={focused ? '#000' : "#767676"} />
          )
        }} />
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? '#000' : "#767676"} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default TabNavigator