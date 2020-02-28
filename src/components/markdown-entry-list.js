import React from "react"

import Layout from "./layout"
import styles from "./markdown-entry-list.module.styl"

const MarkdownEntryList = EntryComponent => {
  return ({ data, title }) => {
    const entries = data.allMarkdownRemark.edges.map(({ node }, index) => {
      const props = {
        ...node.fields,
        ...node.frontmatter,
        key: "markdown-entry-" + index,
      }
      return <EntryComponent {...props} />
    })

    return (
      <Layout>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.entries}>{entries}</div>
      </Layout>
    )
  }
}

export default MarkdownEntryList
