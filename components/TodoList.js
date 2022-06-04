import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';
import database from '@react-native-firebase/database';

const TodoList = () => {
  const [datas,setDatas] = useState([])
  database()
    .ref('/todos')
    .once('value')
    .then(snapshot => {
      const vals = snapshot.val();
      items = []
      for (var key in vals) {
        const item = vals[key];
        items.push(item)
      }
      setDatas(items)
    })
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      { datas.map( x => <TodoListItem item={x} /> )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;