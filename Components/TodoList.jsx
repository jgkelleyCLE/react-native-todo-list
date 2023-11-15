import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

const TodoList = ({ todos, setTodos }) => {

    const [isChecked, setIsChecked] = useState(false)

    const deleteHandler = (id) => {
        console.log(id)
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const handleCompletion = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

  return (
    <View className="pt-14">
        <View className="mx-4">
            <Text className="text-2xl text-neutral-600">Today's Tasks</Text>

        </View>
        <FlatList 
            data={todos}
            renderItem={({ item, index })=> {
                return (
                    <View className={`${item.completed ? 'bg-green-100' : 'bg-white'} w-11/12 rounded-md p-2 m-1 self-center flex-row items-center justify-between`}>
                        <View className="flex-row items-center">
                            <Checkbox
                                className="w-8 h-8 mr-2"
                                value={item.completed}
                                onValueChange={()=> handleCompletion(index)}
                                color={item.completed ? '#4630EB' : null}
                                />
                            <Text className="text-xl">{item.text}</Text>
                        </View>
                    
                        <Feather name="trash-2" size={24} color="darkred" onPress={()=> deleteHandler(item.id)} />
                    </View>
                )
            }}
        />
    </View>
  )
}

export default TodoList