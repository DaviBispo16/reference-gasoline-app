import { useEffect, useState, useContext} from "react";
import { Container, AreaImg, MainTitle, AreaInput, Input, InputText, ButtomCalculate, 
    ButtomCalculateTitle} from "./styles";
import { Alert, Image } from "react-native";
import { MainContext } from "../context/MainContext";



export default function Home({navigation}) {
   
    const {pricePerAlcohol, pricePerGasoline, selectPricePerAlcohol, selectPricePerGasoline} = useContext(MainContext);

    return (
        <Container>
            <AreaImg>
                <Image source={require("/home/davibispo/Documents/reference-gasoline-app/assets/logo.png")
                }/>
                <MainTitle>Which option is best?</MainTitle>
            </AreaImg>
            
            <AreaInput>
                <InputText>Alcohol (Price per alcohol)</InputText>
                <Input placeholder="type something" keyboardType="numeric" value={pricePerAlcohol} onChangeText={selectPricePerAlcohol}/>
                
                <InputText>Gasoline (Price per gasoline)</InputText>
                <Input placeholder="type something" keyboardType="numeric" value={pricePerGasoline} onChangeText={selectPricePerGasoline}/>
            </AreaInput>

            <ButtomCalculate onPress={() => navigation.navigate('BestFuelPrice')}>
                <ButtomCalculateTitle>Calculate</ButtomCalculateTitle>
            </ButtomCalculate>
        </Container>
    );
}