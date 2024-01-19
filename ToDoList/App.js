import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialValues={['Walk Dog', 'Get Groceries', 'Finish C01 Lab']} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
