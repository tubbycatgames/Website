import React from "react"
import renderer from "react-test-renderer"

import MailSignup from "../mail-signup"

describe("Mail Signup", () => {
  it("renders a mailing list signup form", () => {
    const tree = renderer.create(<MailSignup />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
