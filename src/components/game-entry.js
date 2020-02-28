import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from "./game-entry.module.styl"

const OptionalLink = ({ children, href }) =>
  href ? (
    <a href={href}>
      <p>{children}</p>
    </a>
  ) : null

const GameEntry = ({ description, icon, name, play, slug, source, video }) => (
  <div className={styles.container}>
    <Link to={slug}>
      <h2>{name}</h2>
    </Link>
    <p className={styles.description}>{description}</p>
    <div className={styles.links}>
      <OptionalLink href={play}>Play the Game!</OptionalLink>
      <OptionalLink href={source}>Source Code</OptionalLink>
      <OptionalLink href={video}>Playthrough Video</OptionalLink>
    </div>
    <Link to={slug}>
      <Img alt={`${name} Icon`} fluid={icon.childImageSharp.fluid} />
    </Link>
  </div>
)

export default GameEntry
