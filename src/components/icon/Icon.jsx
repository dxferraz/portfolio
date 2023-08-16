import React from 'react'

import CSS3Icon from '../../assets/images/icons/CSS3Icon'
import DartIcon from '../../assets/images/icons/DartIcon'
import FigmaIcon from '../../assets/images/icons/FigmaIcon'
import FlutterIcon from '../../assets/images/icons/FlutterIcon'
import GithubIcon from '../../assets/images/icons/GithubIcon'
import GitIcon from '../../assets/images/icons/GitIcon'
import GitlabIcon from '../../assets/images/icons/GitlabIcon'
import HTML5Icon from '../../assets/images/icons/HTML5Icon'
import IllustratorIcon from '../../assets/images/icons/IllustratorIcon'
import JavascriptIcon from '../../assets/images/icons/JavascriptIcon'
import JiraIcon from '../../assets/images/icons/JiraIcon'
import LinkedinIcon from '../../assets/images/icons/LinkedinIcon'
import LinuxIcon from '../../assets/images/icons/LinuxIcon'
import NextIcon from '../../assets/images/icons/NextIcon'
import NPMIcon from '../../assets/images/icons/NPMIcon'
import PhotoshopIcon from '../../assets/images/icons/PhotoshopIcon'
import ReactIcon from '../../assets/images/icons/ReactIcon'
import VSCodeIcon from '../../assets/images/icons/VSCodeIcon'
import WordpressIcon from '../../assets/images/icons/WordpressIcon'
import BehanceIcon from '../../assets/images/icons/BehanceIcon'

function Icon({ name }) {
    if (name == "CSS3") {
        return <CSS3Icon />
    } else if (name == "Dart") {
        return <DartIcon />
    } else if (name == "Figma") {
        return <FigmaIcon />
    } else if (name == "Flutter") {
        return <FlutterIcon />
    } else if (name == "Github") {
        return <GithubIcon />
    } else if (name == "Git") {
        return <GitIcon />
    } else if (name == "Gitlab") {
        return <GitlabIcon />
    } else if (name == "HTML5") {
        return <HTML5Icon />
    } else if (name == "Illustrator") {
        return <IllustratorIcon />
    } else if (name == "Javascript") {
        return <JavascriptIcon />
    } else if (name == "Jira") {
        return <JiraIcon />
    } else if (name == "Linkedin") {
        return <LinkedinIcon />
    } else if (name == "Linux") {
        return <LinuxIcon />
    } else if (name == "Next") {
        return <NextIcon />
    } else if (name == "NPM") {
        return <NPMIcon />
    } else if (name == "Photoshop") {
        return <PhotoshopIcon />
    } else if (name == "React") {
        return <ReactIcon />
    } else if (name == "VSCode") {
        return <VSCodeIcon />
    } else if (name == "Wordpress") {
        return <WordpressIcon />
    } else if (name == "Behance") {
        return <BehanceIcon />
    } else {
        return <div />
    }
}

export default Icon