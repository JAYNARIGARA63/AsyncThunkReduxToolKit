// npm install @reduxjs/toolkit react-redux

// npx react-native link @react-native-async-storage/async-storage

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Async thunk to load token from storage
// export const loadToken = createAsyncThunk('auth/loadToken', async () => {
//   const token = await AsyncStorage.getItem('token');
//   return token ? token : null;
// });

// // Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: null,
//     isLoading: true, // Indicates whether we are checking login state
//   },
//   reducers: {
//     login: (state, action) => {
//       state.token = action.payload;
//       AsyncStorage.setItem('token', action.payload);
//     },
//     logout: (state) => {
//       state.token = null;
//       AsyncStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loadToken.fulfilled, (state, action) => {
//       state.token = action.payload;
//       state.isLoading = false;
//     });
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/authSlice';

// const LoginScreen = () => {
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     const fakeToken = '123456'; // Simulating an API token response
//     dispatch(login(fakeToken)); // Save token in Redux & AsyncStorage
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Login Screen</Text>
//       <TextInput placeholder="Username" style={{ borderBottomWidth: 1, width: 200, marginBottom: 10 }} />
//       <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth: 1, width: 200, marginBottom: 10 }} />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginScreen;

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/authSlice';

// const ContactScreen = () => {
//   const dispatch = useDispatch();

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Contact Screen - You are logged in!</Text>
//       <Button title="Logout" onPress={() => dispatch(logout())} />
//     </View>
//   );
// };

// export default ContactScreen;

// import React, { useEffect } from 'react';
// import { ActivityIndicator, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadToken } from './redux/authSlice';
// import LoginScreen from './screens/LoginScreen';
// import ContactScreen from './screens/ContactScreen';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// const Stack = createStackNavigator();

// const MainNavigator = () => {
//   const { token, isLoading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   // Load token when app starts
//   useEffect(() => {
//     dispatch(loadToken());
//   }, []);

//   // Show loading indicator while checking authentication status
//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {token ? (
//         <Stack.Screen name="ContactScreen" component={ContactScreen} />
//       ) : (
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       )}
//     </Stack.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <MainNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default AppNavigator;

// import React from 'react';
// import AppNavigator from './AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;
