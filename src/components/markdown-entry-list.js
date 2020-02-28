import React from "react"

import Layout from "./layout"
import styles from "./markdown-entry-list.module.styl"

export default EntryComponent => {
  return ({ data, title }) => {
    const entries = data.allMarkdownRemark.edges.map(({ node }, index) => (
      <EntryComponent
        {...node.fields}
        {...node.frontmatter}
        key={"markdown-entry-" + index}
      />
    ))

    return (
      <Layout>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.entries}>{entries}</div>
      </Layout>
    )
  }
}
