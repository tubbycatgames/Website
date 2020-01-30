import React from "react"

import SocialBar from "./social-bar"

import styles from "./header.module.styl"

export default () => {
  return (
    <div className={styles.header}>
      <SocialBar />
    </div>
  )
}
