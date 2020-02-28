import React from "react"
import { graphql } from "gatsby"

import GameEntry from "../components/game-entry"
import Layout from "../components/layout"

import styles from "./games.module.styl"

export default ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map(({ node }, index) => {
    return (
      <GameEntry
        {...node.fields}
        {...node.frontmatter}
        key={"game-entry" + index}
      />
    )
  })
  return (
    <Layout>
      <h1 className={styles.header}>Games</h1>
      <div className={styles.entries}>{entries}</div>
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
        }
      }
    }
  }
`
