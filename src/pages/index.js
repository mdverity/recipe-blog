import React from "react"
import EmailForm from "../components/EmailForm"
import Hero from "../components/Hero"
import PageLayout from "../components/layout"
import RecipeShowcaseTwo from "../components/RecipeShowcaseTwo"
import SEO from "../components/seo"

const IndexPage = () => (
  <PageLayout>
    <Hero />
    <SEO title="Home" />
    <RecipeShowcaseTwo />
    <EmailForm />
  </PageLayout>
)

export default IndexPage
