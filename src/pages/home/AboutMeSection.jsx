import React from 'react'
import { styled } from 'styled-components'
import Colors from '../../constants/colors/Colors'

const AboutMeSectionContainer = styled.div`
  background-color: ${Colors.dark_blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1080px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
`

function AboutMeSection() {
  return (
    <AboutMeSectionContainer>
      <ContentContainer>
        <h1>Sobre mim</h1>
        <p>Sou um desenvolvedor front-end com [X] anos de experiência, especializado em criar interfaces responsivas e interativas. Minha jornada começou com um amor pela web e cresceu para se tornar uma paixão por moldar a forma como as pessoas interagem com a tecnologia.</p>
      </ContentContainer>
    </AboutMeSectionContainer>
  )
}

export default AboutMeSection