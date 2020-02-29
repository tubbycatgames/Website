import React from "react"
import renderer from "react-test-renderer"

import NavLinks from "../nav-links"

describe("Nav Links", () => {
  it("renders app nav links", () => {
    const tree = renderer.create(<NavLinks />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
