import {View, Text,Image, StyleSheet, Platform } from 'react-native';



export default function HomeScreen() {
  return (
    <>
    <View style={styles.heading}>
      <Text>Shoaib</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
heading:{
  justifyContent:"center",
  alignItems:"center",
  flex:8
}
});
