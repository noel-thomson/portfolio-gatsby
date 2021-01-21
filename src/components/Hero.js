import React from "react"
import styled, { keyframes } from "styled-components"
import Seashore from "../videos/seashore.mp4"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroVideo
        src={Seashore}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <HeroContent />
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  overflow: hidden;
  margin-top: -80px;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.125);
  }
`

const HeroVideo = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`

const HeroContent = () => (
  <Container>
    <h1>Noel Thomson</h1>
    <h2>Front End Engineer</h2>
    <a href="#portfolio">Learn More</a>
  </Container>
)

const leftIn = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
const rightIn = keyframes`
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const upIn = keyframes`
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 0.85;
      transform: translateY(0);
    }
  }
`

const Container = styled.div`
  z-index: 1;
  margin: 2em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 8rem;
    animation: ${leftIn} 0.75s ease;
    animation-fill-mode: forwards;
  }
  h2 {
    font-size: 3rem;
    margin: 1em 0;
    opacity: 0;
    animation: ${rightIn} 0.75s ease 0.3s;
    animation-fill-mode: forwards;
  }
  a {
    text-decoration: none;
    font-size: 1.4rem;
    margin-top: 2.4em;
    font-weight: 500;
    letter-spacing: 2px;
    display: inline-block;
    padding: 1.1em 2.2em;
    background: #3a4052;
    color: #fff;
    border-radius: 30px;
    border: solid rgba(255, 255, 255, 0.7) 2px;
    text-transform: uppercase;
    opacity: 0;
    animation: ${upIn} 0.75s ease 0.6s;
    animation-fill-mode: forwards;
    :hover {
      transition: all 0.7s ease;
      animation-fill-mode: none;
      opacity: 1;
      background: rgba(255, 255, 255, 0.9);
      color: black;
    }
  }

  @media (${({ theme }) => theme.minWidths.tablet}) {
    h1 {
      font-size: 10rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`

export default Hero
