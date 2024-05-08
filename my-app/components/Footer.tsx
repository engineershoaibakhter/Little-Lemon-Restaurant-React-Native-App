import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text style={styles.content}>All Right are reserved</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    content:{
        backgroundColor:"orange",
        textAlign:"center",
        marginBottom:10
    }
})