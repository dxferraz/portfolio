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
`

function AboutMeSection() {
  return (
    <AboutMeSectionContainer>
      <h1>About Me</h1>
    </AboutMeSectionContainer>
  )
}

export default AboutMeSection