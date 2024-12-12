/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';;
import AppNavigator from './src/navigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

function App(): React.JSX.Element {

  useEffect(() => {
    if(Platform.OS === 'android'){
    SplashScreen.hide();
    }
  }, [])

  return (
   <Provider store={store} >
    <AppNavigator />
   </Provider>
  );
}


export default App;
