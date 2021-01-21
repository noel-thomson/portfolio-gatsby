import AppleMockup from "../images/mockups/apple.jpg"
import AppleIcon from "../images/icons/apple.png"
import BusinessMockup from "../images/mockups/business.jpg"
import BusinessIcon from "../images/icons/business.png"
import TaxMockup from "../images/mockups/tax.jpg"
import TaxIcon from "../images/icons/tax.png"
import AgencyMockup from "../images/mockups/Agency.jpg"
import AgencyIcon from "../images/icons/Agency.png"
import MovieMockup from "../images/mockups/Movie.jpg"
import MovieIcon from "../images/icons/Movie.png"
import BlackjackMockup from "../images/mockups/Blackjack.jpg"
import BlackjackIcon from "../images/icons/Blackjack.png"

export const filterData = [
  {
    text: "All",
    dataFilter: "*",
  },
  {
    text: "Pages",
    dataFilter: ".pages",
  },
  {
    text: "JavaScript",
    dataFilter: ".js",
  },
]

export const portfolioData = [
  {
    image: AppleMockup,
    icon: AppleIcon,
    title: "Apple Landing Page",
    desc: "Apple's Homepage Recreated",
    stack: "HTML • Sass",
    className: "pages",
  },
  {
    image: BusinessMockup,
    icon: BusinessIcon,
    title: "Business Template",
    desc: "Online Presence for Business",
    stack: "HTML • Sass • JavaScript",
    className: "pages",
  },
  {
    image: TaxMockup,
    icon: TaxIcon,
    title: "Westwood Financial",
    desc: "Tax and Accounting Firm",
    stack: "Bootstrap • Sass • JavaScript",
    className: "pages",
  },
  {
    image: AgencyMockup,
    icon: AgencyIcon,
    title: "Digital Agency",
    desc: "Digital Agency Portfolio",
    stack: "Sass • JavaScript",
    className: "pages",
  },
  {
    image: MovieMockup,
    icon: MovieIcon,
    title: "Movie Search Database",
    desc: "Search Film Information",
    stack: "JavaScript • Bootstrap",
    className: "js",
  },
  {
    image: BlackjackMockup,
    icon: BlackjackIcon,
    title: "Blackjack App",
    desc: "Card Game",
    stack: "JavaScript • Sass",
    className: "js",
  },
]
