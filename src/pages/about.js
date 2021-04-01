import React from "react"
import SEO from "../components/seo"
import PageLayout from "../components/layout"
import AboutUs from "../components/AboutUs"

const about = () => {
  return (
    <PageLayout>
      <SEO title="About" />
      <AboutUs />
    </PageLayout>
  )
}

export default about
