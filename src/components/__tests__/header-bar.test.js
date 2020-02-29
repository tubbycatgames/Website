import React from "react"
import renderer from "react-test-renderer"

import HeaderBar from "../header-bar"

describe("Header Bar", () => {
  it("renders the full header bar", () => {
    const tree = renderer.create(<HeaderBar />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
