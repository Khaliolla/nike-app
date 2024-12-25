import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import { Main } from '../screens/Main';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import TabNavigator from './TabNavigator';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { loadUserFromStorage } from '../slices/userSlice';
import { Loader } from '../components/Loader';
import ProductPage from '../screens/ProductPage';
import { fetchData, Idata } from '../slices/dataSlice';


export type MainParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Tab: undefined;
  Product: {item: Idata};
  Loading: undefined;
};

export type AppStackParamList = NativeStackScreenProps<MainParamList, 'Product'>;
const Stack = createNativeStackNavigator<MainParamList>();

const AppNavigator = () => {

  

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchData());
  }, []);


  useEffect(() => {

    dispatch(loadUserFromStorage());
  }, []);
  
  const user = useAppSelector((state) => state.user)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
            {
              user.isLoading ?
              <Stack.Screen name="Loading" component={Loader}/>
              :
                 user.email ? ( 
                  <>
                   <Stack.Screen name="Tab" component={TabNavigator} /> 
                   <Stack.Screen name="Product" component={ProductPage} />
                   </>
                  ) 
                 :
                  (
                  <>
                  <Stack.Screen name="Main" component={Main} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  </>
                  ) 
            }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
