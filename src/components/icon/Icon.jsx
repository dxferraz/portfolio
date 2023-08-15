import React from 'react'

import HTML5Icon from '../../assets/images/icons/HTML5.svg'
import CSS3Icon from '../../assets/images/icons/CSS3.svg'
import JSIcon from '../../assets/images/icons/Javascript.svg'
import ReactIcon from '../../assets/images/icons/React.svg'
import { styled } from 'styled-components'

const IconImage = styled.img`
    width: 100px;
`

function Icon({ name }) {
    if (name == "HTML5") {
        return <IconImage src={HTML5Icon} />
    } else if (name == "CSS3") {
        return <IconImage src={CSS3Icon} />
    } else if (name == "JS") {
        return <IconImage src={JSIcon} />
    } else if (name == "React") {
        return <IconImage src={ReactIcon} />
    } else {
        return <div />
    }
}

export default Icon