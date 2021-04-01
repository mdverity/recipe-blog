import * as React from "react"
import Header from "./Header"
import EmailForm from "../components/EmailForm"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"

const PageLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <EmailForm />
      <Footer />
    </>
  )
}

export default PageLayout
