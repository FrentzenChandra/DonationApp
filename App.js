import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect, useRef} from 'react';
import {AppState, SafeAreaView} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './redux/Store';
import {persistedStore} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './API/user';

const App = () => {
  // Akan Mengambil Status dari aplikasi tersebut
  const appState = useRef(AppState.currentState);

  // Lakukan function useEffect pada saat aplikasi di render
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          // Jika aplikasi benar benar ditutup
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You Have Comeback To App');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    // berguna untuk pada saat kamu masuk dan juga keluar dari aplikasi
    // keluar dengan maksud aplikasi masih di background
    checkToken();
    console.log('App has Rendered');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
