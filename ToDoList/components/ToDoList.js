import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
  const [todolists, setTasks] = useState(initialValues.map((title) => ({ id: uuidv4(), title: title })));

  const addToDo = (newTitle) => {
    const newTask = { id: uuidv4(), title: newTitle };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
    
  const removeToDo = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  return (
    <View style={styles.container}>
      {todolists.map((task) => (
        <View key={task.id}>
          <Text style={styles.text}>{task.title}</Text>
          <View style={styles.buttonContainer}>
            <Button title="remove" onPress={() => removeToDo(task.id)} />
          </View>
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;