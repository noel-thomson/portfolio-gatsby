import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { headerData } from "../data/headerData"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  const body = document.querySelector("body")
  useEffect(() => {
    if (isOpen) body.style.overflowY = "hidden"
    if (!isOpen) body.style.overflowY = "initial"
  }, [isOpen, body])

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIsOpen(false)
    }
  })

  const mobileToggle = () => {
    setIsOpen(!isOpen)
  }

  const mobileKeyToggle = e => {
    if (e.key === "o") {
      mobileToggle()
    } else return
  }

  const linkClicked = () => {
    if (isOpen) {
      setIsOpen(!isOpen)
    }
  }

  let prevScrollPos = window.pageYOffset

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    const overScroll = currentScrollPos < 0
    const initial = currentScrollPos === 0
    const scrollDown = prevScrollPos < currentScrollPos
    const scrollUp = prevScrollPos > currentScrollPos && currentScrollPos > 0

    if (overScroll) {
      return
    }
    if (initial) {
      if (!isOpen) {
        setIsTransparent(true)
      }
    } else if (scrollDown) {
      if (!isOpen) {
        setIsHidden(true)
        // dropdownOpen(false)
      }
    } else if (scrollUp) {
      setIsHidden(false)
      setIsTransparent(false)
      // dropdownOpen(false)
    }
    prevScrollPos = currentScrollPos
  }

  return (
    <NavWrapper isTransparent={isTransparent} isHidden={isHidden}>
      <NavContainer>
        <LogoLink to="/">
          <LogoSVG isTransparent={isTransparent} isOpen={isOpen} />
        </LogoLink>
        <NavListContainer isOpen={isOpen} isTransparent={isTransparent}>
          {headerData.map(({ title, link }, index) => (
            <li key={index}>
              <NavListLink href={link} key={index} onClick={linkClicked}>
                {title}
              </NavListLink>
            </li>
          ))}
          <li>
            <NavCta isTransparent={isTransparent}>Contact</NavCta>
          </li>
        </NavListContainer>
      </NavContainer>
      <MobileToggle
        isOpen={isOpen}
        isTransparent={isTransparent}
        mobileToggle={mobileToggle}
        mobileKeyToggle={mobileKeyToggle}
      />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: ${({ isHidden }) => (isHidden ? "-8rem" : "0px")};
  left: 0;
  z-index: 2;
  background: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "white"};
  transition: all 0.375s ease 0.03s;
`

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  width: 90%;
  height: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoLink = styled(Link)`
  height: 38px;
  z-index: 3;
`

// SVG
const LogoSVG = ({ isTransparent, isOpen }) => (
  <StyledSVG viewBox="0 0 23.631 23.631">
    <StyledPath
      isTransparent={isTransparent}
      isOpen={isOpen}
      d="M 0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969 z"
    ></StyledPath>
    <StyledPath
      isTransparent={isTransparent}
      isOpen={isOpen}
      d="M 23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662 z"
    ></StyledPath>
  </StyledSVG>
)

const StyledSVG = styled.svg`
  height: 100%;
`

const StyledPath = styled.path`
  fill: ${({ isTransparent }) => (isTransparent ? "white" : "black")};
  @media (${({ theme }) => theme.maxWidths.mobileL}) {
    fill: ${({ isTransparent, isOpen }) => {
      if (!isOpen && isTransparent) {
        return "white"
      } else if (!isOpen && !isTransparent) {
        return "black"
      } else if (isOpen) {
        return "black"
      }
    }};
  }
`

// Nav List
const NavListContainer = styled.ul`
  @media (${({ theme }) => theme.minWidths.tablet}) {
    position: static;
    display: flex;
    align-items: center;
    padding-left: 1em;
    li + li {
      margin-left: 3.2em;
    }
    li:not(:last-child) {
      a {
        color: ${({ isTransparent }) => (isTransparent ? "white" : "black")};
      }
    }
  }
  @media (${({ theme }) => theme.maxWidths.mobileL}) {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
    left: 0;
    background: white;
    padding: 8rem 5%;
    transition: all 0.4s ease-in-out;
    li {
      margin: 3.2em 0;
      &:nth-last-of-type(2) {
        margin-bottom: 4.8em;
      }
    }
  }
`

const NavListLink = styled.a`
  position: relative;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  vertical-align: bottom;
  &::after {
    background: currentColor;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 100%;
    transition: transform, width 0.2s ease-in-out;
    width: 0%;
  }
  &:hover::after {
    width: 100%;
  }
  @media (${({ theme }) => theme.maxWidths.mobileL}) {
    font-size: 2.2rem;
    font-weight: 600;
    color: black;
  }
`

const NavCta = styled.a`
  color: ${({ isTransparent }) => (isTransparent ? "black" : "white")};
  background: ${({ isTransparent }) => (isTransparent ? "white" : "black")};
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.9em 2.2em;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover {
    background: transparent;
    color: ${({ isTransparent }) => (isTransparent ? "white" : "black")};
    border: ${({ isTransparent }) =>
      isTransparent ? "1px solid white" : "1px solid black"};
  }
  @media (${({ theme }) => theme.maxWidths.mobileL}) {
    color: white;
    background: black;
    font-size: 1.2rem;
    &:hover {
      color: black;
      background: transparent;
      border: 1px solid black;
    }
  }
`

// Toggle
const MobileToggle = ({
  isOpen,
  isTransparent,
  mobileToggle,
  mobileKeyToggle,
}) => (
  <HamburgerWrapper
    role="button"
    onClick={mobileToggle}
    onKeyDown={mobileKeyToggle}
    tabIndex="-1"
  >
    <Hamburger isOpen={isOpen} isTransparent={isTransparent}>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  </HamburgerWrapper>
)

const HamburgerWrapper = styled.div`
  &:focus {
    outline: none;
  }
`

const Hamburger = styled.div`
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 5%;
  top: calc(50% - 12px);
  cursor: pointer;
  span {
    background: ${({ isTransparent, isOpen }) => {
      if (!isOpen && isTransparent) {
        return "white"
      } else if (!isOpen && !isTransparent) {
        return "black"
      } else if (isOpen) {
        return "black"
      }
    }};
    height: 2px;
    position: absolute;
    right: 0;
    transition: all 0.1s ease-out;
    transition-delay: ${({ isOpen }) => (!isOpen ? "0.3s" : "0s")};
    &:nth-child(1) {
      top: 0;
      width: 100%;
    }
    &:nth-child(2) {
      top: calc(50% - 2px);
      width: 50%;
    }
    &:nth-child(3) {
      top: calc(100% - 3px);
      width: 75%;
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      span {
        &:nth-child(1) {
          top: calc(50% - 1px);
          transform: rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: calc(50% - 1px);
          transform: rotate(45deg);
          width: 100%;
        }
      }
    `}
  @media (${({ theme }) => theme.minWidths.tablet}) {
    display: none;
  }
`

export default Header
