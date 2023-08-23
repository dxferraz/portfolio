import React, { useState } from 'react';
import { styled } from 'styled-components'
import TranslatorIcon from '../../assets/images/icons/TranslatorIcon'
import { useTranslation } from 'react-i18next'

import USFlag from '../../assets/images/icons/flags/us'
import BrasilFlag from '../../assets/images/icons/flags/br'
import FranceFlag from '../../assets/images/icons/flags/fr'
import EspanhaFlag from '../../assets/images/icons/flags/es'

const LanguageSelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const IconContainer = styled.div`
    width: 30px;
    filter: invert(11%) sepia(31%) saturate(4043%) hue-rotate(181deg) brightness(96%) contrast(98%);;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 85px;
    right: 10px;
    background-color: white;
    border-radius: 0px 0px 20px 20px;
    padding: 10px 20px;
    width: auto;
    &::before {
        content: "";
        position: absolute;
        top: 85px;
        right: 10px;
        width: 0;
        transform: rotate(45deg);
    }
    & ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: black;
        font-family: Montserrat;
        letter-spacing: 1px;
        line-height: 1.5;
        margin-bottom: 10px;
        cursor: pointer;
    }
`

const LanguagesList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const LanguageItem = styled.li`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
    }
`
const FlagContainer = styled.div`
    width:30px;
`

function LanguageSelector() {

    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <LanguageSelectorContainer>
            <a onClick={openDropdown}>
                <IconContainer>
                    <TranslatorIcon />
                </IconContainer>
            </a>
            {isOpen && (<Dropdown />)}
        </LanguageSelectorContainer>
    )
}

function Dropdown() {
    const { t, i18n } = useTranslation()
    return (
        <Wrapper>
            <LanguagesList>
                <li><span>{t("selectYourLanguage")}</span></li>
                <a key="en" onClick={() => {
                    i18n.changeLanguage("en")
                }}>
                    <LanguageItem>
                        <FlagContainer><USFlag /></FlagContainer>
                        <span>English</span>
                    </LanguageItem>
                </a>
                <a key="ptBR" onClick={() => {
                    i18n.changeLanguage("ptBR")
                }}>
                    <LanguageItem>
                        <FlagContainer><BrasilFlag /></FlagContainer>
                        <span>Português</span>
                    </LanguageItem>
                </a>
                <a key="es" onClick={() => {
                    i18n.changeLanguage("es")
                }}>
                    <LanguageItem>
                        <FlagContainer><EspanhaFlag /></FlagContainer>
                        <span>Español</span>
                    </LanguageItem>
                </a>
                <a key="fr" onClick={() => {
                    i18n.changeLanguage("fr")
                }}>
                    <LanguageItem>
                        <FlagContainer><FranceFlag /></FlagContainer>
                        <span>Français</span>
                    </LanguageItem>
                </a>
            </LanguagesList>
        </Wrapper>
    )
}

export default LanguageSelector