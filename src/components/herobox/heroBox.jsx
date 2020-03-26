import React from "react"
import PropTypes from "prop-types"

import SocialList from "../sociallist/socialList"

const HeroBox = ({ siteTitle, author, links, socialEnums }) => {
  return (
    <div
      className="center mw5 mw7-l pa2"
      style={{
        overflowWrap: "break-word",
        wordWrap: "break-word",
      }}
    >
      <h1 className="f1 f-subheadline-l fw8 tc-l tracked ma0">
        {siteTitle.split("").map((c, i) => {
          const ascii = c.charCodeAt(0)
          const alphabetical =
            (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)
          return alphabetical ? (
            <span key={i}>{c}</span>
          ) : (
            <span key={i} className="light-red">
              {c}
            </span>
          )
        })}
      </h1>
      <h3 className="f4 fw2 tr mr6-l">By: {author}</h3>
      {[
        ...Array(Math.ceil(Math.min(links.length, socialEnums.length) / 3)),
      ].map((_, i) => {
        return (
          <SocialList
            key={socialEnums[i]}
            links={links.slice(i * 3, (i + 1) * 3)}
            socialEnums={socialEnums.slice(i * 3, (i + 1) * 3)}
          />
        )
      })}
    </div>
  )
}

HeroBox.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
  socialEnums: PropTypes.arrayOf(PropTypes.number),
}

HeroBox.defaultProps = {
  links: [],
  socialEnums: [],
}

export default HeroBox
