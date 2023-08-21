import React from 'react'
import { styled } from 'styled-components'
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
    return (
        <Container>
            <MacOsContainer title="Vamos Trabalhar Juntos!" text="Se você está buscando um desenvolvedor front-end comprometido em transformar ideias em realidade digital, ficarei emocionado em fazer parte do seu projeto. Vamos colaborar para criar algo excepcional!" />
            <Button text="Entrar em contato"/>
        </Container>
    )
}

export default LevelsSection