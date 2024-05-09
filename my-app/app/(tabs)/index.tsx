import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'
import MenuItem from '../../components/MenuItem';

export default function HomeScreen() {
  return (
    <>
    {/* <View>
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
    </View> */}

<View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.5 }} />
      <View style={{ backgroundColor: "red", flex: 0.3 }} />
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
