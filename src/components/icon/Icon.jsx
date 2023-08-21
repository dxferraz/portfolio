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
import WhatsAppIcon from '../../assets/images/icons/WhatsAppIcon'

function Icon({ name, width }) {
    if (name == "CSS3") {
        return <CSS3Icon style={"width: " + width} />
    } else if (name == "Dart") {
        return <DartIcon style={"width: " + width} />
    } else if (name == "Figma") {
        return <FigmaIcon style={"width: " + width} />
    } else if (name == "Flutter") {
        return <FlutterIcon style={"width: " + width} />
    } else if (name == "Github") {
        return <GithubIcon style={"width: " + width} />
    } else if (name == "Git") {
        return <GitIcon style={"width: " + width} />
    } else if (name == "Gitlab") {
        return <GitlabIcon style={"width: " + width} />
    } else if (name == "HTML5") {
        return <HTML5Icon style={"width: " + width} />
    } else if (name == "Illustrator") {
        return <IllustratorIcon style={"width: " + width} />
    } else if (name == "Javascript") {
        return <JavascriptIcon style={"width: " + width} />
    } else if (name == "Jira") {
        return <JiraIcon style={"width: " + width} />
    } else if (name == "Linkedin") {
        return <LinkedinIcon style={"width: " + width} />
    } else if (name == "Linux") {
        return <LinuxIcon style={"width: " + width} />
    } else if (name == "Next") {
        return <NextIcon style={"width: " + width} />
    } else if (name == "NPM") {
        return <NPMIcon style={"width: " + width} />
    } else if (name == "Photoshop") {
        return <PhotoshopIcon style={"width: " + width} />
    } else if (name == "React") {
        return <ReactIcon style={"width: " + width} />
    } else if (name == "VSCode") {
        return <VSCodeIcon style={"width: " + width} />
    } else if (name == "Wordpress") {
        return <WordpressIcon style={"width: " + width} />
    } else if (name == "Behance") {
        return <BehanceIcon style={"width: " + width} />
    } else if (name == "WhatsApp") {
        return <WhatsAppIcon style={"width: " + width} />
    } else {
        print("O ícone desejado não foi encontrado");
        return <div />
    }
}

export default Icon