import React from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    border-radius: 10px;
    padding: 10px 20px;
    width: auto;
    &::before {
        content: "";
        position: absolute;
        top: -10px;
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
`

import USFlag from '../../assets/images/icons/flags/us'
import BrasilFlag from '../../assets/images/icons/flags/br'
import FranceFlag from '../../assets/images/icons/flags/fr'
import EspanhaFlag from '../../assets/images/icons/flags/es'
import { useTranslation } from 'react-i18next'

const languageOptions = [
    {
        name: 'English',
        value: 'en',
        flag: { USFlag },
    },
    {
        name: 'Português',
        value: 'pt-BR',
        flag: { BrasilFlag },
    },
    {
        name: 'Español',
        value: 'es',
        flag: { EspanhaFlag },
    },
    {
        name: 'Français',
        value: 'fr',
        flag: { FranceFlag },
    }
]

function Dropdown() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <LanguagesList>
                <li><span>{t("selectYourLanguage")}</span></li>
                <LanguageItem>
                    <span>English</span>
                    <USFlag />
                </LanguageItem>
                <LanguageItem>
                    <span>Português</span>
                    <BrasilFlag />
                </LanguageItem>
                <LanguageItem>
                    <span>Español</span>
                    <EspanhaFlag />
                </LanguageItem>
                <LanguageItem>
                    <span>Français</span>
                    <FranceFlag />
                </LanguageItem>
            </LanguagesList>
        </Wrapper>
    )
}

export default Dropdown