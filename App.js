import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation></MainNavigation>
    </NavigationContainer>
  );
};

export default App;
