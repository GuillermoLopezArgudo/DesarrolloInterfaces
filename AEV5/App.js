import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Calculadora from './components/Calculadora';

class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Calculadora />
        <Text style={styles.textoFinal}>Created for 2n DAM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  textoFinal: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 8,
  },
});

export default App;
