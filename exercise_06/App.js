import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Friendlyyyyy from './components/Friendly';
import RyanM from './components/Ryan';
import Carlodinoooo from './components/Carlodino';

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [state, setState] = useState({
    Friendly: {
      name: 'Friendly',
      bio: 'I like to think that i could die at any given moment',
      age: 20,
    },
    Ryan: {
      name: 'Ryan Mamitoho',
      bio: 'My Favorite Color Is Blue and Black',
      age: 21,
      Hobby: 'Playing Game',
    },
    Carlodino: {
      name: 'Carlodino Joshua Setiay',
      hobby: 'Watching movies and playing games',
      gender: 'male',
      age: 21,
    },
  });

  return (
    <View>
      <Friendlyyyyy props={state.Friendly} />
      <RyanM props={state.Ryan} />
      <Carlodinoooo props={state.Carlodino} />
    </View>
  );
}