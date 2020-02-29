import React from "react"
import renderer from "react-test-renderer"

import { Layout } from "../layout"

describe("Layout", () => {
  it("renders all site sections and children", () => {
    // Avoids a deprecation warning from helmet
    console.warn = jest.fn()

    const tree = renderer.create(
      <Layout>
        <div>
          <t>Some Layout Content</t>
        </div>
      </Layout>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
