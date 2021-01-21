import React, { useRef, useEffect } from "react"
import { SectionHeading, Container, FlipCard } from "./styles/StyledComponents"
import { portfolioData, filterData } from "../data/portfolioData"
import styled from "styled-components"

const FilterButton = ({ children, dataFilter, filterButtons, flipCards }) => {
  const filterButton = useRef()

  useEffect(() => {
    if (filterButton.current.innerHTML === "All") {
      filterButton.current.classList.add("active")
    }
  })

  const handleClick = () => {
    Array.from(filterButtons.current.children).forEach(el => {
      el.children[0].classList.remove("active")
    })
    filterButton.current.classList.add("active")

    const dataFilter = filterButton.current.attributes["data-filter"].nodeValue
    const flipCardArr = Array.from(flipCards.current.children)
    flipCardArr.forEach(flipCard => {
      const classList = Array.from(flipCard.classList)
      if (dataFilter === "*") {
        flipCard.classList.remove("vanish")
        flipCard.style.order = "0"
      } else if (!classList.includes(dataFilter.substring(1))) {
        flipCard.classList.add("vanish")
        flipCard.style.order = "0"
      } else if (classList.includes(dataFilter.substring(1))) {
        flipCard.classList.remove("vanish")
        flipCard.style.order = "-1"
      }
    })
  }

  return (
    <StyledButton
      className="filter-button"
      data-filter={dataFilter}
      onClick={handleClick}
      ref={filterButton}
    >
      {children}
    </StyledButton>
  )
}

const Portfolio = () => {
  const filterButtons = useRef()
  const flipCards = useRef()

  const modalToggle = () => {
    return
  }

  return (
    <section id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <FilterButtons ref={filterButtons}>
        {filterData.map(({ dataFilter, text }) => (
          <li>
            <FilterButton
              filterButtons={filterButtons}
              flipCards={flipCards}
              dataFilter={dataFilter}
            >
              {text}
            </FilterButton>
          </li>
        ))}
      </FilterButtons>
      <FlexContainerWrap ref={flipCards}>
        {portfolioData.map(({ image, icon, title, desc, stack, className }) => (
          <FlipCard
            image={image}
            icon={icon}
            title={title}
            desc={desc}
            stack={stack}
            className={className}
            modalToggle={modalToggle}
          />
        ))}
      </FlexContainerWrap>
    </section>
  )
}

const FlexContainerWrap = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  /* justify-content: flex-start; */
  article {
    margin: 2em;
    /* margin: calc((1024px - 900px) / 6); */
  }
`

const FilterButtons = styled.ul`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    list-style-type: none;
    margin: 0.5em;
  }
`

const StyledButton = styled.button`
  position: relative;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: inherit;
  background: transparent;
  border: 1px solid black;
  padding: 10px 15px;
  box-shadow: 0px 3px 7px 3px rgba(0, 0, 0, 0.1);
  transition: color 0.35s ease;
  &.active {
    color: white;
    background: black;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: black;
    transition: width 0.425s ease-in-out;
    z-index: -1;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover {
    color: white;
  }
`

export default Portfolio
