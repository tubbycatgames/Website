import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import styles from "./games.module.styl"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }, index) => {
    return (
      <Link key={"blog-post" + index} to={node.fields.slug}>
        <h1>{node.frontmatter.title}</h1>
      </Link>
    )
  })
  return (
    <Layout>
      <h1 className={styles.header}>Posts</h1>
      <div className={styles.posts}>{posts}</div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog-post" } } }
      sort: { fields: frontmatter___creation, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
