import React from 'react';
import {Appbar } from 'react-native-paper';
const AppBar = ({ navigation, back, route }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

export default AppBar;
