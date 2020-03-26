import React from "react"
import PropTypes from "prop-types"

const SVG = ({ path, fill, width, className, height, viewBox }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={path} fill={fill} />
    </svg>
  )
}

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
}

SVG.defaultProps = {
  fill: "#fff",
  width: "100%",
  className: "",
  height: "100%",
  viewBox: "0 0 24 24",
}

export default SVG
