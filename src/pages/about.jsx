import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const selfie = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "myface.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div className="flex flex-row-l flex-column w-75-l ml-auto mr-auto">
        <div className="flex flex-column ml-auto mr-auto mt5 mt6-l mr4-l">
          <Img className="w5 h5 br-100 bg-light-red mb3" fluid={selfie.placeholderImage.childImageSharp.fluid} alt="Picture of me" />
          <div className="w5 mt2 bg-light-red">
            <h2 className="white tc mv2 pa1 f2">Your Name</h2>
          </div>
        </div>

        <div className="flex items-center w-75 w-50-l ml-auto mr-auto mt6-l mt4 tc">
          <div>
            <p className="f3">
              I am a student at
              <strong className="light-red"> The University of X</strong>.
              Previous intern @CompanyX and @CompanyY.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
