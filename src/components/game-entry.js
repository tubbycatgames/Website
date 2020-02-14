import React from "react"
import Img from "gatsby-image"

import styles from "./game-entry.module.styl"

const GameEntry = ({ description, icon, name, play, source, youtube }) => {
  return (
    <div className={styles.container}>
      <a href={play}>
        <h2 className={styles.name}>{name}</h2>
      </a>
      <p>{description}</p>
      <div className={styles.specifics}>
        <a href={play}>
          <Img
            alt={`${name} Icon`}
            fixed={icon.childImageSharp.fixed}
          />
        </a>
        <ul className={styles.links}>
          <li>
            <a href={play}>Play the Game!</a>
          </li>
          <li>
            <a href={source}>Source Code</a>
          </li>
          <li>
            <a href={youtube}>Playthrough Video</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GameEntry
