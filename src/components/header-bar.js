import React from "react"

import HeaderBarIcon from "./header-bar-icon"
import NavLinks from "./nav-links"
import headerBarData from "./header-bar-data"

import styles from "./header-bar.module.styl"

const HeaderIcons = () =>
  headerBarData.map((data, index) => (
    <HeaderBarIcon {...data} key={`header-bar-icon-${index}`} />
  ))

const HeaderBar = () => (
  <div className={styles.header}>
    <div className={styles.icons}>
      <HeaderIcons />
    </div>
    <NavLinks />
  </div>
)

export default HeaderBar
