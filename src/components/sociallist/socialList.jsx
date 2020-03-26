import React from "react"
import PropTypes from "prop-types"
import SocialButton from "../socialbutton/socialButton"

const SocialList = ({ width, fill, links, socialEnums }) => {
  return (
    <section className="mw5 center flex justify-around mv3">
      {socialEnums.map((socialEnum, id) => {
        return (
          <div key={socialEnum}>
            <SocialButton
              width={width}
              fill={fill}
              link={links[id]}
              socialEnum={socialEnum}
            />
          </div>
        )
      })}
    </section>
  )
}

SocialList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  socialEnums: PropTypes.arrayOf(PropTypes.number).isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
}

SocialList.defaultProps = {
  fill: `#000`,
  width: `3em`,
}

export default SocialList
