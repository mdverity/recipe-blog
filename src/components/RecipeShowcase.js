import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Button } from "./Button"

const RecipeShowcase = () => {
  const imageList = useStaticQuery(graphql`
    query {
      allContentfulAsset(limit: 4) {
        edges {
          node {
            gatsbyImageData(placeholder: BLURRED, width: 405)
            title
          }
        }
      }
    }
  `)

  function getNewRecipes(data) {
    const imageArray = []
    console.log(data.allContentfulAsset.edges)
    data.allContentfulAsset.edges.forEach((item, index) => {
      console.log(item)
      const image = getImage(item.node)
      console.log(data.allContentfulAsset.edges.length)
      imageArray.push(
        <ShowcaseItem key={index} to="/">
          <ShowcaseImage image={image} alt={item.node.title} />
          <ShowcaseInfo>
            <TextWrap>
              <PostTitle>Post Title</PostTitle>
              <PostDate>Post Date</PostDate>
            </TextWrap>
          </ShowcaseInfo>
        </ShowcaseItem>
      )
    })

    return imageArray
  }

  return (
    <div>
      <RecipesContainer>
        <RecipesHeading>Recent Posts</RecipesHeading>
        <RecipeWrapper>{getNewRecipes(imageList)}</RecipeWrapper>
      </RecipesContainer>
    </div>
  )
}

export default RecipeShowcase

export const RecipesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fefae6;
  background-image: linear-gradient(
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
  );
  border-top: 5px solid #2c2100;
  color: #fefae6;
`
const RecipesHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fefae6;
`

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* width: 100%; */
  justify-self: center;
  align-self: center;
  grid-gap: 10px;
  justify-items: center;
  padding: 0 1rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ShowcaseItem = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 2;
  margin-bottom: 1rem;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #222222;
  border-radius: 3px;
  transition: 0.2s ease;
  text-decoration: none;
  color: #fefae6;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 475px;
  }

  &:hover {
    :not(img) {
      transform: scale(1.02);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 35px,
        rgba(0, 0, 0, 0.12) 0px -10px 20px, rgba(0, 0, 0, 0.12) 0px 3px 5px,
        rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -2px 4px;
    }
  }

  &:hover img {
    filter: brightness(75%);
    /* transform: scale(1); */
  }
`

const ShowcaseImage = styled(GatsbyImage)`
  max-width: 400px;
  height: 100%;
  margin: 1rem;
  align-self: center;
  border-radius: 3px;
  border: 2px solid #222222;
`

const ShowcaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
`

const TextWrap = styled.div`
  text-align: center;
  align-items: center;
  padding: 2rem 0;

  a {
    justify-self: flex-end;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    flex-direction: column;
  }
`

const PostTitle = styled.h2``

const PostDate = styled.p``
