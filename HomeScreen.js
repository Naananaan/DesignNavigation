import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to homepage</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Second Screen" 
        onPress={() => navigation.navigate('Second')} />
        <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate('Third')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
    color: 'green'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 150, 
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    width: '50%', 
  },
});
