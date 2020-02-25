import Helmet from "react-helmet"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const render = data => {
  const meta = [
    {
      name: "description",
      content: data.site.siteMetadata.description,
    },
  ]
  return <Helmet meta={meta} title={data.site.siteMetadata.title} />
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
