import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../constants/Icons';
import { Colors, Fonts, } from '../constants/styles';

import * as Animatable from 'react-native-animatable';
import HomeScreen from '../screens/HomeScreen';
import AddExpensesScreen from '../screens/AddExpensesScreen';
import ChartScreen from '../screens/ChartScreen';



const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component:HomeScreen },
  { route: 'Add', label: 'Add', type: Icons.Ionicons, activeIcon: 'add-circle', inActiveIcon: 'add-outline',component: AddExpensesScreen },
  { route: 'Chart', label: 'Chart', type: Icons.Ionicons, activeIcon: 'bar-chart', inActiveIcon: 'bar-chart-outline', component: ChartScreen},
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0.5, opacity: 0 }, 1: { scale: 2, opacity: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 2, opacity: 1 }, 1: { scale: 2, opacity: 0 } });
    }
  }, [focused])

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.iconContainer}>
        { <View style={styles.circle} />} 
        </Animatable.View>
        
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primaryColor : Colors.lightPrimaryColor} />
       < View style={{alignItems:'center',justifyContent:'center',paddingVertical:2}}>
        <Text style={{ ...Fonts.blackColor12Regular,color :focused ? Colors.primaryColor : Colors.lightPrimaryColor}}>{item.label}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          position: 'absolute',
          padding:10,
          borderRadius: 20,
          flexDirection: 'row', 

        },
        
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component} 
            options={{
              tabBarLabel: ({ focused }) =>{return ( <View >
                
               <Text style={{ color: focused ? Colors.DARK_THREE : Colors.blackColor ,...Fonts.blackColor12Regular}}>hhh</Text>
               </View>
              );},
              tabBarButton: (props) => <TabButton {...props} item={item} />,

            }}
            
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative', 
  },
  circle: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: Colors.lightPrimaryColor, 
    width: 5, 
    height: 5, 
    borderRadius: 10, 
    top:-8,
    transform: [{ translateX: -2 }], 
  },
})