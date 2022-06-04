import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({item}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
            {item.checked?
            <Icon name="circledown" size={30} color="#3143e8" />
            :<Icon name="circledowno" size={30} color="#3143e8" />
        }
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>
          {item.text}
      </Text>
         <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                <Icon name="delete" size={30} color="#e33057" />
      </Text>
         </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
      marginRight : 20,
      marginLeft: 20,
  },
  strikeText: {
      color: '#29323c'
  },
  unstrikeText: {
      color: '#29323c'
  },
  buttonContainer: {
      marginVertical: 10,
      marginHorizontal: 10,
  },
});

export default TodoListItem;