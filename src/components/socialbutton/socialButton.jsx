import React from "react"
import PropTypes from "prop-types"

import SVG from "../svg"
import { icons } from "./icons"

const SocialButton = ({ link, width, fill, socialEnum }) => {
  return (
    <a href={link}>
      <SVG
        className="grow"
        width={width}
        fill={fill}
        path={icons[socialEnum]}
      />
    </a>
  )
}

SocialButton.propTypes = {
  link: PropTypes.string,
  socialEnum: PropTypes.number.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
}

SocialButton.defaultProps = {
  link: "/",
  fill: "#000",
  width: "3em",
}

export default SocialButton
