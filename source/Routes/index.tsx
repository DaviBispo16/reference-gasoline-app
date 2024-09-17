import StackRoutes from "./stack.routes";
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from "../context/MainContext";

export default function Routes() {
    return(
    <ContextProvider>
        <NavigationContainer>
         <StackRoutes/>
        </NavigationContainer>
    </ContextProvider>
    )
}