import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from "./game-entry.module.styl"

const GameEntry = ({ description, icon, name, play, slug, source, video }) => {
  const sourceEntry = source ? (
    <li>
      <a href={source}>Source Code</a>
    </li>
  ) : null
  const videoEntry = video ? (
    <li>
      <a href={video}>Playthrough Video</a>
    </li>
  ) : null

  return (
    <div className={styles.container}>
      <Link to={slug}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <p>{description}</p>
      <div className={styles.specifics}>
        <Link to={slug} className={styles.icon}>
          <Img alt={`${name} Icon`} fluid={icon.childImageSharp.fluid} />
        </Link>
        <ul className={styles.links}>
          <li>
            <a href={play}>Play the Game!</a>
          </li>
          {sourceEntry}
          {videoEntry}
        </ul>
      </div>
    </div>
  )
}

export default GameEntry
