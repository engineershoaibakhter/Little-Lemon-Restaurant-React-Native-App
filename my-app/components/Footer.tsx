import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text style={styles.content}>All Rights are reserved 2024</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    content:{
        backgroundColor:"#EE9972",
        textAlign:"center",
        marginBottom:10,
        fontSize:20,
    }
})