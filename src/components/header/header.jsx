import React from "react";
import { styled } from "styled-components";
import Logo from "./menu-components/logo/logo.jsx";
import Menu from "./menu-components/menu/menu.jsx";

const HeaderContainer = styled.header`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 30px 50px;
    background-color: ${Colors.yellow};
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    );
};

export default Header;