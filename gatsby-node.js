/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create path to template
  const recipeTemplate = path.resolve("./src/templates/Recipe.js")

  // Get markdown data
  // Destructured graphql function returns a Promise
  const res = await graphql(`
    query {
      allContentfulRecipe {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create new pages
  res.data.allContentfulRecipe.edges.forEach(edge => {
    createPage({
      component: recipeTemplate,
      path: `/recipes/${edge.node.slug}`,
      context: {
        // Using slug as a unique ID for querying the page when setting template
        slug: edge.node.slug,
      },
    })
  })
}
