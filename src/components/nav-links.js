import React from "react"
import { Link } from "gatsby"

import navLinkData from "./nav-link-data"
import { links } from "./nav-links.module.styl"

const NavLinks = () => (
  <div className={links}>
    {navLinkData.map(({ link, text }, index) => (
      <Link key={"nav-link-" + index} to={link}>
        <p>{text}</p>
      </Link>
    ))}
  </div>
)

export default NavLinks
