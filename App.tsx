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
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function App(): React.JSX.Element {

  useEffect(() => {
    if(Platform.OS === 'android'){
    SplashScreen.hide();
    }
  }, [])

  return (
   <Provider store={store} >
    <GestureHandlerRootView>
      <AppNavigator />
    </GestureHandlerRootView>
   </Provider>
  );
}


export default App;
