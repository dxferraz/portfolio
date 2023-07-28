import React from "react";
import { styled } from "styled-components";
import Colors from "./constants/colors/colors";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

const AppContainer = styled.div`
  color: ${Colors.white};
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
      <Footer />
    </AppContainer>
  )
}