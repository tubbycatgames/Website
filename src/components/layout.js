import React from "react"
import { StaticQuery, graphql } from "gatsby"

import HeaderBar from "./header-bar"
import Helmet from "./helmet"
import MailSignup from "./mail-signup"
import styles from "./layout.module.styl"

export const Layout = ({ children, siteMetadata }) => (
  <div className={styles.container}>
    <Helmet {...siteMetadata} />
    <HeaderBar />
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>
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

export default (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <Layout siteMetadata={data.site.siteMetadata} {...props} />
    )}
  />
)
