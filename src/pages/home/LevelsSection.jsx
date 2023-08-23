import React from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import MacOsContainer from '../../components/MacOsContainer/MacOsContainer'
import Button from '../../components/global/button/Button'

const Container = styled.div`
    color: white;
    width: 100%;
    height: auto;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`
function LevelsSection() {
    const {t} = useTranslation()
    return (
        <Container>
            <MacOsContainer title={t("letsWorkTogether")} text={t("ifYouAreLookingForADeveloper")} />
        </Container>
    )
}

export default LevelsSection