import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "@brainhubeu/react-carousel/lib/style.css"
import "../components/styles/RecipeCard.css"
import boardImage from "../assets/images/board-large.jpg"

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
      // const postTags = item.node["descriptors"]?.slice(0, 4)
      const linkPath = "/recipes/" + item.node.slug
      index += 1
      const keys = {
        likes: "likes" + index.toString(),
        comments: "com" + index.toString(),
        date: "date" + index.toString(),
        tags: "tags" + index.toString(),
      }
      imageArray.push(
        <div key={"post" + index} className="blog-card">
          <CardBackground
            image={image}
            className="left"
            alt={item.node.title}
          />
          <div className="title-content">
            <h3>
              <Link to={linkPath}>{item.node.title}</Link>
            </h3>
            <div className="intro"></div>
          </div>
          <div className="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim...
            <Link to={linkPath}>
              Read Post<span className="licon icon-arr icon-black"></span>
            </Link>
          </div>
          <div className="utility-info">
            <ul className="utility-list">
              <li key={keys["likes"]}>
                <span className="licon icon-like"></span>
                {Math.floor(Math.random() * 51)}
              </li>
              <li key={keys["comments"]}>
                <span className="licon icon-com"></span>
                {Math.floor(Math.random() * 11)}
              </li>
              <li key={keys["date"]}>
                <span className="licon icon-dat"></span>
                {postDay} {postMonth}
              </li>
              <li key={keys["tags"]}>
                <span className="licon icon-tag"></span>
                {item.node["descriptors"]?.join(" - ")}
              </li>
            </ul>
          </div>
          <div className="gradient-overlay"></div>
          <div className="color-overlay"></div>
        </div>

        // <div className="card">
        //   <div className="thumbnail">
        //     <Link to={linkPath}>
        //
        //     </Link>
        //   </div>
        //   <div className="right">
        //     <ul className="card-icon-list">
        //       <li className="card-icon" key={keys.heart}>
        //         <FaHeart />
        //       </li>
        //       <li className="card-icon" key={keys.enve}>
        //         <FaEnvelope />
        //       </li>
        //       <li className="card-icon" key={keys.share}>
        //         <FaShareAlt />
        //       </li>
        //     </ul>
        //     <h1 className="recipe-title">{item.node.title}</h1>
        //     <div className="tags">
        //       <h2 className="recipe-tags">
        //         {item.node["descriptors"]?.join(" - ")}
        //       </h2>
        //     </div>
        //     <div className="separator"></div>
        //     <p className="recipe-text">
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
        //       repudiandae, quas, consequatur doloremque excepturi ipsam, dicta
        //       obcaecati doloribus tempore sequi laborum sed eum unde magni
        //       itaque ipsa deserunt! Nam, necessitatibus.
        //     </p>
        //   </div>
        //   <h5 className="post-day">{postDay}</h5>
        //   <h6 className="post-month">{postMonth}</h6>
        //   <div className="fab">
        //     <p className="fab-text">Read More</p>
        //     <Link to={linkPath}>
        //       <GiClick className="fab-icon" />
        //     </Link>
        //   </div>
        // </div>
      )
    })

    return imageArray
  }

  return (
    <div>
      <RecipesContainer id="recipes">
        <RecipesHeading>Latest Posts</RecipesHeading>
        <Divider></Divider>
        <RecipeWrapper>{getNewRecipes(imageList)}</RecipeWrapper>
      </RecipesContainer>
    </div>
  )
}

export default RecipeShowcase

export const RecipesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1500px) / 2);
  background: linear-gradient(
      180deg,
      rgba(250, 254, 230, 1) 0%,
      rgba(250, 254, 230, 1) 45%,
      rgba(255, 255, 255, 0) 60%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${boardImage}) repeat bottom;
  border-top: 5px solid #151515;
  color: #fefae6;

  @media screen and (max-width: 900px) {
    background: linear-gradient(
        180deg,
        rgba(250, 254, 230, 1) 0%,
        rgba(250, 254, 230, 1) 45%,
        rgba(255, 255, 255, 0) 60%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${boardImage}) repeat bottom;
  }
`
const RecipesHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  text-align: center;
  margin-top: 1em;
  color: rgba(34, 34, 34, 0.9);
  /* text-shadow: 0 0 10px #121111; */
`

const Divider = styled.div`
  border: 1px rgba(34, 34, 34, 0.65) solid;
  width: 45%;
  margin: 0 auto;
  margin-bottom: 1em;
`

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  width: 100%;
  justify-self: center;
  align-self: center;
  justify-items: center;
  margin-bottom: 4rem;
  padding: 0 0.5rem;
  gap: 20px;
  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const CardBackground = styled(GatsbyImage)`
  max-width: 550px;
  width: 100%;
  height: 500px;
  position: absolute;
  left: 0;
`
