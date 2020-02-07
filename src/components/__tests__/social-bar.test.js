import React from "react"
import renderer from "react-test-renderer"

import SocialBar from "../social-bar"

describe("Social Bar", () => {
  it("renders a set of linked up social icons", () => {
    const tree = renderer.create(<SocialBar />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
