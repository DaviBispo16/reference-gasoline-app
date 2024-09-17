import {createContext, ReactNode, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants  from "expo-constants";


interface MainContextType {
    pricePerAlcohol: string;
    pricePerGasoline: string;
    selectPricePerAlcohol: (price: string) => void;
    selectPricePerGasoline: (price: string) => void;
}

interface TaskProviderPros {
    children: ReactNode;
}

export const MainContext = createContext<MainContextType>({
    pricePerAlcohol: '', 
    pricePerGasoline: '', 
    selectPricePerAlcohol: () => '', 
    selectPricePerGasoline: () => ''});

function ContextProvider({children}: TaskProviderPros) {
    
    const [pricePerAlcohol, setPricePerAlcohol] = useState("");
    const [pricePerGasoline, setPricePerGasoline] = useState("");

    const keyPricePerAlcohol = Constants.expoConfig?.extra?.KEY_PRICE_PER_ALCOHOL;  
    const keyPricePerGasoline = Constants.expoConfig?.extra?.KEY_PRICE_PER_GASOLINE;

    function selectPricePerAlcohol(pricePerAlcohol: string) {
        setPricePerAlcohol(pricePerAlcohol);
    }

    function selectPricePerGasoline(pricePerGasoline: string) {
        setPricePerGasoline(pricePerGasoline);
    }

    const storeData = async (value:string, key: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getData = async() => {
            try {
                const valueAlcohol = await AsyncStorage.getItem(keyPricePerAlcohol);
                const valueGasoline = await AsyncStorage.getItem(keyPricePerGasoline);

                if (valueAlcohol !== null) {
                    selectPricePerAlcohol(valueAlcohol);
                }

                if (valueGasoline !== null) {
                    selectPricePerGasoline(valueGasoline);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);


    useEffect(() => {
        if (pricePerAlcohol !== "") {
            storeData(pricePerAlcohol, keyPricePerAlcohol);
        }
    }, [pricePerAlcohol]);

    useEffect(() => {
        if (pricePerGasoline !== "") {
            storeData(pricePerGasoline, keyPricePerGasoline);
        }
    }, [pricePerGasoline]);

    
    return (
        <MainContext.Provider value={{pricePerAlcohol, pricePerGasoline, selectPricePerAlcohol, selectPricePerGasoline}}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider;