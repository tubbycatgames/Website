import React, { Component } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"

import {
  button as buttonStyle,
  error as errorStyle,
  form,
  header,
  input as inputStyle,
  result as resultStyle,
} from "./mail-signup.module.styl"

export const MailForm = ({ email, error, onEmailChange, onSubmit, result }) => {
  const errorText = error ? <p className={errorStyle}>{error}</p> : null
  const resultText = result ? <p className={resultStyle}>{result}</p> : null

  return (
    <div>
      <h2 className={header}>Join our mailing list for game updates!</h2>
      {errorText}
      {resultText}
      <form className={form} onSubmit={onSubmit}>
        <input
          aria-label="Mailing List Signup Email"
          className={inputStyle}
          name="email"
          onChange={onEmailChange}
          placeholder="Enter your email here"
          required
          type="email"
          value={email}
        />
        <button className={buttonStyle} type="submit">
          Sign up!
        </button>
      </form>
    </div>
  )
}

export default class MailSignup extends Component {
  state = {
    email: "",
    error: "",
    result: "",
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      error: "",
      result: "",
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { result, msg } = await addToMailChimp(this.state.email)

    if (result === "success") {
      this.setState({ error: "", result: msg })
    } else if (result === "error") {
      const error = msg.includes("is already subscribed")
        ? "You are already subscribed!"
        : msg
      this.setState({ error, result: "" })
    }
  }

  render() {
    return (
      <MailForm
        email={this.state.email}
        error={this.state.error}
        onEmailChange={this.handleEmailChange}
        onSubmit={this.handleSubmit}
        result={this.state.result}
      />
    )
  }
}
