import Helmet from "react-helmet"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const render = data => {
  const { author, description, title } = data.site.siteMetadata
  const meta = [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: author,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:title",
      content: title,
    },
  ]

  return <Helmet meta={meta} title={data.site.siteMetadata.title} />
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

export default () => {
  return <StaticQuery query={query} render={render} />
}
