import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = ({ siteTitle, latestSlug }) => {
  return (
    <nav className="w-100 ma0 ph2 pb2 pt1 bg-dark-gray overflow-hidden f5 f4-ns">
      <div className="flex flex-row pa0 ma0">
        <div className="fl mr-auto">
          <Link
            to="/"
            className="no-underline white  hover-light-red"
            style={{
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            {siteTitle}
          </Link>
        </div>
        <div className="fr ml-auto">
          <div className="flex flex-row">
            <Link to="/about" className="no-underline white hover-light-red">
              About
            </Link>
            <p className="white mv0 mh2">|</p>
            <Link
              to={latestSlug}
              className="no-underline white hover-light-red"
            >
              Latest Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  latestSlug: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
