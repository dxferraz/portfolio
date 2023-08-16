import React from "react";
import { styled } from "styled-components";
import Colors from "../../constants/colors/Colors.jsx";
import Logo from "./menu-components/logo/Logo.jsx";
import Menu from "./menu-components/menu/Menu.jsx";
import SocialIcons from "./menu-components/social-icons/SocialIcons.jsx";

const HeaderContainer = styled.header`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px 0px; 
    background-color: ${Colors.yellow};
    position: sticky;
    top: 0;
    z-index: 999;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <SocialIcons />
        </HeaderContainer>
    );
};

export default Header;