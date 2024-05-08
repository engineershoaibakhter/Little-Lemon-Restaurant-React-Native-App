import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'


export default function HomeScreen() {
  return (
    <>
    <View>
      <Header />
    </View>

    <View style={styles.footer}>
      <Footer />
    </View>
    </>
  );
}

const styles = StyleSheet.create({

  footer:{
   justifyContent:"flex-end",
   flex:1,
   backgroundColor:"green"
  }
});
