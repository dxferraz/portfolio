import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

function Home() {
    return (
        <>
            <Header />
            <Container>
                <h1>Body</h1>
            </Container>
        </>
    );
}

export default Home;