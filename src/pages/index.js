import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Portfolio from "../components/Portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage
