import React from "react"
import { graphql } from "gatsby"

import GameEntry from "../components/game-entry"
import MarkdownEntryList from "../components/markdown-entry-list"

const GameEntryList = MarkdownEntryList(GameEntry)

export default ({ data }) => <GameEntryList data={data} title="Games" />

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
