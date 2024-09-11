import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AppBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Text style={styles.title}>App Title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
