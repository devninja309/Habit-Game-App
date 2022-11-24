import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./home"
import Detail from './register/detail';
import Timezone from './register/timezone';
import Goal from './register/goal';
import Wager from './register/wager';

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <View style={{height: "100%"}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="timezone" component={Timezone} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="goal" component={Goal} />
          <Stack.Screen name="wager" component={Wager} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
