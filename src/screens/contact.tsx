import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import {Plus, RefreshCw, Phone, Mail} from 'lucide-react-native';

const contacts = [
  {
    id: '1',
    name: 'John Doe',
    company: 'TechCorp',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    name: 'Jane Smith',
    company: 'Innovate Ltd',
    image: 'https://via.placeholder.com/50',
  },
];

const ContactScreen = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="flex-row justify-between items-center p-4 bg-white shadow-md">
        <Text className="text-xl font-bold">Contacts</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity>
            <Plus size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <RefreshCw size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input */}
      <View className="p-4">
        <TextInput
          className={`w-full p-3 border ${
            isFocused ? 'border-black' : 'border-gray-400'
          } rounded-md bg-white`}
          placeholder="Search contacts"
          value={search}
          onChangeText={setSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {/* Contact List */}
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View className="flex-row items-center bg-white p-4 m-2 rounded-lg shadow-md">
            <Image
              source={{uri: item.image}}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="text-gray-500">{item.company}</Text>
            </View>
            <TouchableOpacity className="p-2">
              <Phone size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 ml-2">
              <Mail size={24} color="blue" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ContactScreen;
