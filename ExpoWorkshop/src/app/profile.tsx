import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Profile() {
  return (
    <View style={styles.container}>
          <Text>Profile</Text>
    
          <Pressable style={styles.button} onPress={() => router.back()}>
              <Text>Go Back</Text>
          </Pressable>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
    
      container:{
        flex:1,
        padding:15,
        // flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        marginTop:10,
        padding:8,
        borderWidth:1,
        borderColor:'black',
      },
    })