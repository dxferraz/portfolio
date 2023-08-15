import React from "react";
import { styled } from "styled-components";
import Colors from "../../constants/colors/Colors.jsx";
import Logo from "./menu-components/logo/Logo.jsx";
import Menu from "./menu-components/menu/Menu.jsx";

const HeaderContainer = styled.header`
    width: 100;
    height: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    background-color: ${Colors.yellow};
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <div>

            </div>
        </HeaderContainer>
    );
};

export default Header;