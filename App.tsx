import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigation from './src/routes/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
