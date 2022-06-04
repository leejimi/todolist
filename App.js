import React, { useState } from 'react';

import {
  SafeAreaView, 
  StyleSheet, 
  TextInput, 
  View, 
  Text,
  ScrollView,
} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';



function App() {
  const [value, setvalue] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Jimi's To-Do List</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
        <ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'black',
  },
    card: {
      backgroundColor: '#fff',
      flex: 1,
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    input: {
      padding: 20,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24,
      marginLeft: 20,
    },
  });

export default App;