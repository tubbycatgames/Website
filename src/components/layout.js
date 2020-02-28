import React from "react"

import HeaderBarIcon from "./header-bar-icon"
import Helmet from "./helmet"
import MailSignup from "./mail-signup"
import headerBarData from "./header-bar-data"
import styles from "./layout.module.styl"

const HeaderIcons = () =>
  headerBarData.map((data, index) => (
    <HeaderBarIcon {...data} key={`header-bar-icon-${index}`} />
  ))

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Helmet />
    <div className={styles.header}>
      <HeaderIcons />
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>
      <MailSignup />
    </div>
  </div>
)

export default Layout
