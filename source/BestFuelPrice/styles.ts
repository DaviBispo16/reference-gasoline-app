import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 32px;
    gap: 5px;
    background-color: #262626;
` 

export const AreaImg = styled.View`
    align-items: center;
    margin: 20px;
    gap: 10px
`

export const TitleImg = styled.Text`
    font-size: 25px;
    font-weight: 700;
    color: #22c55e
`

export const Subtitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #FFF
`

export const Text = styled.Text`
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
export const ButtomTitle = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #b91c1c
`