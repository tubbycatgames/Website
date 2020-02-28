const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const markdownSlugQuery = pageType => `
  query {
    allMarkdownRemark(filter: { 
      frontmatter: { 
        type: { eq: "${pageType}" } 
      } 
    }) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`

exports.createPages = async ({ actions, graphql }) => {
  const createPagesWithSlug = async (pageType, templateFile) => {
    const pages = await graphql(markdownSlugQuery(pageType))
    pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.fields
      actions.createPage({
        path: slug,
        component: path.resolve(templateFile),
        context: { slug },
      })
    })
  }

  await createPagesWithSlug("blog-post", "./src/templates/blog-post.js")
  await createPagesWithSlug("game", "./src/templates/game-detail.js")
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  if (node.internal.type === "MarkdownRemark") {
    if (["blog-post", "game"].includes(node.frontmatter.type)) {
      actions.createNodeField({
        name: "slug",
        node,
        value: createFilePath({
          basePath: "pages",
          getNode,
          node,
        }),
      })
    }
  }
}
