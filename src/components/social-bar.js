import React from "react"

import styles from "./social-bar.module.styl"
import socialData from "./social-bar-data"

export default () => {
  const icons = socialData.map(({alt, href, src}, index) => {
    return <a href={href} key={`socialIcon${index}`}>
      <img alt={alt} className={styles.icon} src={src} />
    </a>;
  })

  return <div className={styles.bar}>{icons}</div>
}
