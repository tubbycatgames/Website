import React from "react"
import { graphql } from "gatsby"

import GameEntry from "../components/game-entry"
import Layout from "../components/layout"

export default ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge, index) => {
    return <GameEntry {...edge.node.frontmatter} key={"gameEntry" + index} />
  })
  return (
    <Layout>
      <h1>Games</h1>
      {entries}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "game" } } }) {
      edges {
        node {
          frontmatter {
            name
            source
            creation
            play
            youtube
          }
        }
      }
    }
  }
`
