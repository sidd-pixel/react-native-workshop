import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeMessage({name}:any) {
  return (
    <View>
      <Text>Welcome {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})