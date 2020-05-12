import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

export default function PaginaTres(props) {
  return (
    <View style={styles.viewContainer}>
      <Text h4 style={styles.text}>
        Esta fue una pequeña demo de react native espero, sea lo que buscabas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    width: "90%",
    height: 100,
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
  },
  text: {
    textAlign: "center",
  },
});
