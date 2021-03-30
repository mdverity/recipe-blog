import React from "react"
import EmailForm from "../components/EmailForm"
import Hero from "../components/Hero"
import PageLayout from "../components/layout"
import RecipeShowcaseThree from "../components/RecipeShowcaseThree"
import SEO from "../components/seo"

const IndexPage = () => (
  <PageLayout>
    <Hero />
    <SEO title="Home" />
    <RecipeShowcaseThree />
    <EmailForm />
  </PageLayout>
)

export default IndexPage
