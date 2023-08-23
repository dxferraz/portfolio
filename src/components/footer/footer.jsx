import React from 'react'
import { styled } from 'styled-components'
import Colors from '../../constants/colors/Colors'

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: ${Colors.dark_green};
  color: white;
`

const FooterSection = styled.div`
  min-height: 200px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${Colors.light_blue};
`

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>Footer Esquerdo</FooterSection>
      <Divider/>
      <FooterSection>Footer Meio</FooterSection>
      <Divider/>
      <FooterSection>Footer Direito</FooterSection>
    </FooterContainer>
  )
}

export default Footer