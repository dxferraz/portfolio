import React from "react";
import { styled } from "styled-components";

const MenuContainer = styled.header`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px 50px;
    background-color: ${Colors.yellow};
`;

function Menu() {
    <MenuContainer>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </MenuContainer>
}

export default Menu;