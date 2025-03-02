import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DashBoard = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text
        style={{marginTop: 500}}
        onPress={() => navigation.navigate('FirstScreen')}>
        DashBoard
      </Text>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
