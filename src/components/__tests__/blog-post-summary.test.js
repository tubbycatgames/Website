import React from "react"
import renderer from "react-test-renderer"

import BlogPostSummary from "../blog-post-summary"

describe("Blog Post", () => {
  it("renders a summary for a blog post", () => {
    const tree = renderer.create(
      <BlogPostSummary creation="2004-09-22" slug="A Page" title="A Post!" />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
