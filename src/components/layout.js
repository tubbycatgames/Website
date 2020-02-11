import React from "react"

import Helmet from "./helmet"
import styles from "./layout.module.styl"
import MailSignup from "./mail-signup"
import headerBarData from "./header-bar-data"

const Layout = ({ children }) => {
  const headerIcons = headerBarData.map(({ alt, href, src, style }, index) => {
    return (
      <a href={href} key={`headerBarIcon${index}`}>
        <img alt={alt} className={style || styles.icon} src={src} />
      </a>
    )
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
