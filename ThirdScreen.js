import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Third Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Second Screen"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  text: {
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

export default ThirdScreen;
