import styledm, { createGlobalStyle } from "styled-components";
import Colors from "./constants/colors/colors";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;

    @media screen and (max-width: 960px) {
        padding: 0 30px;
    }
`

export const MainHeading = styled.h1`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: ${Colors.white};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
`

export const Heading = styled.h2`
    font-size: clamp(1.3rem, 13vw, 3.1rem);
    margin: ${({ margin }) => (margin ? margin : '')};
    
`

export const TextWrapper = styled.span``

export const Section = styled.section``

export const Row = styled.div``

export const Column = styled.div``

export const Button = styled.button``