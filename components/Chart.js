import React from 'react'
import { View } from 'react-native-animatable';
import {BarChart} from "react-native-chart-kit";
import { Colors, Fonts, Sizes } from '../constants/styles';

const { width } = Dimensions.get('window');
import { StyleSheet, Image, Dimensions, FlatList, } from 'react-native'


const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const chartConfig1 = {
    backgroundGradientFrom: Colors.whiteColor,
    backgroundGradientTo: Colors.whiteColor,
    fillShadowGradientFrom: Colors.primaryColor,
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: Colors.primaryColor,
    fillShadowGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(63, 0, 208, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.35,
    decimalPlaces: 0,
   // propsForLabels: { ...Fonts.grayColor14SemiBold },
};

const Chart = () => {
  return (
    <View style={{alignItems:'center',paddingHorizontal:15,marginVertical:20, borderRadius: 16}} >
      <BarChart
  data={data}
  width={width}
  height={220}
  chartConfig={chartConfig1}

  verticalLabelRotation={30}
/>

    </View>
  )
}

export default Chart
const styles = StyleSheet.create({
  
})
