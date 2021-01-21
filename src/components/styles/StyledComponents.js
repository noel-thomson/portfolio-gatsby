import styled from "styled-components"
import React from "react"

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  width: 90%;
  margin: 0 auto;
  padding: 1.6em 0;
`

export const FlexContainer = styled(Container)`
  @media (${({ theme }) => theme.minWidths.tablet}) {
    display: flex;
  }
`

export const SectionHeading = ({ children }) => (
  <HeadingUnderline>
    {children}
    <Underline />
  </HeadingUnderline>
)

const HeadingUnderline = styled.h1`
  position: relative;
  width: max-content;
  margin: 1em auto;
  font-weight: 400;
  font-size: 4rem;
  white-space: nowrap;
  z-index: 1;
`

const Underline = styled.span`
  position: absolute;
  top: 0.8em;
  left: 50%;
  transform: translate(-50%, 0);
  width: 105%;
  height: 0.3em;
  background: rgba(44, 122, 255, 0.225);
  opacity: 0.7;
  z-index: -1;
`

export const FlipCard = ({
  image,
  icon,
  title,
  desc,
  stack,
  className,
  modalToggle,
}) => (
  <CardWrapper className={className}>
    <CardContainer>
      <CardFace>
        <img className="front-image" src={image} alt={title} />
      </CardFace>
      <CardFaceBack>
        <img src={icon} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{stack}</p>
        <CardButton onClick={modalToggle}>View Project</CardButton>
      </CardFaceBack>
    </CardContainer>
  </CardWrapper>
)

const CardWrapper = styled.article`
  width: 300px;
  height: 350px;
  perspective: 1024px;
  transition: transform 0.3s ease, opacity 0.3s ease, order 0s;
  opacity: 1;
  &:hover > div {
    transform: rotateY(180deg);
  }
  &.vanish {
    transform: scale(0);
    opacity: 0;
  }
`

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
`

const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  .front-image {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  .front-image[alt="Blackjack App"] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

const CardFaceBack = styled(CardFace)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  text-align: center;
  h2 {
    font-weight: 500;
    font-size: 2rem;
  }
  p {
    font-weight: 500;
    font-size: 1.7rem;
    &:nth-of-type(1) {
      font-weight: 300;
    }
  }
`

const CardButton = styled.button`
  font-size: 1.6rem;
  font-family: inherit;
  background: transparent;
  padding: 0.5625em 0.625em 0.625em;
  border: 1px solid #2979ff;
  border-radius: 5px;
  color: #2979ff;
  width: 12rem;
  transition: all 0.5s ease;
  &:hover {
    color: white;
    background: #2979ff;
  }
`
