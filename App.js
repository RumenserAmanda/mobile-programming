import React from 'react';
import { StyleSheet, View } from 'react-native';

import Gilbeh from './components/Gilbeh';

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function App() {
  return(
    <View>
      <Gilbeh />
    </View>
  );
}