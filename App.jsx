
import {  SafeAreaView, Text , StyleSheet, Image,useColorScheme, Button, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React from 'react';
function App() {
  // const theme = useColorScheme()
  // const isTheme = theme === 'dark';
  // const backgroundColor = isTheme ? 'black' : 'red';
  // const textColor = isTheme ? 'white' : 'black';
  return (

    // <ScrollView style={[styles.container, { backgroundColor : backgroundColor }]}>
    <ScrollView
      ContentContainerStyle={{ gap: 10 }}
     style={styles.container}>
      <Text style={styles.text }>Hello World </Text>
      <Text style={styles.text}>i am daem anas </Text>
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <Image style={styles.image} source={{uri: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg'}} />
      <TouchableOpacity style={{backgroundColor: 'green', padding: 10, borderRadius: 5}} onPress={() =>Alert.alert("button clicked")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </ScrollView>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20, 
    backgroundColor: 'red', 
    margin: 30, 
    // alignItems: "center", 
    // justifyContent: "center",
    // gap: 10,
  },
  image: {
    height: 200,
    width: 300
  },
  text: {
    fontSize: 20,
  }
})