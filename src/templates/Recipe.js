import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

export const query = graphql`
  query($slug: String!) {
    contentfulRecipe(slug: { eq: $slug }) {
      title
      datePublished(formatString: "dddd - MMMM Do, YYYY", fromNow: true)
      directions {
        raw
        references {
          contentful_id
          title
          fluid {
            srcWebp
          }
        }
      }
    }
  }
`

const Recipe = props => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.HR]: (node, children) => <hr />,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const img = props.data.contentfulRecipe.directions.references.find(
          i => {
            return i.contentful_id === node.data.target.sys.id
          }
        )
        return (
          <img className="post-img" src={img?.fluid.srcWebp} alt={img?.title} />
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return <Link input={node.data.target}>{children}</Link>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulRecipe.title} />
      <Wrapper>
        <div className="post-header">
          <Title>{props.data.contentfulRecipe.title}</Title>
          <h4 className="post-date">
            {props.data.contentfulRecipe.datePublished}
          </h4>
        </div>
        <PostBody>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulRecipe.directions.raw),
            options
          )}
        </PostBody>
      </Wrapper>
    </Layout>
  )
}

export default Recipe

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto;
  /* align-items: center; */
`

const Title = styled.h1`
  font-size: 3rem;
`

const PostBody = styled.div`
  display: grid;

  img {
    place-self: center;
    width: 400px;
    max-height: 100%;
  }
`
