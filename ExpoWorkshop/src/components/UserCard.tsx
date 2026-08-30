import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UserCard({name,age}:any) {
  return (
    <View>
      <Text>Name:{name}</Text>
      <Text>Age:{age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})