import React from 'react'
import { styled } from 'styled-components'
import Title from '../title/Title'
import MediumText from '../text-medium/MediumText'
import Button from '../global/button/Button'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    background-color: #EEEEEE;
    border: 2px #CCCCCC;
    border-radius: 8px;
    color: black;
    overflow: hidden;
`

const MacOsBar = styled.div`
    background-color: #DDDDDD;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 10px;
    gap: 10px;
`

const RedBall = styled.div`
    background-color: #FF5C5C;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

const YellowBall = styled.div`
    background-color: #FFBD44;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

const GreenBall = styled.div`
    background-color: #00CA4E;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 30px;
`

function MacOsContainer(props) {
    const { t } = useTranslation()
    return (
        <Container>
            <MacOsBar>
                <RedBall />
                <YellowBall />
                <GreenBall />
            </MacOsBar>
            <Content>
                <Title>{props.title}</Title>
                <MediumText style={{ textAlign: 'start' }}>{props.text}</MediumText>
                <br />
                <Button text={t("getInTouch")} />
            </Content>
        </Container>
    )
}

export default MacOsContainer