import React from "react"
import { graphql } from "gatsby"

import BlogPostSummary from "../components/blog-post-summary"
import MarkdownEntryList from "../components/markdown-entry-list"

const BlogPostList = MarkdownEntryList(BlogPostSummary)

export default ({ data }) => <BlogPostList data={data} title="Blog Posts" />

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
            creation
            title
          }
        }
      }
    }
  }
`
