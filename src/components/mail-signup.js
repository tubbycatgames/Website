import React, { Component } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"

import styles from "./mail-signup.module.styl"

export default class MailSignup extends Component {
  state = {
    email: "",
    error: "",
    result: "",
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
      error: "",
      result: "",
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const response = await addToMailChimp(this.state.email)

    if (response.result === "success") {
      this.setState({ error: "", result: response.msg })
    } else if (response.result === "error") {
      if (response.msg.includes("is already subscribed")) {
        this.setState({ error: "You are already subscribed!", result: "" })
      } else {
        this.setState({ error: response.msg, result: "" })
      }
    }
  }

  render() {
    const error = this.state.error ? (
      <p className={styles.error}>{this.state.error}</p>
    ) : null
    const result = this.state.result ? (
      <p className={styles.result}>{this.state.result}</p>
    ) : null

    return (
      <div>
        <h2 className={styles.header}>
          Join our mailing list for updates!
        </h2>
        {error}
        {result}
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            name="email"
            onChange={this.handleEmailChange}
            placeholder="Enter your email here"
            required
            type="email"
            value={this.state.email}
          />
          <button className={styles.button} type="submit">
            Sign up!
          </button>
        </form>
      </div>
    )
  }
}
