import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data: { site, allMdx } }) => (
  <Layout
    title={site.siteMetadata.title}
    noSEO
    latestSlug={allMdx.edges[0].node.fields.slug}
  >
    <SEO title="404: Not found" />
    <div className="tc f1 f-subheadline-l">
      <h1>404 NOT FOUND</h1>
      <p>
        <span role="img" aria-label="Sad Face">
          😢
        </span>
      </p>
    </div>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
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

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
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
