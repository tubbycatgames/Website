import React from "react"

import styles from "./header-bar-icon.module.styl"

const HeaderBarIcon = ({ alt, href, src, style }) => {
  return (
    <a href={href}>
      <img alt={alt} className={style || styles.icon} src={src} />
    </a>
  )
}

export default HeaderBarIcon
