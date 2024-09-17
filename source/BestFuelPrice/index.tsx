import { useContext } from "react";
import { Container, AreaImg, TitleImg, Subtitle, Text, ButtomDeactive, ButtomTitle} from "./styles"
import { Image } from "react-native";
import { MainContext } from "../context/MainContext";

export default function BestFuelPrice({navigation}) {
    

    const {pricePerAlcohol, pricePerGasoline} = useContext(MainContext);

    function calculateOptionBest() {
        const calculate = parseInt(pricePerAlcohol) / parseInt(pricePerGasoline);
        const result = calculate < 0.7 ? "Alcohol" : "Gasoline";
        return result;
    }
    
    return(
        <Container>
            <AreaImg>
                <Image source={require("/home/davibispo/Documents/reference-gasoline-app/assets/gas.png")}/>
                <TitleImg>It pays to use {calculateOptionBest()}</TitleImg>
            </AreaImg>
            <Subtitle>With the price:</Subtitle>
            <Text>Alcohol: $ {parseFloat(pricePerAlcohol).toFixed(2)}</Text>
            <Text>Gasoline: $ {parseFloat(pricePerGasoline).toFixed(2)}</Text>
            <ButtomDeactive onPress={() => navigation.navigate('Home')}>
                <ButtomTitle>Calculate again</ButtomTitle>
            </ButtomDeactive>
        </Container>
    )
}