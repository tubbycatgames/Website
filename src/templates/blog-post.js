import React from "react"
import { graphql } from "gatsby"

import BlogPostSummary from "../components/blog-post-summary"
import Layout from "../components/layout"

import { content } from "./blog-post.module.styl"


const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { creation, title },
      html,
    },
  },
}) => (
  <Layout>
    <BlogPostSummary creation={creation} title={title} />
    <div className={content} dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        creation
        title
      }
    }
  }
`
