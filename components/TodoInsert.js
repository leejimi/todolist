import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import database from '@react-native-firebase/database'
import moment from 'moment'

const TodoInsert = () => {
    const [text, setText] = useState("");
  const buttonclick = (e) => {
      console.log("button clicked");
      const newRef = database().ref('/todos').push();
      console.log(newRef)
      database()
        .ref('/todos/'+newRef.key)
        .set({
            checked: true,
            deleted: false,
            todotext: text,
            reg_date: moment().format('YYYY-MM-DD HH:mm')
        })
        .then(() => console.log('Data set.'));
  }
  const onUpdateText = (txt) => {
      setText(txt)
  }
    return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="무엇을 해야 하나요?"
        placeholderTextColor={'#999'}
        autoCorrect={false}
        defaultValue={text}
        onChangeText={onUpdateText}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={buttonclick}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 18,
    marginLeft: 20,
  },
  button: {
    marginRight: 5,
  },
});

export default TodoInsert;