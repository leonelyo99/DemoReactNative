import React, { Component, useState } from "react";
import { Text } from "react-native-elements";
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

export default function PaginaUno(props) {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <View style={styles.viewContainer}>
        <Text h4 style={styles.text}>
          Pagina de prueba para mi portafolio
        </Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Buenas soy un modal en React Native</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#00a680" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cerra modal del portafolio</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Mostrar Modal</Text>
      </TouchableHighlight>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width:"70%",
    marginLeft: "15%",
    marginRight: "15%",
    backgroundColor: "#00a680",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
