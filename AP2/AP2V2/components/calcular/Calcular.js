/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

let bool = true;

export default class Calcular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letra: '',
      numero: 0,
    };
  }

  handleNumber = number => {
    this.setState({numero: number});
    if (this.state.numero.length === 7) {
      bool = false;
    } else {
      bool = true;
    }
  };
  render() {
    return (
      <View>
        <Text>DNI:</Text>
        <TextInput
          maxLength={8}
          placeholder="Escribe el DNI"
          keyboardType="numeric"
          editable
          onChangeText={this.handleNumber}
        />
        {bool ? null : (
          <Text>{'Letra Array ' + letras[this.state.numero % 23]}</Text>
        )}
      </View>
    );
  }
}
