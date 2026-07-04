import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const AddItem = ({ data, setData }) => {
    const [itemName, setItemName] = useState('');
    const [itemStock, setItemStock] = useState('');
    const [isEdit, setEditItem] = useState(false);
    
    const [editItemId, setEditItemId] = useState(null);

    const AddItemHandelar = () => {
        const newItem = {
            id: Date.now(),
            name: itemName,
            stock: itemStock
        }

        setData([
            ...data, newItem
        ])
        setItemName('')
        setItemStock('')
        setEditItem(false)
    }

    const deletItemHandel = (id) => {
        setData(data.filter((item) => item.id != id))

    }

    const editItemHandel = (item) => {
        setEditItem(true)
        setItemName(item.name)
        setEditItemId(item.id)
    }

    const updateItemHandel =() =>{
        setData(data.map((item) =>(
            item.id === editItemId ? {...item, name:itemName, stock:itemStock } : item
        )))
        
        setItemName('')
        setItemStock('')

    }
    return (
        <View style={styles.container}>
            <View style={styles.InputContainer}>
                <Text style={styles.title}>Item Name</Text>
                <TextInput
                    style={styles.TextInputContainer}
                    placeholder='Enter Item Name'
                    value={itemName}
                    onChangeText={(item) => setItemName(item)}
                />
                <Text style={styles.title}>Item Quentity</Text>
                <TextInput
                    style={styles.TextInputContainer}
                    placeholder='Enter Item Name'
                    value={itemStock}
                    onChangeText={(item) => setItemStock(item)}
                />
            </View>
            <Pressable style={styles.Button} onPress={() => isEdit ? updateItemHandel() : AddItemHandelar()}  >
                <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'Add Item'}</Text>
            </Pressable>

            <View style={{ marginTop: 10 }}>
                <View style={styles.headingContainer}>
                    <Text style={styles.titleC}>ALL ITEM IN STOCKS</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={[styles.ItemContainer,
                            { backgroundColor: item.stock < 15 ? "#FFCCCC" : "#D7F6BF" }]}>
                            <Text style={styles.ItemName}>{item.name}</Text>
                            <Text style={styles.ItemName}>{item.stock}</Text>

                            <View style={{ flexDirection: "row", gap: 15 }}>
                                <Pressable onPress={() => editItemHandel(item)}>
                                    <Text style={{ fontSize: 17 }}>Edit</Text>
                                </Pressable>
                                <Pressable onPress={() => deletItemHandel(item.id)}>
                                    <Text style={{ fontSize: 17 }}>Del</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ gap: 10 }}
                />
            </View>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 10,
        gap: 10
    },
    InputContainer: {
        gap: 10
    },
    title: {
        fontSize: 17,
        paddingHorizontal: 5,
    },
    TextInputContainer: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10
    },
    Button: {
        marginTop: 10,
        backgroundColor: "#CABFEEFF",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",


    },
    btnText: {
        fontSize: 19,
        color: "white"
    },

    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    titleC: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        // marginVertical:"10",
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