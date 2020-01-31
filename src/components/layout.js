import React from "react"
import Helmet from "./helmet"
import SocialBar from "./social-bar"
import styles from "./layout.module.styl"

export default ({ children }) => {
  return (
    <div className={styles.container}>
      <Helmet />
      <div className={styles.header}>
        <SocialBar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
