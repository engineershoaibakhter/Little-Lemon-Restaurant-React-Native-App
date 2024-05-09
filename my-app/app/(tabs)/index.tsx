import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'
import MenuItem from '../../components/MenuItem';

export default function HomeScreen() {
  return (
    <>
    <View>
      <Header />
    </View>
    <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
            <MenuItem />

      </View>
    
    <View style={styles.footer}>
      <Footer />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  // content:{
  //   paddingTop:30,
  //   backgroundColor:"green",
  //   flex:1
  // },
  footer:{
   justifyContent:"flex-end",
   flex:0.25,
   backgroundColor:"green"
  }
});
