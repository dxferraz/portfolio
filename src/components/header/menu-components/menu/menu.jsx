import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../../../constants/colors/Colors";

const MenuContainer = styled.div`
    width: 50%;
    display: flex;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const MenuItem = styled.a`
    list-style: none;
    color: ${Colors.dark_blue};
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all ease-in-out;  
    &:hover {
        color: ${Colors.light_blue};
    }
`;

function Menu() {
    return (
        <MenuContainer>
            <MenuList>
                <Link to="/"><MenuItem>Início</MenuItem></Link>
                <Link to="/habilidades"><MenuItem>Habilidades</MenuItem></Link>
                <Link to="/projetos"><MenuItem>Projetos</MenuItem></Link>
                <Link to="/contato"><MenuItem>Contato</MenuItem></Link>
            </MenuList>
        </MenuContainer>
    );
}

export default Menu;