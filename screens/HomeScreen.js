import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, ImageBackground, Image, Dimensions, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../constants/styles';
import {  AntDesign,Ionicons,FontAwesome5 } from '@expo/vector-icons';
import SearchField from '../components/SearchField';

const { width } = Dimensions.get('window');
const MYlist = [
    {
        id: '1',
        name: "Inside Governate",
        total: 120,


    },
    {
        id: '2',
       name: "Inside Governate",
        total: 120,
       
    },
    {
        id: '3',
        name: "Inside Governate",
        total: 120,
        
    },
];

const HomeScreen = ({ navigation, route, screenProps }) => {

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar  backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1,backgroundColor: Colors.whiteColor }}>
            {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 10.0  ,paddingHorizontal:25,
                    }}
                >
                    {Title()}
                    {MySearch()}
                    {listinfo()}
                    {AddExpenses()}
                  </ScrollView>
            </View>
        </SafeAreaView>
    )
    
    
    function header() {
        return (
            <View style={{ ...styles.headerWrapStyle, flexDirection: 'row-reverse',borderBottomWidth:0.3,borderRadius:20,borderBlockColor:Colors.primaryColor,paddingVertical:10}}>
                
                <TouchableOpacity
                    activeOpacity={0.99}
                    style={{ flexDirection:'row' , alignItems: 'center' }}
                >
                  <Ionicons name="person-circle-outline" size={30} color={Colors.primaryColor} />                   
                    </TouchableOpacity>
            </View>
        )
    }
    function  Title() {
        return (
            <View style={{ ...styles.TitleWrapStyle, flexDirection: 'center' }}>
                
               <Text style={{...Fonts.primaryColor48SemiBold,textAlign:'center'}}>Expenses List</Text>
            </View>
        )
    }
   
    function  MySearch() {
        return (
            <View style={{  alignItems: 'flex-start',   }}>
                <SearchField/>
            </View>
        )
    }
    function listinfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.99}
                style={{ ...styles.localInfoWrapStyle,  }}
            >
                <View style={{ flex: 1,paddingLeft:30,paddingRight:9,paddingVertical:15, flexDirection:  'row',alignItems:'center', justifyContent:'space-between'}}
                >

                      <View style={{ flex: 1,flexDirection:'column',alignItems:'flex-start',gap:10  }}>
                        
                        <Text style={{ ...Fonts.primaryColor16SemiBold,textAlign:"flex-start" }}>
                            {item.name}
                        </Text>
                        <View style={{padding:10,backgroundColor:Colors.lightPrimaryColor,borderRadius:20}}>
                        <Text style={{ ...Fonts.primaryColor16Medium,color:Colors,textAlign:"flex-start" }}>
                            {item.total}$
                        </Text>
                        </View>
                      </View>


                    <View style={{flex:1 ,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',paddingTop:20,gap:15,paddingHorizontal:10}}>
                    <TouchableOpacity
                    activeOpacity={0.80}
                    onPress={() => navigation.push('Notification')}
                    style={{ flexDirection:'row' , alignItems: 'center', }}
                >
<AntDesign name="delete" size={22} color={Colors.redColor }/>                   
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.80}
                    onPress={() => navigation.push('Notification')}
                    style={{ flexDirection:'row' , alignItems: 'center',}}
                >
<FontAwesome5 name="edit" size={22} color={Colors.blackColor} style={{}} />                   
                    </TouchableOpacity>
                    </View>
                    
                    

                   
                </View>
                
                
            </TouchableOpacity >
        )
        return (
            <FlatList
                data={MYlist}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{marginTop:40,marginBottom:10 ,alignItems:'center'}}
            />
            
        )
    }
    function AddExpenses()  {
        return (
            <View style={{   alignItems: 'flex-end',justifyContent:'center'}}>

          <View style={{ flexDirection: 'row',  alignItems: 'center',paddingHorizontal:10}}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            </View>

            <View style={{ flex:1,flexDirection: 'column',  
            alignItems: 'flex-end',
            paddingHorizontal: Sizes.fixPadding ,
            marginVertical:Sizes.fixPadding*3.0,
        }}>
            <TouchableOpacity 
            style={{  width: 70,
            height: 70,
paddingHorizontal:20,
            paddingVertical: Sizes.fixPadding  ,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: Colors.primary2,
            borderRadius: Sizes.fixPadding * 4.5,
            shadowColor: Colors.DEFAULT_BLACK,
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.15, 
        shadowRadius: 3.84, 

            }}>
          <Ionicons name="add-outline" size={32} color={Colors.whiteColor} />
            </TouchableOpacity>
            </View>
          </View>
        );
      };

   
    


}
export default HomeScreen;
const styles = StyleSheet.create({
    headerWrapStyle: {
        marginTop: Sizes.fixPadding *2.0,
        paddingHorizontal: Sizes.fixPadding * 2.5,
        alignItems: 'center',
    },
    TitleWrapStyle: {
        paddingVertical: Sizes.fixPadding *3.5,
        alignItems: 'center',
    },
    localInfoWrapStyle: {
        flexDirection: 'colums',
        marginBottom:15,
        width: 339,
        height: 108,
        justifyContent: 'Center',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 1.5,
        borderRadius: Sizes.fixPadding * 2.0,
        shadowColor: Colors.DEFAULT_BLACK,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.15,
    shadowRadius: 3.84, 



      },
      line: {
        flex: 1,
        height: 2,
        backgroundColor: Colors.DARK_sex,
        marginHorizontal: 0, 
       
      },
     
})