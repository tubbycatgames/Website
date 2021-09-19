import React from "react"

import Layout from "./layout"
import { entries as entriesStyle } from "./markdown-entry-list.module.styl"

const MarkdownEntryList = (EntryComponent) => {
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
        <h1 className>{title}</h1>
        <div className={entriesStyle}>{entries}</div>
      </Layout>
    )
  }
}

export default MarkdownEntryList
