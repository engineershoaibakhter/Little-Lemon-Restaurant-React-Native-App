import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const MenuItem = () => {
    let menuItemToDisplay:String[]=['Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi eveniet eos molestias facilis vitae quis aspernatur temporibus, laboriosam rem nostrum tempora dolore ex illo dolores placeat esse nemo maiores Rem nisi ad, quibusdam eveniet non vero molestiae minima velit saepe voluptatibus natus harum asperiores aspernatur, incidunt sit id pariatur quia? Perspiciatis, et nobis? Pariatur quod labore suscipit asperiores rerum',
    'Velit pariatur ipsum soluta molestiae sequi? Tempora iste facere, sit ratione dolorum dicta tempore voluptate, harum qui eos quia alias ipsam doloribus possimus, placeat aliquid perferendis assumenda amet odit corrupti',
    'Ad nostrum non doloribus autem similique consequatur pariatur, dicta quos ut exercitationem, ipsum molestiae, iusto ratione consequuntur dolorum dolor incidunt excepturi? Consectetur fugit exercitationem tempore rerum blanditiis sint cumque eos?',
    'Dolores, vitae libero culpa, eligendi a animi sunt minima reiciendis quidem nobis rerum quo beatae sint similique in provident enim? Recusandae voluptatibus, quod quibusdam temporibus odit quas dolorem eius quam!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi eveniet eos molestias facilis vitae quis aspernatur temporibus, laboriosam rem nostrum tempora dolore ex illo dolores placeat esse nemo maiores',
    'Rem nisi ad, quibusdam eveniet non vero molestiae minima velit saepe voluptatibus natus harum asperiores aspernatur, incidunt sit id pariatur quia? Perspiciatis, et nobis? Pariatur quod labore suscipit asperiores rerum',
    'Velit pariatur ipsum soluta molestiae sequi? Tempora iste facere, sit ratione dolorum dicta tempore voluptate, harum qui eos quia alias ipsam doloribus possimus, placeat aliquid perferendis assumenda amet odit corrupti',
    'Ad nostrum non doloribus autem similique consequatur pariatur, dicta quos ut exercitationem, ipsum molestiae, iusto ratione consequuntur dolorum dolor incidunt excepturi? Consectetur fugit exercitationem tempore rerum blanditiis sint cumque eos?',
    'Dolores, vitae libero culpa, eligendi a animi sunt minima reiciendis quidem nobis rerum quo beatae sint similique in provident enim? Recusandae voluptatibus, quod quibusdam temporibus odit quas dolorem eius quam!'];
  return (
    <View style={{flex:0.75}}>
      <ScrollView indicatorStyle={'black'} showsHorizontalScrollIndicator={true} style={{backgroundColor:"grey",padding:40,flex:1}} >
        
            {menuItemToDisplay.map((item,index)=>{
                return (
                    <Text style={{color:"white",marginBottom:20}} key={index}> {item} </Text>
                )
            })}
        
      </ScrollView>
    </View>
//     <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
//     <Text
//       style={{
//         padding: 40,
//         fontSize: 50,
//         color: '#EDEFEE',
//         textAlign: 'center',
//       }}>
//       Welcome to Little Lemon
//     </Text>
//     <Text
//       style={{
//         fontSize: 38,
//         padding: 20,
//         marginVertical: 8,
//         color: '#EDEFEE',
//         textAlign: 'center',
//       }}>
//       Little Lemon is a charming neighborhood bistro that serves simple food
//       and classic cocktails in a lively but casual environment. We would love
//       to hear more about your experience with us!
//     </Text>
//   </ScrollView>
  )
}

export default MenuItem

const styles = StyleSheet.create({})