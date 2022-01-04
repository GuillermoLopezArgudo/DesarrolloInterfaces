import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const estilo = 'upv';

const isAdmin = false;
var bool = true;

const nombre = () => {
  return <Text>Guillermo Lopez</Text>;
};

const datos = () => {
  if (estilo === 'upv') {
    return (
      <View style={styles.upv}>
        <Text>Introduce tus datos:</Text>
        <TextInput
          placeholder="Curso"
          placeholderTextColor="#EF7F1A"
          left={<TextInput.Icon name="comment" />}></TextInput>

        <TextInput
          placeholder="Módulo"
          placeholderTextColor="#EF7F1A"
          left={<TextInput.Icon name="comment" />}></TextInput>
      </View>
    );
  } else {
    return (
      <View style={styles.florida}>
        <Text>Introduce tus datos:</Text>
        <TextInput
          label="a"
          placeholder="Curso"
          placeholderTextColor="#ffffff"
          left={<TextInput.Icon name="comment" />}></TextInput>

        <TextInput
          placeholder="Módulo"
          placeholderTextColor="#ffffff"
          left={<TextInput.Icon name="comment" />}></TextInput>
      </View>
    );
  }
};

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

class App extends Component {
  render() {
    return (
      <View>
        {nombre()}
        {datos()}
        {isAdmin && (
          <Button
            icon="format-list-bulleted"
            mode="contained"
            onPress={() => Alert.alert('Pulsado')}>
            Informes
          </Button>
        )}
        {modulos2Dam.map((item, pos) => {
          return bool ? (
            <Text style={styles.true}>
              {pos + 1} {'\n'} {item.nombre} {'\n'} {item.profesor} {'\n'}{' '}
              {item.horas} {(bool = false)}
            </Text>
          ) : (
            <Text style={styles.false}>
              {pos + 1} {'\n'} {item.nombre} {'\n'} {item.profesor} {'\n'}{' '}
              {item.horas} {(bool = true)}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  false: {
    backgroundColor: '#F48FB1',
  },
  true: {
    backgroundColor: '#F8BBD0',
  },
});
export default App;
