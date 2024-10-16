import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import AppBar from './AppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: ({ back }) => (
          <AppBar navigation={navigation} back={back} route={route} />
        ),
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="Third" component={ThirdScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
