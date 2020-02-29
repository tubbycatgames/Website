import React from "react"
import renderer from "react-test-renderer"

import Helmet from "../helmet"

describe("Helmet", () => {
  it("renders without throwing errors", () => {
    // Avoids a deprecation warning from helmet
    console.warn = jest.fn()

    renderer.create(
      <Helmet author="Phil" description="A Dude" title="ArchEarl" />
    )
  })
})
