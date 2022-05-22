import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Detail" component={Detail} />
        </stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
