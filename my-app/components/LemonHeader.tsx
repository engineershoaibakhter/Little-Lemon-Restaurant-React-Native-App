import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LemonHeader = () => {
  return (
    <>
    <View style={styles.header}>
      <Text style={styles.heading}>Little Lemon Restaurant</Text>
    </View>
    </>
  )
}

export default LemonHeader

const styles = StyleSheet.create({
  header:{
alignItems:"center",
paddingTop:35,
paddingBottom:20,
backgroundColor:"orange"
  },
  heading:{
fontSize:25,
fontWeight:"500"
  }
})