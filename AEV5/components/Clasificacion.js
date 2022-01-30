/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Clasificacion extends Component {
  calcularIMC = peso => {
    if (peso === 0) {
    } else if (peso < 18.5) {
      return <Text style={styles.colorVerde}>Peso insuficiente</Text>;
    } else if (peso < 25) {
      return <Text style={styles.colorVerde}>Normopeso</Text>;
    } else if (peso < 27) {
      return <Text style={styles.colorNaranja}>Sobrepeso grado I</Text>;
    } else if (peso < 30) {
      return (
        <Text style={styles.colorNaranja}>
          Sobrepeso grado II (preobesidad)
        </Text>
      );
    } else if (peso < 35) {
      return <Text style={styles.colorNaranja}>Obesidad de tipo I</Text>;
    } else if (peso < 40) {
      return <Text style={styles.colorNaranja}>Obesidad de tipo II</Text>;
    } else if (peso < 50) {
      return (
        <Text style={styles.colorRojo}> Obesidad de tipo III (mórbida)</Text>
      );
    } else {
      return (
        <Text style={styles.colorRojo}>Obesidad de tipo IV (extrema)</Text>
      );
    }
  };

  render() {
    return (
      <View>
        <Text>Tu resultado es: {this.calcularIMC(this.props.valor)} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorVerde: {
    color: 'green',
  },
  colorNaranja: {
    color: 'orange',
  },
  colorRojo: {
    color: 'red',
  },
});
