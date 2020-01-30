import Helmet from "react-helmet"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const render = data => {
  return (
    <Helmet
      description={data.site.siteMetadata.description}
      title={data.site.siteMetadata.title}
    />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

export default () => {
  return <StaticQuery query={query} render={render} />
}
