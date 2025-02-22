import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/routes/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
