import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const TodoItem = ({ todo, setTodos, todos }) => {

    const [isChecked, setIsChecked] = useState(false)

    const deleteHandler = (id) => {
        console.log(id)
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

  return (
    <View>
        <View className="bg-white w-11/12 rounded-md p-2 m-1 self-center flex-row items-center justify-between">
            <View className="flex-row items-center">
                <Checkbox
                    className="w-6 h-6 mr-2"
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={todo.completed ? '#4630EB' : null}
                    />
                <Text className="text-lg">{todo.text}</Text>
            </View>
        
            <Feather name="trash-2" size={24} color="darkred" onPress={()=> deleteHandler(todo.id)} />
        </View>
    </View>
  )
}

export default TodoItem