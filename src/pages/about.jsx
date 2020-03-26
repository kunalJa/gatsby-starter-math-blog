import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = ({ data: { site, allMdx } }) => {
  return (
    <Layout
      title={site.siteMetadata.title}
      noSEO
      latestSlug={allMdx.edges[0].node.fields.slug}
    >
      <SEO title="About" />
      <div className="flex flex-row-l flex-column w-75-l ml-auto mr-auto">
        <div className="flex flex-column ml-auto mr-auto mt5 mt6-l mr4-l">
          <Image
            className="w5 h5 br-100 mb3"
            particularImage="aboutHeadshot"
            alt="Picture of me"
          />
          <div className="w5 mt2 bg-light-red">
            <h2 className="white tc mv2 pa1 f2">{site.siteMetadata.author}</h2>
          </div>
        </div>

        <div className="flex items-center w-75 w-50-l ml-auto mr-auto mt6-l mt4 tc">
          <div>
            <p className="f3">{site.siteMetadata.personalDescription}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        personalDescription: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        author
        personalDescription
      }
    }

    allMdx(limit: 1, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`
