import styled from "styled-components/native";

export const Container = styled.View`
     flex: 100%;
     background-color: #262626;
`

export const AreaImg = styled.View`
    margin: 50px;
    align-items: center;
    gap: 15px
`

export const MainTitle = styled.Text`
    font-size: 22px;
    font-weight: 500;
    color: #FFF;
`

export const AreaInput = styled.View`
    margin: 10px;
    gap: 5px;
    align-items: left;
`

export const Input = styled.TextInput`
    width: 100%;
    padding: 8px;
    border-width: 2px;
    border-radius: 4px;
`

export const InputText = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: #FFF
    `

export const AreaButtom = styled.View`
    background-color: #b91c1c;
    margin: 10px;
    height: 30px;
    border-radius: 4px;
`

export const ButtomCalculate = styled.TouchableOpacity`
    background-color: #b91c1c;
    margin: 10px;
    height: 45px;
    border-radius: 3px;
    justify-content: center;
`

export const ButtomCalculateTitle = styled.Text`
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: #FFF
`

export const ModalArea = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 32px;
    gap: 5px;
    background-color: #262626;
`

export const ModalAreaImg = styled.View`
    align-items: center;
    margin: 20px;
    gap: 10px
`

export const ModalTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
    color: #22c55e
`

export const ModalSubtitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #FFF
`

export const ModalText = styled.Text`
    font-size: 17px;
    font-weight: 500;
    color: #FFF
`

export const ButtomDeactive = styled.TouchableOpacity`
    background-color: #262626;
    width: 30%;
    border-radius: 4px;
    border: 1px;
    padding: 10px;
    border-color: #b91c1c;
    margin-top: 40px;

`
export const ModalButtomTitle = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #b91c1c
`