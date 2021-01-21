import React from "react"
import { FlexContainer, SectionHeading } from "./styles/StyledComponents"
import styled from "styled-components"
import Image from "../images/noel.jpg"
import { AboutCopy } from "../data/aboutData"

const About = () => {
  return (
    <section id="about">
      <SectionHeading>About</SectionHeading>
      <FlexContainer>
        <HeadShotWrapper>
          <HeadShotContainer>
            <HeadShot src={Image} />
          </HeadShotContainer>
        </HeadShotWrapper>
        <CopyContainer>
          <AboutCopy />
        </CopyContainer>
      </FlexContainer>
    </section>
  )
}

const HeadShotWrapper = styled.aside`
  @media (${({ theme }) => theme.minWidths.tablet}) {
    flex-basis: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

const HeadShotContainer = styled.div`
  border-radius: 50%;
  border: 3px solid #f5f5f5;
  width: 150px;
  height: 150px;
  margin: 0 auto 1em;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 lightgrey;
  @media (${({ theme }) => theme.minWidths.tablet}) {
    margin: 0 1.6em 0 0;
  }
`

const HeadShot = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 top;
`

const CopyContainer = styled.article`
  flex-basis: 70%;
  padding: 1.6em;
  text-align: center;
  @media (${({ theme }) => theme.minWidths.tablet}) {
    padding-right: 10%;
  }
`

export default About
