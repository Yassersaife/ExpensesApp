import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, ImageBackground, Image, Dimensions, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../constants/styles';
import {  AntDesign,Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import Chart from '../components/Chart';


const { width } = Dimensions.get('window');


const ChartScreen = ({ navigation, route, screenProps }) => {

    
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
                     {sums()}
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
                
               <Text style={{...Fonts.primaryColor24SemiBold,textAlign:'center'}}>MontlyExpenses </Text>
               <Chart/>
            </View>
        )
    }

    function sums(){
        return(
       
<View style={{ flex: 1,paddingVertical:15, gap:20,flexDirection:  'Column',alignItems:'center'}}
                >
                      <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-between' ,gap:10, }}>

                      <View style={{ flex: 1,flexDirection:'row',alignItems:'center',justifyContent:'space-between' ,paddingHorizontal:15,borderWidth:1,borderColor:Colors.primary2,borderRadius:10,width:230,height:60, }}>
                        
                        <Text style={{ ...Fonts.primaryColor16SemiBold,textAlign:"flex-start" }}>
                        Total
                        </Text>
                        <View style={{backgroundColor:Colors.lightPrimaryColor,borderRadius:20}}>
                        <Text style={{ ...Fonts.primaryColor16Medium,color:Colors,textAlign:"flex-start",padding:5, }}>
                        1000$
                        </Text>
                        </View>
                      </View>

                      
                      <View style={{ flex: 1,flexDirection:'row',alignItems:'center',justifyContent:'space-between' ,paddingHorizontal:15,borderWidth:1,borderColor:Colors.primary2,borderRadius:10,width:230,height:60, }}>
                        
                        <Text style={{ ...Fonts.primaryColor16SemiBold,textAlign:"flex-start" }}>
                        max Amount
                        </Text>
                        <View style={{backgroundColor:Colors.lightPrimaryColor,borderRadius:20}}>
                        <Text style={{ ...Fonts.primaryColor16Medium,color:Colors,textAlign:"flex-start",padding:5, }}>
                        140$
                        </Text>
                        </View>
                      </View>
                      </View>
                      <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-between' ,gap:15, }}>

                      <View style={{ flex: 1,flexDirection:'row',alignItems:'center',justifyContent:'space-between' ,paddingHorizontal:15,borderWidth:1,borderColor:Colors.primary2,borderRadius:10,width:230,height:60, }}>
                        
                        <Text style={{ ...Fonts.primaryColor16SemiBold,textAlign:"flex-start" }}>
                        Average
                        </Text>
                        <View style={{backgroundColor:Colors.lightPrimaryColor,borderRadius:20}}>
                        <Text style={{ ...Fonts.primaryColor16Medium,color:Colors,textAlign:"flex-start",padding:5, }}>
                        80$
                        </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1,flexDirection:'row',alignItems:'center',justifyContent:'space-between' ,paddingHorizontal:15,borderWidth:1,borderColor:Colors.primary2,borderRadius:10,width:230,height:60, }}>
                        
                        <Text style={{ ...Fonts.primaryColor16SemiBold,textAlign:"flex-start" }}>
                        Min Amount
                        </Text>
                        <View style={{backgroundColor:Colors.lightPrimaryColor,borderRadius:20}}>
                        <Text style={{ ...Fonts.primaryColor16Medium,color:Colors,textAlign:"flex-start",padding:5, }}>
                        10$
                        </Text>
                        </View>
                      </View>
                      </View>

        </View>
        )
    }

    
   
   
    
    


}
export default ChartScreen;
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
   
     
})