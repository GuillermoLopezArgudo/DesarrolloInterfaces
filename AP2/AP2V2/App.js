import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Calcular from './components/calcular/Calcular';

class App extends Component {
  render() {
    return (
      <>
        <View style={styles.general}>
          <Calcular />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 170,
    borderWidth: 1,
    padding: 10,
  },
  general: {
    margin: 5,
  },
});

export default App;
