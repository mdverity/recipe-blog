import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiTwotoneCalendar } from "react-icons/ai"

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
      console.log(item.node.images)
      const image = getImage(item.node.images[0])
      imageArray.push(
        <ShowcaseItem key={index} to="/">
          <ShowcaseBackground></ShowcaseBackground>
          <ShowcaseImage image={image} alt={item.node.title} />
          <ShowcaseInfo>
            <TextWrap>
              <PostTitle>{item.node.title}</PostTitle>
              <DateWrapper>
                <AiTwotoneCalendar />
                <PostDate>{item.node.datePublished}</PostDate>
              </DateWrapper>
              <PostInfo>{item.node["descriptors"]?.join(" - ")}</PostInfo>
            </TextWrap>
          </ShowcaseInfo>
        </ShowcaseItem>
        //   <div class="card">
        //     <div class="thumbnail">
        //       <img class="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/>
        //     </div>
        //     <div class="right">
        //       <h1>Why you Need More Magnesium in Your Daily Diet</h1>
        //       <div class="author">
        //         <img src="https://randomuser.me/api/portraits/men/95.jpg"/>
        //         <h2>Igor MARTY</h2>
        //       </div>
        //       <div class="separator"></div>
        //       <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
        //     </div>
        //     <h5>12</h5>
        //     <h6>JANUARY</h6>
        //     <ul>
        //       <li><i class="fa fa-eye fa-2x"></i></li>
        //       <li><i class="fa fa-heart-o fa-2x"></i></li>
        //       <li><i class="fa fa-envelope-o fa-2x"></i></li>
        //       <li><i class="fa fa-share-alt fa-2x"></i></li>
        //     </ul>
        //     <div class="fab"><i class="fa fa-arrow-down fa-3x"> </i></div>
        //   </div>
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
  padding: 5rem calc((100vw - 1000px) / 2);
  background: #101110;
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
  background: rgba(150, 150, 150, 0.1);
  border: 2px solid #151515;
  border-radius: 10px;
  transition: 0.2s ease-out;
  text-decoration: none;
  color: #fefae6;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 475px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 35px,
      rgba(0, 0, 0, 0.12) 0px -10px 20px, rgba(0, 0, 0, 0.12) 0px 3px 5px,
      rgba(0, 0, 0, 0.17) 0px 10px 10px, rgba(0, 0, 0, 0.09) 0px -2px 4px;
  }

  &:hover img {
    filter: brightness(105%);
    /* transform: scale(1); */
  }
`

const ShowcaseBackground = styled.div`
  display: fixed;
  background: #fff;
  width: 550px;
  height: 350px;
`

const ShowcaseImage = styled(GatsbyImage)`
  max-width: 400px;
  height: 100%;
  margin: 1rem;
  margin-bottom: 0;
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
  padding: 1.5rem 0;

  a {
    justify-self: flex-end;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    flex-direction: column;
  }
`

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 550;
  padding-bottom: 0.5rem;
`

const DateWrapper = styled.div``
const PostDate = styled.div``
const PostInfo = styled.div``
