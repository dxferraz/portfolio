import React from 'react'
import { styled } from 'styled-components'
import Colors from '../../constants/colors/Colors'
import Skills from '../../components/skills/Skills'
import Title from '../../components/title/Title'
import MediumText from '../../components/text-medium/MediumText'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation()
  return (
    <AboutMeSectionContainer>
      <ContentContainer>
        <Title>{t("aboutMe")}</Title>
        <MediumText>{t("aboutMeDescription")}</MediumText>
        <br/>
        <Skills/>
      </ContentContainer>
    </AboutMeSectionContainer>
  )
}

export default AboutMeSection