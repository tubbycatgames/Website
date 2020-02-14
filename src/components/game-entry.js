import React from "react"
import Img from "gatsby-image"

import styles from "./game-entry.module.styl"

const GameEntry = ({ description, icon, name, play, source, video }) => {
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
      <a href={play}>
        <h2 className={styles.name}>{name}</h2>
      </a>
      <p>{description}</p>
      <div className={styles.specifics}>
        <a href={play}>
          <Img alt={`${name} Icon`} fixed={icon.childImageSharp.fixed} />
        </a>
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
