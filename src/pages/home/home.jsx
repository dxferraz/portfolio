import React from "react"
import AnimatedPage from '../../animations/transitions/PageTransition'
import { styled } from "styled-components"

// Sections imports
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection"

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
            <HomeContainer>
                <HeroSection/>
                <AboutMeSection/>
            </HomeContainer>
        </AnimatedPage>
    );
}

export default HomePage