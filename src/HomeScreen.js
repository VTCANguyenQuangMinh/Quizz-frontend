import * as React from 'react';
import { Text, View, Button } from 'react-native';




export default function HomeScreen({ navigation }) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Trang Chủ Quizz</Text>
        <Button
          title="Bắt đầu!"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Quizz', {
              QuestId: 1,
              ListQuizz:[],
            });
          }}
        />
      </View>
    );
}