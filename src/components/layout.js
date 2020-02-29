import React from "react"
import { StaticQuery, graphql } from "gatsby"

import HeaderBarIcon from "./header-bar-icon"
import Helmet from "./helmet"
import MailSignup from "./mail-signup"
import headerBarData from "./header-bar-data"
import styles from "./layout.module.styl"

const HeaderIcons = () =>
  headerBarData.map((data, index) => (
    <HeaderBarIcon {...data} key={`header-bar-icon-${index}`} />
  ))

export const Layout = ({ children, siteMetadata }) => (
  <div className={styles.container}>
    <Helmet {...siteMetadata} />
    <div className={styles.header}>
      <HeaderIcons />
    </div>
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

export default props => (
  <StaticQuery
    query={query}
    render={data => <Layout siteMetadata={data.site.siteMetadata} {...props} />}
  />
)
