import React from "react"
import renderer from "react-test-renderer"

import MailSignup, { MailForm } from "../mail-signup"

describe("Mail Signup", () => {
  it("renders a mailing list signup form", () => {
    const tree = renderer.create(<MailSignup />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders a mailing form with an error", () => {
    const tree = renderer.create(<MailForm error={"Ooops"} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders a mailing form with a result", () => {
    const tree = renderer.create(<MailForm result={"Worked!"} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
