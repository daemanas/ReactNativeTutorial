import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go To Search" onPress={() => navigation.navigate('Search')}  ></Button>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})