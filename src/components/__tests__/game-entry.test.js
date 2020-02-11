import React from "react"
import renderer from "react-test-renderer"

import GameEntry from "../game-entry"

describe("Game Entry", () => {
  it("renders a game entry for a game listing", () => {
    const tree = renderer.create(
      <GameEntry
        creation="2004-09-22"
        name="Da Game"
        play="itch.io"
        source="github.com"
        youtube="youtube.com"
      />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
