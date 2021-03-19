import React from "react"
import EmailForm from "../components/EmailForm"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import RecipeShowcase from "../components/RecipeShowcase"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <SEO title="Home" />
    <RecipeShowcase />
    <EmailForm />
  </Layout>
)

export default IndexPage
