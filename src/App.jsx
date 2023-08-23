import React from "react"
import { styled } from "styled-components"
import { AnimatePresence } from "framer-motion"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Colors from "./constants/colors/Colors"

const AppContainer = styled.div`
  color: ${Colors.white};
  background-color: ${Colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
`

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppContainer>
        <Header />
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
        <Footer />
      </AppContainer>
    </>
  )
}