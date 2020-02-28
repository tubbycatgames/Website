import Helmet from "react-helmet"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const render = ({ 
    site: {
      siteMetadata: { 
        author, 
        description, 
        title 
      }
    }
  }) => (
  <Helmet
    meta={[
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
    ]}
    title={title}
  />
)

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

export default () => <StaticQuery query={query} render={render} />
