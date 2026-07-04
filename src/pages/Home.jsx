import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Home</Text>
            <Button title="Go To Profile" onPress={() => navigation.navigate('Profile')}  ></Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})