import {BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        navigation.goBack(); // Navigate back instead of exiting
        return true; // Prevent default back behavior (exiting app)
      }
      return false; // Allow default behavior (exit app if no back navigation)
    };

    // ✅ Correct way to add back handler
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // ❌ `removeEventListener` doesn't exist in newer React Native versions
    // ✅ Use `.remove()` instead for cleanup
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.goBack()}>
        FirstScreen - Tap here or press Back Button to go back
      </Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
});
