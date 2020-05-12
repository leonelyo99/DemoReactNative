import { createStackNavigator } from "react-navigation-stack";
import PaginaUnoScreen from '../screens/PaginaUno';

const PaginaUnoStacks = createStackNavigator({
    MyAccount:{
        screen: PaginaUnoScreen,
        navigationOptions: ()=>({
            title: "Pagina Uno"
        })
    }
})

export default PaginaUnoStacks;