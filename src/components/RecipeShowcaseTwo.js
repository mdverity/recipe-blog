import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  AiTwotoneCalendar,
  AiOutlineTags,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"
import { FaArrowDown } from "react-icons/fa"

const RecipeShowcase = () => {
  const imageList = useStaticQuery(graphql`
    query {
      allContentfulRecipe(
        limit: 4
        sort: { fields: datePublished, order: DESC }
      ) {
        edges {
          node {
            title
            datePublished(formatString: "DD MMM")
            descriptors
            slug
            images {
              gatsbyImageData(placeholder: BLURRED, width: 500)
            }
          }
        }
      }
    }
  `)

  function getNewRecipes(data) {
    const imageArray = []
    data.allContentfulRecipe.edges.forEach((item, index) => {
      const [postDay, postMonth] = item.node.datePublished.split(" ")
      const image = getImage(item.node.images[0])
      const postTags = item.node["descriptors"]?.slice(0, 4)
      const linkPath = "/recipes/" + item.node.slug
      imageArray.push(
        <ShowcaseItem>
          <ImageWrapper to={linkPath}>
            <ShowcaseImage image={image} alt={item.node.title} />
          </ImageWrapper>
          <TextWrapper>
            <PostTitle>{item.node.title}</PostTitle>
            <DateWrapper>
              {/* <AiTwotoneCalendar /> */}
              <PostDate>
                {postMonth}
                <PostDay>{postDay}</PostDay>
              </PostDate>
            </DateWrapper>
            <Separator></Separator>
            {/* <PostExcerpt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              ducimus temporibus veniam omnis iusto amet a excepturi quam id
              unde.
            </PostExcerpt> */}
            <TagIcon />
            <PostTags>
              {postTags.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </PostTags>
            <ShareIconList>
              <ShareHeader>Share:</ShareHeader>
              <ShareIcon to="/">
                <AiOutlineFacebook />
              </ShareIcon>
              <ShareIcon to="/">
                <AiOutlineInstagram />
              </ShareIcon>
              <ShareIcon to="/">
                <AiOutlineTwitter />
              </ShareIcon>
            </ShareIconList>
            <ReadIcon to={linkPath}>
              <FaArrowDown />
            </ReadIcon>
          </TextWrapper>
        </ShowcaseItem>
      )
    })

    return imageArray
  }

  return (
    <div>
      <RecipesContainer>
        <RecipesHeading>Latest Posts</RecipesHeading>
        <RecipeWrapper>{getNewRecipes(imageList)}</RecipeWrapper>
      </RecipesContainer>
    </div>
  )
}

export default RecipeShowcase

export const RecipesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #111211;
  /* background-image: linear-gradient(
    to right,
    #f0deb4,
    #e2cf99,
    #d4c17f,
    #c4b365,
    #b4a54a,
    #b4a54a,
    #b4a54a,
    #b4a54a,
    #c4b365,
    #d4c17f,
    #e2cf99,
    #f0deb4
  ); */
  border-top: 5px solid #151515;
  border-bottom: 5px solid #151515;
  color: #fefae6;
`
const RecipesHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fefae6;
`

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* width: 100%; */
  justify-self: center;
  align-self: center;
  justify-items: center;
  grid-gap: 20px;
  padding: 0 1rem;
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const ShowcaseItem = styled.div`
  justify-self: center;
  position: relative;
  height: 350px;
  width: 700px;
  margin: 3rem auto;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.5);
  left: -76px;

  @media screen and (max-width: 1400px) {
    left: 0;
  }

  @media screen and (max-width: 800px) {
    transform: scale(0.5);
    margin: 0;
  }

  @media screen and (max-width: 420px) {
    transform: scale(0.4);
    margin: -5rem -12rem;
    /* left: -210px; */
  }

  :hover {
    * img {
      transform: scale(1.02);
    }
  }
`
/* Image on the left side */
const ImageWrapper = styled(Link)`
  float: left;
  position: relative;
  left: 30px;
  top: -40px;
  height: 115%;
  width: 400px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.2s ease-out;

  /* object-fit: cover; */
  /* object-position: center; */
`

const ShowcaseImage = styled(GatsbyImage)`
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /* transition: 1s ease-out !important; */
  border: 1px rgba(0, 0, 0, 0.5) solid;

  img {
    transition: all 0.2s ease-out !important;
  }
`

/* Right side of the card */
const TextWrapper = styled.div`
  margin-left: 465px;
  margin-right: 30px;
`

const PostTitle = styled.h1`
  padding-top: 15px;
  font-size: 1.5rem;
  color: #4b4b4b;
`

const DateWrapper = styled.div`
  /* background-color: #9ecaff; */
  /* height: 30px; */
  /* width: 110px; */
  /* border-radius: 20px; */
  position: relative;
`

const PostDate = styled.h6`
  position: absolute;
  right: 2px;
  top: -120px;
  font-size: 2rem;
  color: #c3c3c3;
`

const PostDay = styled.span`
  padding-left: 5px;
  font-size: 5rem;
`

const Separator = styled.div`
  margin-top: 70px;
  border: 1px solid #c3c3c3;
`

const PostExcerpt = styled.p`
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
  color: #4b4b4b;
`

const TagIcon = styled(AiOutlineTags)`
  color: #c3c3c3;
  font-size: 2rem;
  /* position: absolute;
  right: 170px;
  bottom: 157px; */
  margin-left: 35px;
  margin-top: 5px;
  margin-bottom: -10px;
`

const PostTags = styled.ul`
  list-style-type: none;
  text-align: center;
  margin-right: 6.5rem;
  /* padding-right: 35rem; */
  /* padding-top: 35px; */
  li {
    color: #4b4b4b;
    line-height: 1.8;
    font-size: 16px;
  }
`

const ShareIconList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4rem;
  bottom: 1rem;
`

const ShareIcon = styled(Link)`
  cursor: pointer;
  display: inline;
  list-style: none;
  font-size: 1.5rem;
  color: #7b7b7b;
  text-align: center;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`

const ShareHeader = styled.h4`
  color: #c3c3c3;
  margin-bottom: 5px;
`

/* Floating action button */
const ReadIcon = styled(Link)`
  position: absolute;
  right: 60px;
  bottom: -30px;
  box-sizing: border-box;
  padding-top: 18px;
  background-color: #1875d0;
  width: 60px;
  height: 60px;
  color: white;
  text-align: center;
  border-radius: 50%;
  font-size: 1.5rem;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  transition: 0.2s ease-out;

  :hover {
    transform: translateY(-10px);
  }
`
