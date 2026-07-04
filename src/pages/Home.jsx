import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItem from './AllItem'
import LowStack from './LowStack'
import AddItem from './AddItem'


const Home = () => {
    const [view, setview] = useState(0)
    const [data, setData] = useState([
        { id: 1, name: "Item 1", stock: 10 },
        { id: 2, name: "Item 2", stock: 5 },
        { id: 3, name: "Item 3", stock: 0 },
        { id: 4, name: "Item 4", stock: 20 },
        { id: 5, name: "Item 5", stock: 15 },
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.ButtonContainer}>
                <Pressable
                    style={[styles.Button, view === 0 ? { backgroundColor: "#333" } : {}]} onPress={() => setview(0)}>
                    <Text style={[styles.ButtonText, view === 0 ? { color: "#fff" } : {}]}>All Item</Text>
                </Pressable>
                <Pressable style={[styles.Button, view === 1 ? { backgroundColor: "#333", color: "#fff" } : {}]} onPress={() => setview(1)}>
                    <Text style={[styles.ButtonText, view === 1 ? { color: "#fff" } : {}]}>Low stock</Text>
                </Pressable>
                <Pressable style={[styles.Button, view === 2 ? { backgroundColor: "#333", color: "#fff" } : {}]} onPress={() => setview(2)}>
                    <Text style={[styles.ButtonText, view === 2 ? { color: "#fff" } : {}]}>Add Item</Text>
                </Pressable>

            </View>

            {view === 0 && <AllItem data={data} />}
            {view === 1 && <LowStack data={data.filter((item) => item.stock < 15)} />}
            {view === 2 && <AddItem data={data} setData={setData} />}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333"
    },
    ButtonContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    Button: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 20,
    },
    ButtonText: {
        fontSize: 13,
        color: "#333"
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