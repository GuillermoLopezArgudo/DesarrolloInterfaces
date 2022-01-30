/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Clasificacion from './Clasificacion';

export default class Calculadora extends Component {
  calcularIMC = (peso, altura) => {
    this.setState({
      resultado: Math.round((peso / Math.pow(altura, 2)) * 100) / 100,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultado: 0,
    };
  }

  handlePeso = number => {
    this.setState({peso: number});
  };

  handleAltura = number => {
    this.setState({altura: number});
  };
  render() {
    return (
      <View>
        <Text style={styles.titulo}>Calculadora IMC</Text>
        <View style={styles.seccionMedio}>
          <View>
            <View >
              <Text style={styles.texto1}>Datos</Text>
            </View>
            <Text style={styles.texto}>Peso</Text>
            <TextInput
              placeholder="Dime tu peso"
              keyboardType="numeric"
              editable
              onChangeText={this.handlePeso}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.texto}>Altura</Text>
            <TextInput
              placeholder="Dime tu altura"
              keyboardType="numeric"
              editable
              onChangeText={this.handleAltura}
            />
            <View style={styles.boton}>
              <Button
                title="Calcular IMG"
                onPress={() => {
                  this.calcularIMC(this.state.peso, this.state.altura);
                }}
              />
              <Text style={{marginTop:10}}>{this.state.resultado}</Text>
              <Clasificacion valor={this.state.resultado} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  seccionMedio: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    paddingBottom: 20,
  },
  titulo: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  boton: {
    marginTop: 20,
  },
  texto: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto1: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
