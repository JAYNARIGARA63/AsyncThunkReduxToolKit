import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SectionList} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

interface Client {
  id: number;
  client_name: string;
  client_email: string;
  company_name: string;
}

interface GroupedClients {
  header: string;
  data: Client[];
}

const ALPHABETS = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const groupClientsByFirstLetter = (clients: Client[]): GroupedClients[] => {
  return clients
    .reduce((acc: GroupedClients[], client: Client) => {
      const firstChar = client.client_name.charAt(0).toLowerCase();
      const firstLetter = /^[a-z]$/.test(firstChar)
        ? firstChar.toUpperCase()
        : '#';

      let group = acc.find(g => g.header === firstLetter);
      if (!group) {
        group = {header: firstLetter, data: []};
        acc.push(group);
      }
      group.data.push(client);
      return acc;
    }, [])
    .sort((a, b) => a.header.localeCompare(b.header));
};

const clients: Client[] = [
  {
    id: 1,
    client_name: 'John Doe',
    client_email: 'johndoe@example.com',
    company_name: 'Tech Solutions Ltd.',
  },
  {
    id: 2,
    client_name: 'Jane Smith',
    client_email: 'janesmith@example.com',
    company_name: 'InnovateX',
  },
  {
    id: 3,
    client_name: 'Robert Brown',
    client_email: 'robertbrown@example.com',
    company_name: 'NextGen Software',
  },
  {
    id: 4,
    client_name: 'Emily Johnson',
    client_email: 'emilyj@example.com',
    company_name: 'GreenTech',
  },
  {
    id: 5,
    client_name: 'Michael Davis',
    client_email: 'michaeld@example.com',
    company_name: 'Alpha Corp',
  },
  {
    id: 6,
    client_name: 'Sarah Wilson',
    client_email: 'sarahw@example.com',
    company_name: 'Beta Innovations',
  },
  {
    id: 7,
    client_name: 'David Martinez',
    client_email: 'davidm@example.com',
    company_name: 'CloudWorks',
  },
  {
    id: 8,
    client_name: 'Olivia Taylor',
    client_email: 'oliviat@example.com',
    company_name: 'AI Labs',
  },
  {
    id: 9,
    client_name: 'James Anderson',
    client_email: 'jamesa@example.com',
    company_name: 'Quantum Technologies',
  },
  {
    id: 10,
    client_name: 'Sophia White',
    client_email: 'sophiaw@example.com',
    company_name: 'FutureAI',
  },
  {
    id: 11,
    client_name: 'Daniel Thomas',
    client_email: 'danielt@example.com',
    company_name: 'Smart Solutions',
  },
  {
    id: 12,
    client_name: 'Isabella Hernandez',
    client_email: 'isabellah@example.com',
    company_name: 'EcoSoft',
  },
  {
    id: 13,
    client_name: 'Matthew Hall',
    client_email: 'matthewh@example.com',
    company_name: 'SoftWareHouse',
  },
  {
    id: 14,
    client_name: 'Charlotte Lee',
    client_email: 'charlottel@example.com',
    company_name: 'CyberSecurity Inc.',
  },
  {
    id: 15,
    client_name: 'Benjamin Walker',
    client_email: 'benjaminw@example.com',
    company_name: 'DataFlow',
  },
  {
    id: 16,
    client_name: 'Mia Scott',
    client_email: 'mias@example.com',
    company_name: 'TechBridge',
  },
  {
    id: 17,
    client_name: 'Alexander King',
    client_email: 'alexanderk@example.com',
    company_name: 'WebWorks',
  },
  {
    id: 18,
    client_name: 'Amelia Lewis',
    client_email: 'amelial@example.com',
    company_name: 'AI Pioneers',
  },
  {
    id: 19,
    client_name: 'Ethan Young',
    client_email: 'ethany@example.com',
    company_name: 'DeepTech',
  },
  {
    id: 20,
    client_name: 'Harper Adams',
    client_email: 'harpera@example.com',
    company_name: 'SmartGrid Solutions',
  },
  {
    id: 21,
    client_name: '@Benjamin Walker',
    client_email: 'benjaminw@example.com',
    company_name: 'DataFlow',
  },
  {
    id: 22,
    client_name: '12Mia Scott',
    client_email: 'mias@example.com',
    company_name: 'TechBridge',
  },
  {
    id: 23,
    client_name: '@$$Alexander King',
    client_email: 'alexanderk@example.com',
    company_name: 'WebWorks',
  },
  {
    id: 24,
    client_name: '4345Amelia Lewis',
    client_email: 'amelial@example.com',
    company_name: 'AI Pioneers',
  },
  {
    id: 25,
    client_name: '88985Ethan Young',
    client_email: 'ethany@example.com',
    company_name: 'DeepTech',
  },
  {
    id: 26,
    client_name: '445Harper Adams',
    client_email: 'harpera@example.com',
    company_name: 'SmartGrid Solutions',
  },
];

const List: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredClients, setFilteredClients] = useState(clients);
  const [groupedClients, setGroupedClients] = useState(
    groupClientsByFirstLetter(clients),
  );
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    const filtered = clients.filter(client =>
      client.client_name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setGroupedClients(groupClientsByFirstLetter(filtered));
  }, [searchText]);

  const handleAlphabetPress = (letter: string) => {
    setSelectedLetter(letter);
    setTimeout(() => setSelectedLetter(null), 500);
    const index = groupedClients.findIndex(group => group.header === letter);
    if (index !== -1) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search clients..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <SectionList
        ref={sectionListRef}
        sections={groupedClients}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={({section: {header}}) => (
          <Text style={styles.header}>{header}</Text>
        )}
        renderItem={({item}) => (
          <SwipeListView
            data={[item]}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.clientName}>{item.client_name}</Text>
                <Text style={styles.clientEmail}>{item.client_email}</Text>
              </View>
            )}
            renderHiddenItem={({item}) => (
              <View style={styles.hiddenItem}>
                <TouchableOpacity style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-75}
            disableRightSwipe
          />
        )}
      />
      <ScrollView style={styles.alphabetList}>
        {ALPHABETS.map(letter => (
          <TouchableOpacity
            key={letter}
            onPress={() => handleAlphabetPress(letter)}
            style={[
              styles.alphabetButton,
              selectedLetter === letter ? styles.selectedLetter : null,
            ]}>
            <Text style={styles.alphabetText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    padding: 5,
    marginTop: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  clientName: {fontSize: 16, fontWeight: 'bold'},
  clientEmail: {fontSize: 14, color: 'gray'},
  hiddenItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
    height: 50,
    alignItems: 'center',
  },
  deleteButton: {backgroundColor: 'red', padding: 10},
  deleteButtonText: {color: 'white', fontWeight: 'bold'},
  alphabetList: {position: 'absolute', right: 10, top: 50},
  alphabetButton: {padding: 5},
  alphabetText: {fontSize: 14, fontWeight: 'bold', color: 'black'},
  selectedLetter: {backgroundColor: 'lightblue', borderRadius: 5},
});

export default List;
