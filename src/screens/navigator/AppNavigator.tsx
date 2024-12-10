import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import { Main } from '../Main';
import { Login } from '../Login';
import { Register } from '../Register';
import { Home } from '../Home';
import TabNavigator from './TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { useEffect } from 'react';
import { loadUserFromStorage } from '../slices/userSlice';


export type MainParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type AppStackParamList = NativeStackScreenProps<MainParamList, 'Home'>;
const Stack = createNativeStackNavigator<MainParamList>();

const AppNavigator = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
          {user ? (  <Stack.Screen name="Home" component={TabNavigator} /> ) : (
            <>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          </>
          ) }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
