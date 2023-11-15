import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { useState } from 'react'

export default function App() {

  const [todos, setTodos] = useState([])

  return (
    <View className="flex-1 bg-gray-200">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <StatusBar style="auto" />
    </View>
  );
}


