import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default ({ data }) => {
  return <Helmet title={data.site.siteMetadata.title} />
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
