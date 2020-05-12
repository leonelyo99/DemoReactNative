import React from "react";
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PaginaUnoStacks from "./paginaUnoStacks";
import PaginaDosStacks from "./paginaDosStacks";
import PaginaTresStacks from "./paginaTresStacks";

//botones levels y a donde se durigen 
const NavigationStacks = createBottomTabNavigator({
  PaginaUno: {
    screen: PaginaUnoStacks,
    navigationOptions: () => ({
      tabBarLabel: "Pagina 1",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 
          name="dice-one"
          size={22}
          color={tintColor}
        />
      )
    })
  },
  PaginaDos: {
    screen: PaginaDosStacks,
    navigationOptions: () => ({
      tabBarLabel: "Pagina 2",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 
          name="dice-two"
          size={22}
          color={tintColor}
        />
      )
    })
  },
  PaginaTres: {
    screen: PaginaTresStacks,
    navigationOptions: () => ({
      tabBarLabel: "Pagina 3",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 
          name="dice-three"
          size={22}
          color={tintColor}
        />
      )
    })
  }
},
{
  initialRouteName: "PaginaUno",
  order:[ "PaginaUno","PaginaDos","PaginaTres" ],
  tabBarOptions: {
    inactiveTintColor: "#646464",
    activeTintColor: "#00a680"
  }
});

export default createAppContainer(NavigationStacks);
