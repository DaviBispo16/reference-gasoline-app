import { useEffect, useState } from "react";
import { Container, AreaImg, MainTitle, AreaInput, Input, InputText, ButtomCalculate, 
    ButtomCalculateTitle, ModalAreaImg, ModalTitle, ModalArea, ModalSubtitle, ModalText, 
     ModalButtomTitle,
    ButtomDeactive} from "./styles";
import { Image, Modal} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Main() {

    const [pricePerAlcohol, setPricePerAlcohol] = useState<string>("");
    const [pricePerGasoline, setPricePerGasoline] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    function activateModal() {
        setVisible(true);
    }

    function deactivateModal() {
        setVisible(false);
    }

    function calculateOptionBest(pricePerAlcohol:string, pricePerGasoline:string) {
        const calculate = parseInt(pricePerAlcohol) / parseInt(pricePerGasoline);
        const result = calculate < 0.7 ? "Alcohol" : "Gasoline";
        return result;
    }

    return (
        <Container>
            <AreaImg>
                <Image source={require("/home/davibispo/Documents/reference-gasoline-app/assets/logo.png")
                }/>
                <MainTitle>Which option is best?</MainTitle>
            </AreaImg>
            
            <AreaInput>
                <InputText>Alcohol (Price per alcohol)</InputText>
                <Input placeholder="type something" keyboardType="numeric" value={pricePerAlcohol} onChangeText={setPricePerAlcohol}/>
                
                <InputText>Gasoline (Price per gasoline)</InputText>
                <Input placeholder="type something" keyboardType="numeric" value={pricePerGasoline} onChangeText={setPricePerGasoline}/>
            </AreaInput>

            <ButtomCalculate onPress={activateModal}>
                <ButtomCalculateTitle>Calculate</ButtomCalculateTitle>
            </ButtomCalculate>

            <Modal visible={visible} animationType="fade">
                <ModalArea>
                     <ModalAreaImg>
                        <Image source={require("/home/davibispo/Documents/reference-gasoline-app/assets/gas.png")}/>
                        <ModalTitle>It pays to use {calculateOptionBest(pricePerAlcohol, pricePerGasoline)}</ModalTitle>
                    </ModalAreaImg>
                        <ModalSubtitle>With the price:</ModalSubtitle>
                        <ModalText>Alcohol: $ {parseFloat(pricePerAlcohol).toFixed(2)}</ModalText>
                        <ModalText>Gasoline: $ {parseFloat(pricePerGasoline).toFixed(2)}</ModalText>
                        <ButtomDeactive onPress={deactivateModal}>
                                <ModalButtomTitle>Calculate again</ModalButtomTitle>
                        </ButtomDeactive>
                </ModalArea>
            </Modal>
        </Container>
    );
}