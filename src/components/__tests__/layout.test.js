import React from "react"
import renderer from "react-test-renderer"

import mockSiteQuery from "../../test-utils/mock-site-query"

import Layout from "../layout"

describe("Layout", () => {
  beforeEach(() => {
    mockSiteQuery()
  })

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
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
