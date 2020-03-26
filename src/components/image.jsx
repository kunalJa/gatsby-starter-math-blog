import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const useFluidImage = () => {
  const images = useStaticQuery(graphql`
    fragment FluidImage on File {
      childImageSharp {
        fluid(quality: 70, maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      favicon: file(relativePath: { eq: "icon.png" }) {
        ...FluidImage
      }

      aboutHeadshot: file(relativePath: { eq: "myface.jpg" }) {
        ...FluidImage
      }

      hero1: file(relativePath: { eq: "herobox_example_1.png" }) {
        ...FluidImage
      }

      hero2: file(relativePath: { eq: "herobox_example_2.png" }) {
        ...FluidImage
      }

      moscow: file(relativePath: { eq: "pixabay_moscow.jpg" }) {
        ...FluidImage
      }
    }
  `)

  return images
}

const Image = ({ particularImage, className, alt }) => {
  const images = useFluidImage()
  let fluid
  switch (particularImage) {
    case "favicon":
      fluid = images.favicon.childImageSharp.fluid
      break
    case "aboutHeadshot":
      fluid = images.aboutHeadshot.childImageSharp.fluid
      break
    case "hero1":
      fluid = images.hero1.childImageSharp.fluid
      break
    case "hero2":
      fluid = images.hero2.childImageSharp.fluid
      break
    case "moscow":
      fluid = images.moscow.childImageSharp.fluid
      break
    default:
      return null
  }

  return <Img className={className} fluid={fluid} alt={alt} />
}

Image.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  particularImage: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Image.defaultProps = {
  className: ``,
}

export default Image
