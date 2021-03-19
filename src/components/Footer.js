import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <FooterContainer>
        <LinkWrapper>
          <LinkItems>
            <NavTitle to="/">FOOD!</NavTitle>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </LinkItems>
          <LinkItems>
            <NavTitleSmall to="/">Other Projects</NavTitleSmall>
            <NavLink to="/">Stuff</NavLink>
            <NavLink to="/">Junk</NavLink>
            <NavLink to="/">Things</NavLink>
            <NavLink to="/">Yeet</NavLink>
          </LinkItems>
        </LinkWrapper>
        <LinkWrapper>
          <FooterText>
            <h3>
              Find us on <NoWrap>social media!</NoWrap>
            </h3>
            <p>We'd love to hear how everything turned out!</p>
          </FooterText>
          <SocialWrapper>
            <SocialLink to="/" target="_blank" aria-label="Facebook">
              <AiFillFacebook />
            </SocialLink>
            <SocialLink to="/" target="_blank" aria-label="Instagram">
              <AiFillInstagram />
            </SocialLink>
            <SocialLink to="/" target="_blank" aria-label="Youtube">
              <AiFillYoutube />
            </SocialLink>
            <SocialLink to="/" target="_blank" aria-label="Twitter">
              <AiOutlineTwitter />
            </SocialLink>
            <SocialLink to="/" target="_blank" aria-label="GitHub">
              <AiFillGithub />
            </SocialLink>
            <SocialLink to="/" target="_blank" aria-label="LinkedIn">
              <AiFillLinkedin />
            </SocialLink>
          </SocialWrapper>
        </LinkWrapper>
      </FooterContainer>
      <SiteRights>{data.site.siteMetadata.author} © 2021</SiteRights>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #121111;
  background: #fafafb;
`

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const NavTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-decoration: none;
`

const NavTitleSmall = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  text-decoration: none;
`

const NavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #121111;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
    color: #000;
  }
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const FooterText = styled.div`
  padding: 1rem 2rem;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 2rem;
  }

  p {
    font-size: 14px;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 3.5rem;
  place-items: center;

  @media screen and (max-width: 820px) {
    padding: 1rem 5rem;
  }
`

const SocialLink = styled(Link)`
  font-size: 2rem;
  transition: 0.2s ease-out;
  color: #121111;

  &:hover {
    transform: scale(1.2);
  }
`

const SiteRights = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 15px;
`
