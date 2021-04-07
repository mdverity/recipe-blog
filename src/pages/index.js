import React from "react"
import Hero from "../components/Hero"
import PageLayout from "../components/layout"
import RecipeShowcase from "../components/RecipeShowcase"
import SEO from "../components/seo"

const IndexPage = () => (
  <PageLayout>
    <Hero />
    <SEO title="Home" />
    <RecipeShowcase />
  </PageLayout>
)

export default IndexPage
