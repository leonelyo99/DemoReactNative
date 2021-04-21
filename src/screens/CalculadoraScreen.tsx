import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="grey" action={limpiar} />
        <BotonCalculadora texto="+/-" color="grey" action={positivoNegativo} />
        <BotonCalculadora texto="del" color="grey" action={btnDelete} />
        <BotonCalculadora texto="/" color="orange" action={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="7" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="8" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="9" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="x" color="orange" action={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="4" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="5" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="6" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="-" color="orange" action={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalculadora texto="1" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="2" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="3" color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="+" color="orange" action={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalculadora
          texto="0"
          color="blackGrey"
          ancho
          action={armarNumero}
        />
        <BotonCalculadora texto="." color="blackGrey" action={armarNumero} />
        <BotonCalculadora texto="=" color="orange" action={calcular} />
      </View>
    </View>
  );
};
