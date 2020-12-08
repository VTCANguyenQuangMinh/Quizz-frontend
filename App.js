import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './src/HomeScreen';

import QuizzsScreen from './src/QuizzScreen';

import ResultScreen from './src/ResultScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trang Chủ" component={HomeScreen} />
        <Stack.Screen name="Quizz" component={QuizzsScreen} />
        <Stack.Screen name="Kết Quả" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}