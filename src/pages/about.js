import React from "react"
import SEO from "../components/seo"
import PageLayout from "../components/layout"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"

const about = () => {
  return (
    <PageLayout>
      <Hero />
      <SEO title="About" />
      <AboutUs />
    </PageLayout>
  )
}

export default about
