import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { icon } from "./header-bar-icon.module.styl"

const HeaderBarIcon = ({ alt, href, src, style }) => (
  <OutboundLink href={href}>
    <img alt={alt} className={style || icon} src={src} />
  </OutboundLink>
)

export default HeaderBarIcon
