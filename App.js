import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';


const fonts = () => Font.loadAsync({
  'rub-light': require('./assets/fonts/Rubik-Light.ttf'),
  'rub-reg': require('./assets/fonts/Rubik-Regular.ttf'),
  'rub-med': require('./assets/fonts/Rubik-Medium.ttf'),
  'rub-semibold': require('./assets/fonts/Rubik-SemiBold.ttf'),
  'rub-bold': require('./assets/fonts/Rubik-Bold.ttf')
});

export default function App() {

  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack /> 
    );
  } else {  
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    ); 
  } 
}


