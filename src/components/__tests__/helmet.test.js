import React from "react"
import renderer from "react-test-renderer"

import mockSiteQuery from "../../test-utils/mock-site-query"

import Helmet from "../helmet"

describe("Helmet", () => {
  beforeEach(() => {
    mockSiteQuery()
  })

  it("renders without throwing errors", () => {
    // Avoids a deprecation warning from helmet
    console.warn = jest.fn()

    renderer.create(<Helmet />)
  })
})
