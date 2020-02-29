import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({
  data: {
    markdownRemark: {
      frontmatter: { icon, name, play },
      html,
    },
  },
}) => (
  <Layout>
    <h1>{name}</h1>
    <a href={play}>
      <Img alt={`${name} Icon`} fluid={icon.childImageSharp.fluid} />
    </a>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        icon {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        play
      }
    }
  }
`
