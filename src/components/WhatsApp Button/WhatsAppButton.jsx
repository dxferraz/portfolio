import React from 'react'
import { styled } from 'styled-components'
import Icon from '../icon/Icon'

const Container = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366;
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`

const IconContainer = styled.div`
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

`

function WhatsAppButton() {
  return (
    <>
      <a href='https://api.whatsapp.com/send?phone=5561985464074&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20portf%C3%B3lio' target='_blank'><Container><IconContainer><Icon name='WhatsApp' /></IconContainer></Container></a>
    </>
  )
}

export default WhatsAppButton