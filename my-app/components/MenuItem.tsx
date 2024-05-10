import { StyleSheet, Text, View,FlatList, SectionList } from 'react-native'
import React from 'react'

interface MenuItem{
  title:string;
  data:string[];
}


const Item=({name}:{name:string})=>{
  return (
    <View style={{margin:15,marginHorizontal:30}}>
      {/* <Text style={{fontSize:25,color:"#F4CE14"}}>{name}</Text> */}

      <Text style={{fontSize:25,color:"#F4CE14",width:240}}>{name}</Text>
      
      
    </View>
  )
}
const SeparatorComponent=()=> <View style={{borderBottomColor:"white",borderBottomWidth:1}}/>
const ItemHeader=()=> <View><Text style={{color:"white"}}>Items</Text></View>
const ItemFooter=()=> <View><Text style={{color:"white"}}>Items Finish</Text></View>



const MenuItem = () => {

  const menuItemsToDisplay:MenuItem[] = [
    {
      title: 'Appetizers',
      data: [
        'shoaib',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];
  

  const renderItem=({item}:{item:string})=>{
    return(
    <Item name={item}/>
    )
  }
const renderSectionHeader=({section:{title}}:{section:MenuItem})=> <Text>{title}</Text>


  return (
    <View>
      <SectionList
      keyExtractor={(item,index)=>"item"+index}
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      SectionSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={ItemHeader}
        ListFooterComponent={ItemFooter}
      ></SectionList>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})

