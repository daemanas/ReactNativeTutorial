
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View } from 'react-native';
import React from 'react';
function App() {

  const students = [
    { id: '1', name: 'Daem', email: 'daem@example.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '2', name: 'Rahul', email: 'rahul@example.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '3', name: 'Amit', email: 'amit@example.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '4', name: 'Sakib', email: 'sakib@example.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '5', name: 'Rohit', email: 'rohit@example.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '6', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '7', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '8', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '9', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '10', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '11', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '12', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '13', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '14', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '15', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '16', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '17', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDR aH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '18', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '19', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '20', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '21', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '22', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '23', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '24', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '25', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '26', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '27', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '28', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '29', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },

    { id: '30', name: 'Rohit', email: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3' },
  ];


  return (
    <View style={styles.container} >


      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={{ height: 40, width: 40, borderRadius: 50, padding: 10, marginTop: 10 }}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3gv2YE4e9rr59PDRaH2rUQ7JlNb3qosw2a0O5aj2f9H4dEq3" }} />
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
        columnWrapperStyle={{ gap: 10 }}
      />


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
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  }
})