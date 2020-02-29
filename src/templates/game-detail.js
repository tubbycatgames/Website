import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GameEntry from "../components/game-entry"

export default ({
  data: {
    markdownRemark: { fields, frontmatter, html },
  },
}) => (
  <Layout>
    <GameEntry {...frontmatter} {...fields} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        icon {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        play
        source
        video
      }
      html
    }
  }
`
