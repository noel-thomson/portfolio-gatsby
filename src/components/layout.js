import React from "react"
import { ThemeProvider } from "styled-components"
import "./styles/fonts.css"

import Theme from "./styles/Theme"
import { GlobalStyle } from "./styles/GlobalStyles"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
