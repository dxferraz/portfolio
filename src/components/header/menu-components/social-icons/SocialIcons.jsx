import React from 'react'
import styled from 'styled-components'
import Icon from '../../../icon/Icon'

const SocialIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const IconContainer = styled.div`
    width: 30px;
`

const IconLink = styled.a`
    list-style: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`

function SocialIcons() {
    return (
        <SocialIconsContainer>
            <IconLink href="https://github.com/dxferraz" target="_blank"> <IconContainer><Icon name="Github" /></IconContainer> </IconLink>
            <IconLink href="https://www.linkedin.com/in/dxferraz/" target="_blank"> <IconContainer><Icon name="Linkedin" /></IconContainer> </IconLink>
            <IconLink href="https://www.behance.net/danielferraz2" target="_blank"> <IconContainer><Icon name="Behance" /></IconContainer> </IconLink>
        </SocialIconsContainer>
    )
}

export default SocialIcons