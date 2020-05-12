import { createStackNavigator } from "react-navigation-stack";
import PaginaTresScreen from '../screens/PaginaTres';

const PaginaTresStacks = createStackNavigator({
    MyAccount:{
        screen: PaginaTresScreen,
        navigationOptions: ()=>({
            title: "Pagina Tres"
        })
    }
})

export default PaginaTresStacks;