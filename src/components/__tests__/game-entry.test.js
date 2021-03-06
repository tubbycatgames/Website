import React from "react"
import renderer from "react-test-renderer"

import GameEntry from "../game-entry"

const icon = {
  childImageSharp: {
    fluid: {
      aspectRatio: 1,
      sizes: "(max-width: 300px) 100vw, 300px",
      src: "image",
      srcSet: "image2",
    },
  },
}

describe("Game Entry", () => {
  it("renders a game entry for a game listing", () => {
    const tree = renderer.create(
      <GameEntry
        creation="2004-09-22"
        description="What a game!"
        icon={icon}
        name="Da Game"
        play="itch.io"
        slug="/my/internal/link.html"
        source="github.com"
        video="youtube.com"
      />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("should omit optional fields", () => {
    const tree = renderer.create(
      <GameEntry
        creation="2004-09-22"
        description="What a game!"
        icon={icon}
        name="Da Game"
        slug="/my/internal/link.html"
      />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
