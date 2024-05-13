import {View,useColorScheme,useWindowDimensions, Text,Image, StyleSheet, Platform } from 'react-native';
import Header from '../../components/LemonHeader'
import Footer from '../../components/Footer'
import MenuItem from '../../components/MenuItem';
import FeedbackForm from '../../components/FeedbackForm';

export default function HomeScreen() {
  const colorScheme=useColorScheme();
  // const {height,widht,fontScale}=useWindowDimensions();
  const window=useWindowDimensions();

  return (
    <>
    <View >
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
    
    <View style={[styles.footer, colorScheme === 'light'? {backgroundColor:"yellow"}:{backgroundColor:"black"}]}>
      <Footer />
      <Text>Windows Dimension</Text>
      <Text>Height: {window.height}</Text>
      <Text>Height: {window.width}</Text>
      <Text>Height: {window.fontScale}</Text>
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
