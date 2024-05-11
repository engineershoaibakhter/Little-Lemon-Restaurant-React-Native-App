import {View, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'
import MenuItem from '../../components/MenuItem';
import FeedbackForm from '../../components/FeedbackForm';

export default function HomeScreen() {
  return (
    <>
    <View>
      <Header />
    </View>
    {/* <View
        style={{
          flex: 1,
          backgroundColor: '#333333',
        }}>
            <MenuItem />

      </View> */}
    <FeedbackForm />
    
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
   flex:0,
   backgroundColor:"#333333"
  }
});
