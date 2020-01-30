import React from "react"

import Header from "./header"
import Helmet from "./helmet"

export default ({ children }) => {
  return (
    <div>
      <Helmet />
      <Header />
      {children}
    </div>
  )
}
