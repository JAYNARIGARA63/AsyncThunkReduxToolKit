import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Eye, EyeOff} from 'lucide-react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({email: false, password: false});
  const [secureText, setSecureText] = useState(true);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-6">Login</Text>

      {/* Email Input */}
      <TextInput
        className={`w-full p-3 border ${
          isFocused.email ? 'border-black' : 'border-gray-400'
        } rounded-md mb-4 bg-white`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused({...isFocused, email: true})}
        onBlur={() => setIsFocused({...isFocused, email: false})}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <View
        className={`w-full flex-row items-center p-3 border ${
          isFocused.password ? 'border-black' : 'border-gray-400'
        } rounded-md bg-white mb-4`}>
        <TextInput
          className="flex-1"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          onFocus={() => setIsFocused({...isFocused, password: true})}
          onBlur={() => setIsFocused({...isFocused, password: false})}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          {secureText ? (
            <EyeOff size={20} color="gray" />
          ) : (
            <Eye size={20} color="black" />
          )}
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity className="w-full bg-blue-500 p-3 rounded-md items-center">
        <Text className="text-white font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
