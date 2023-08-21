import React from "react"
import AnimatedPage from '../../animations/transitions/PageTransition'
import { styled } from "styled-components"

// Sections imports
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection"
import LevelsSection from "./LevelsSection";
import WhatsAppButton from "../../components/WhatsApp Button/WhatsAppButton";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: auto;
`

function HomePage() {
    return (
        <AnimatedPage>
            <WhatsAppButton/>
            <HomeContainer>
                <HeroSection/>
                <AboutMeSection />
                <LevelsSection/>
            </HomeContainer>
        </AnimatedPage>
    );
}

export default HomePage