import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LowStack = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[styles.ItemContainer,
            { backgroundColor: "#FFCCCC"}]}>
            <Text style={styles.ItemName}>{item.name}</Text>
            <Text style={styles.ItemName}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default LowStack

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  ItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10
  },
  ItemName: {
    fontSize: 17
  }
})