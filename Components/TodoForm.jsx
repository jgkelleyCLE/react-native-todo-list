import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

const TodoForm = ({ todos, setTodos }) => {

    const [input, setInput] = useState("")

    const submitHandler = () => {
        setTodos([...todos, { id: uuid.v4(), text: input, completed: false }])
        setInput('')
        console.log(todos)
    }

  return (
    <KeyboardAvoidingView 
    keyboardVerticalOffset
    enabled
        className="absolute left-0 right-0 bottom-0 h-24 bg-gray-600 w-full pt-4"
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
    >
    <View >
      <View className="flex-row items-center justify-center">
        <TextInput
            className="w-3/4 bg-white p-2 text-xl rounded-md m-1 mr-2"
            placeholder='Task'
            value={input}
            onChangeText={setInput}
        />
        <TouchableOpacity className="bg-white rounded-full p-2" onPress={()=> submitHandler()}>
        <Feather name="plus" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default TodoForm