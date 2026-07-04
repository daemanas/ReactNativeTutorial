import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/pages/Home'
const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%",
    padding:20,
    marginTop:30,
  }
})