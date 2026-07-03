
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    setResult(text);
  }

  return (
    <View style={styles.container} >

      <Text style={styles.text}>Enter your text here</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Enter Your Name'
        value={text}
        onChangeText={setText}
      />

      <Button title="Submit" onPress={handleSubmit}></Button>

      <Text style={styles.text}>Result :{result} </Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 50,
    padding: 20,
    backgroundColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

  },
  text: {
    fontSize: 30
  },
  textInput: {
    width: '100%',
    height: 50,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,

  },

})