import React from "react"
import { graphql } from "gatsby"

import GameEntry from "../components/game-entry"
import Layout from "../components/layout"

import styles from "./games.module.styl"

export default ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge, index) => {
    return <GameEntry {...edge.node.frontmatter} key={"gameEntry" + index} />
  })
  return (
    <Layout>
      <h1 className={styles.header}>Games</h1>
      {entries}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "game" } } }
      sort: { fields: frontmatter___creation, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            creation
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
        }
      }
    }
  }
`
