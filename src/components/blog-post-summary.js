import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import styles from "./blog-post-summary.module.styl"

const BlogPostSummary = ({ creation, title, slug }) => (
  <Link to={slug}>
    <h1 className={styles.title}>{title}</h1>
    <small>{moment(creation).format("MMMM DD, YYYY")}</small>
  </Link>
)

export default BlogPostSummary
