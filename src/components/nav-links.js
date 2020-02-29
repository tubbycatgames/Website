import React from "react"
import { Link } from "gatsby"

import styles from "./nav-links.module.styl"

const NavLinks = () => (
  <div className={styles.links}>
    <Link to="/">
      <p>About</p>
    </Link>
    <Link to="/games">
      <p>Games</p>
    </Link>
    <Link to="/blog">
      <p>Blog</p>
    </Link>
  </div>
)

export default NavLinks
