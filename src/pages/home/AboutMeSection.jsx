import React from 'react'
import { styled } from 'styled-components'
import Colors from '../../constants/colors/Colors'
import Skills from '../../components/skills/Skills'
import Title from '../../components/title/Title'
import MediumText from '../../components/text-medium/MediumText'

const AboutMeSectionContainer = styled.div`
  background-color: ${Colors.dark_blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
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
        <Title>Sobre mim</Title>
        <MediumText>HTML, CSS, JavaScript são a minha base, e estou sempre explorando as últimas tendências e frameworks, como [listar os frameworks que você domina]. Minha abordagem é manter um equilíbrio entre a estabilidade comprovada e a inovação.</MediumText>
        <br/>
        <Skills/>
      </ContentContainer>
    </AboutMeSectionContainer>
  )
}

export default AboutMeSection