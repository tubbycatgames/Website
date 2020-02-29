import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import styles from "./blog-post.module.styl"

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
