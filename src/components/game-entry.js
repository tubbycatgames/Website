import React from "react"

import styles from "./game-entry.module.styl"

const GameEntry = ({ name, source, creation, play, youtube }) => {
  return (
    <div>
      <a href={play}>
        <h2>{name}</h2>
      </a>
      <ul className={styles.list}>
        <li>
          <a href={source}>Source Code</a>
        </li>
        <li>
          <a href={youtube}>Playthrough Video</a>
        </li>
      </ul>
    </div>
  )
}

export default GameEntry
