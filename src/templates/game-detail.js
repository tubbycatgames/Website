import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const game = data.markdownRemark
  return (
    <Layout>
      <h1>{game.frontmatter.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: game.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
      }
    }
  }
`
