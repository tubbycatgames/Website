import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  container,
  description as descStyle,
  links,
  name as nameStyle,
} from "./game-entry.module.styl"

const OptionalLink = ({ children, href }) =>
  href ? (
    <OutboundLink href={href}>
      <p>{children}</p>
    </OutboundLink>
  ) : null

const GameEntry = ({ description, icon, name, play, slug, source, video }) => (
  <div className={container}>
    <Link to={slug}>
      <h1 className={nameStyle}>{name}</h1>
    </Link>
    <p className={descStyle}>{description}</p>
    <div className={links}>
      <OptionalLink href={play}>Play!</OptionalLink>
      <OptionalLink href={source}>Inspect!</OptionalLink>
      <OptionalLink href={video}>Watch!</OptionalLink>
    </div>
    <Link to={slug}>
      <Img alt={`${name} Icon`} fluid={icon.childImageSharp.fluid} />
    </Link>
  </div>
)

export default GameEntry
