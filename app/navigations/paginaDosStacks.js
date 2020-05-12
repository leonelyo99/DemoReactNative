import { createStackNavigator } from "react-navigation-stack";
import PaginaDosScreen from '../screens/PaginaDos';

const PaginaDosStacks = createStackNavigator({
    MyAccount:{
        screen: PaginaDosScreen,
        navigationOptions: ()=>({
            title: "Pagina Dos"
        })
    }
})

export default PaginaDosStacks;