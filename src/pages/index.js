import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Page = ({ data }) => (
  <Layout>
    <span dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export default Page

export const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
    }
  }
`
