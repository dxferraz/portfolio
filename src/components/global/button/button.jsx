import React from "react";
import { styled } from "styled-components";
import Colors from "../../../constants/colors/Colors";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.yellow};
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const ButtonText = styled.p`
    color: ${Colors.dark_blue};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

function Button(props) { 
    return (
        <ButtonContainer>
            <ButtonText>{props.text}</ButtonText>
        </ButtonContainer>
    )
}

export default Button;