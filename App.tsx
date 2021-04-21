import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      {/* StatusBar es la barra de navegacion (hora, bateria, wifi)  */}
      <StatusBar barStyle='light-content' backgroundColor={'black'} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;