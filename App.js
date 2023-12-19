import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

import BottomTabs from './components/BottomTabs';


LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App = () => {
  return (
    <Route />
  );
}