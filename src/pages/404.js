import React from "react"
import SEO from "../components/seo"
import PageLayout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const NotFoundPage = () => {
  return (
    <PageLayout>
      <SEO title="404: Not Found" />
      <WarningSection>
        <TopText>Well, that's embarassing.</TopText>
        <BigText>404: Not Found</BigText>
        <SmallText>Looks like this page doesn't quite exist yet.</SmallText>
        <BackHome to="/">Get me out of here!</BackHome>
      </WarningSection>
    </PageLayout>
  )
}

export default NotFoundPage

const WarningSection = styled.div`
  text-align: center;
  height: 355px;
  margin-top: 80px;
  overflow: hidden;
`
const TopText = styled.p`
  text-align: center;
  margin-top: 4rem;
`

const BigText = styled.h1`
  text-align: center;
  font-size: 42px;
`

const SmallText = styled.p`
  text-align: center;
  margin: 2rem 0;
`

const BackHome = styled(Link)`
  font-size: 24px;
`
