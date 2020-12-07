import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import API from './getAPIResult';


export default function ResultScreen({ route, navigation }) {
  const [userAnswers] = useState(route.params.ListQuizz)
  const [Result, setResult] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
      
      API().then((data)=>{
          setResult(data)
          setScore(2.5)
      })  
  })


  const ViewResult = Result.map((Answer) =>
      <View key = {Answer.questionId} style={styles.component}>
        <Text>Question {Answer.questionId}:</Text>
        <Text>Your answers: {answers(Answer.UsersAnswers)}</Text>
        <Text>Correct answers: {answers(Answer.CorrectAnswers)}</Text>
      </View>
    );

  function answers(listAnswer){
    const ViewResult = listAnswer.map((Answer) =>
      <Text key = {Answer.answerId}> {Answer.answer} , </Text>
    );
    return ViewResult
  }



  return (
    <View style={{ flex: 1 }}>

      <View >{ViewResult}</View>
      <Text style={styles.component}>Your Score: {score}</Text>

      <View style={styles.navBottom}>
        <View></View>
        <Button title="🏠" onPress={() => navigation.navigate('Home')} />
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  component:{
    margin:10
  },

  navBottom:{
    position:"absolute",
    bottom:0,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",

    backgroundColor:'darkblue',
    height: 50,
    alignItems: 'center',
    padding:10
  },
})