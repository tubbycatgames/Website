import React from "react"
import { StaticQuery, graphql } from "gatsby"

import HeaderBar from "./header-bar"
import Helmet from "./helmet"
import MailSignup from "./mail-signup"
import { container, content, footer } from "./layout.module.styl"

export const Layout = ({ children, siteMetadata }) => (
  <div className={container}>
    <Helmet {...siteMetadata} />
    <HeaderBar />
    <div className={content}>{children}</div>
    <div className={footer}>
      <MailSignup />
    </div>
  </div>
)

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

const QueryingLayout = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <Layout siteMetadata={data.site.siteMetadata} {...props} />
    )}
  />
)

export default QueryingLayout
