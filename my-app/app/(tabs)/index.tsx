import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'



export default function HomeScreen() {
  return (
    <>
    <View style={styles.header}>
      <Header />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    marginTop:40,
alignItems:"center",

  }
});
