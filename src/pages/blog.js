import React from "react"
import { graphql, Link } from "gatsby"

import MarkdownEntryList from "../components/markdown-entry-list"

const BlogPost = ({ title, slug }) => {
  return (
    <Link to={slug}>
      <h1>{title}</h1>
    </Link>
  )
}

const BlogPostList = MarkdownEntryList(BlogPost)

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
            title
          }
        }
      }
    }
  }
`
