import React from "react"
import renderer from "react-test-renderer"

import HeaderBarIcon from "../header-bar-icon"

describe("Header Bar Icon", () => {
  it("renders a header bar icon", () => {
    const tree = renderer.create(
      <HeaderBarIcon
        alt="Some Alt Text!"
        href="Some madeup place"
        src="some-image.jpg"
        style="A style override!"
      />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
