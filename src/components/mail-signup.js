import React, { Component } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"

import styles from "./mail-signup.module.styl"

export const MailForm = ({ email, error, onEmailChange, onSubmit, result }) => {
  const errorText = error ? <p className={styles.error}>{error}</p> : null
  const resultText = result ? <p className={styles.result}>{result}</p> : null

  return (
    <div>
      <h2 className={styles.header}>Join our mailing list for game updates!</h2>
      {errorText}
      {resultText}
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          aria-label="Mailing List Signup Email"
          className={styles.input}
          name="email"
          onChange={onEmailChange}
          placeholder="Enter your email here"
          required
          type="email"
          value={email}
        />
        <button className={styles.button} type="submit">
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

    const response = await addToMailChimp(this.state.email)

    if (response.result === "success") {
      this.setState({ error: "", result: response.msg })
    } else if (response.result === "error") {
      const errorText = response.msg.includes("is already subscribed")
        ? "You are already subscribed!"
        : response.msg
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
