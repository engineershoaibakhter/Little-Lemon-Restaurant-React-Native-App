import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'


export default function HomeScreen() {
  return (
    <>
    <View>
      <Header />
    </View>
    <View style={styles.content}>
      <Text style={{textAlign:"center",fontSize:30,color:"white"}}>Welcome to Lemon Restaurant</Text>
      <Text style={{textAlign:"center",color:"white",fontSize:20,marginVertical:60,backgroundColor:"red"}} numberOfLines={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni hic excepturi nam facere commodi officia est fugiat vitae nisi, nulla, optio dignissimos, incidunt architecto sapiente? Porro deleniti magni inventore!</Text>
    </View>
    <View style={styles.footer}>
      <Footer />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  content:{
    paddingTop:30,
    backgroundColor:"green",
    
  },
  footer:{
   justifyContent:"flex-end",
   flex:1,
   backgroundColor:"green"
  }
});
