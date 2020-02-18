const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "game" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/game-detail.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.type === "game"
  ) {
    const slug = createFilePath({ basePath: "pages", getNode, node })
    actions.createNodeField({
      name: "slug",
      node,
      value: slug,
    })
  }
}
