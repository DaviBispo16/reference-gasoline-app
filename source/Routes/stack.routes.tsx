import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import BestFuelPrice from '../BestFuelPrice';

const Stack = createNativeStackNavigator();


export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="BestFuelPrice" component={BestFuelPrice}/>
        </Stack.Navigator>
    );
}