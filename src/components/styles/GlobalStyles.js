import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  main {
    margin-top: 8rem;
  }
  nav ul li {
    list-style-type: none;
    a {
      text-decoration: none;
    }
  }
  p {
    line-height: 2;
    font-size: 2rem;
    font-weight: 300;
  }
  a {
    color: #22509f;
    text-decoration: none;
    &:hover {
      color: #2979ff;
    }
  }
`
