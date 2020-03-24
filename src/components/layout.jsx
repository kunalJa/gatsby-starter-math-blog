import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar/navbar"
import SEO from "./seo"

const Layout = ({ children, title, noSEO }) => {
  return (
    <div className="vh-100">
      {() => {
        if (!noSEO) {
          return <SEO title={title} />
        }
        return null
      }}
      <header>
        <Navbar siteTitle={title} />
      </header>
      <main id="main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  noSEO: PropTypes.bool,
}

Layout.defaultProps = {
  noSEO: false,
}

export default Layout
