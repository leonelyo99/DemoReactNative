import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

interface Props {
  texto: string;
  color: 'grey' | 'blackGrey' | 'orange';
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({texto, color, ancho = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={()=>action(texto)}>
      <View
        style={[
          {
            ...styles.boton,
            width: ancho ? 180 : 80,
          },
          color === 'grey'
            ? styles.colorGrey
            : color === 'blackGrey'
            ? styles.colorBlackGrey
            : styles.colorOrange,
        ]}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === 'grey' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
  colorGrey: {
    backgroundColor: '#9B9B9B',
  },
  colorBlackGrey: {
    backgroundColor: '#2D2D2D',
  },
  colorOrange: {
    backgroundColor: '#FF9427',
  },
});
