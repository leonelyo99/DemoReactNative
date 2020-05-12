import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Button } from 'react-native-elements';

export default function PaginaDos(props) {

  const { navigation } = props;
  
  return (
    <View>
      <Image
        source={require("../../assets/img/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ir a la pagina Uno"
          onPress={() => navigation.navigate("PaginaUno")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: "25%",
    marginRight: "25%",
    width: "50%",
    marginTop: 20,
  },
  viewBtn: {
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});
