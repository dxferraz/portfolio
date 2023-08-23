import React from 'react'
import { styled } from 'styled-components'
import AnimatedElement from "../../animations/elements/ElementsAnimation"
import { useTranslation } from "react-i18next"
import Colors from "../../constants/colors/Colors"

const HeroSectionContainer = styled.div`
    background-image: url("src/assets/images/JPG/HeroBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 80vh;
`

const LeftHero = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 50vmax;
    align-items: center;
    justify-content: center;
    padding: 0% 10%;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 3rem;
    color: ${Colors.yellow};
    text-align: start;
    padding: 0px;
    margin: 0px;
`

const Paragraph = styled.p`
    font-size: 1.3rem;
    color: white;
    text-align: start;
    padding: 0px;
    margin: 0px;
`

const RightHero = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex: 1;
    height: 100%;
    width: 50vmax;
    align-items: center;
    justify-content: start;
`

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: -20px 0px;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`

function HeroSection() {
    const { t } = useTranslation();
    return (
        <HeroSectionContainer>
            <LeftHero >
                <AnimatedElement>
                    <Title>{t("frontEndDeveloper")}</Title>
                </AnimatedElement>
                <AnimatedElement delay={0.2}>
                    <Paragraph>{t("iAmDanielFerraz")}</Paragraph>
                </AnimatedElement>
            </LeftHero>
            <RightHero>
                <AnimatedElement delay={0.4}>
                    <ProfileImage src="src\assets\images\JPG\Montagem escritório.jpg" alt="Daniel Ferraz" />
                </AnimatedElement>
            </RightHero>
        </HeroSectionContainer>
    )
}

export default HeroSection