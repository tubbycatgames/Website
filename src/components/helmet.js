import React from "react"
import { Helmet } from "react-helmet"

const TCGHelmet = ({ author, description, title }) => (
  <Helmet
    meta={[
      {
        name: "description",
        content: description,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:creator",
        content: author,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:title",
        content: title,
      },
    ]}
    title={title}
  />
)

export default TCGHelmet
