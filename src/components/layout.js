import React from "react"

import HeaderBarIcon from "./header-bar-icon"
import Helmet from "./helmet"
import MailSignup from "./mail-signup"
import headerBarData from "./header-bar-data"
import styles from "./layout.module.styl"

const Layout = ({ children }) => {
  const headerIcons = headerBarData.map((data, index) => {
    return <HeaderBarIcon {...data} key={`header-bar-icon-${index}`} />
  })

  return (
    <div className={styles.container}>
      <Helmet />
      <div className={styles.header}>{headerIcons}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <MailSignup />
      </div>
    </div>
  )
}

export default Layout
