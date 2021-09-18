import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GameEntry from "../components/game-entry"

import { content } from "./game-detail.module.styl"

export default ({
  data: {
    markdownRemark: { fields, frontmatter, html },
  },
}) => (
  <Layout>
    <GameEntry {...frontmatter} {...fields} />
    <div className={content} dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
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
