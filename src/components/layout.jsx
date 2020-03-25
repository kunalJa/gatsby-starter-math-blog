import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar/navbar"
import SEO from "./seo"

const Layout = ({ children, title, noSEO, latestSlug }) => {
  return (
    <div className="vh-100">
      {!noSEO && <SEO title={title} />}
      <header>
        <Navbar siteTitle={title} latestSlug={latestSlug} />
      </header>
      <main id="main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  latestSlug: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  noSEO: PropTypes.bool,
}

Layout.defaultProps = {
  noSEO: false,
}

export default Layout
