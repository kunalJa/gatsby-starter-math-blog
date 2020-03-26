import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout"
import SEO from "../seo"

export default function BlogPost({ data: { allMdx, mdx, site } }) {
  return (
    <Layout
      title={site.siteMetadata.title}
      noSEO
      latestSlug={allMdx.edges[0].node.fields.slug}
    >
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <div className="relative">
        <div>
          <header className="white bg-light-red dn-l pa3">
            <h1 className="f1 lh-title mb0">{mdx.frontmatter.title}</h1>
            <h5 className="f4 lh-copy mb0 mt1">{mdx.frontmatter.date}</h5>
          </header>
          <header className="ph3 dn db-l w-80">
            <h1 className="f1 fw9 ma0 lh-title">{mdx.frontmatter.title}</h1>
            <h5 className="f3 lh-copy mb4 mt1">{mdx.frontmatter.date}</h5>
          </header>
          <article className="pa4 mt2 w-80-l">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
        <div className="absolute dn db-l w-20-l right-0 top-0 overflow-hidden">
          <div className="white bg-light-red pa3">
            <h1 className="f2 mb3">Recent Posts</h1>
            <ul className="ma0 pa0">
              {allMdx.edges.map(({ node }, id) => {
                return (
                  <li className="list mb4" key={id}>
                    <Link
                      to={node.fields.slug}
                      className="no-underline dim white"
                    >
                      <h2 className="f5 fw6 mv1">{node.frontmatter.title}</h2>
                      <h4 className="f6 fw2 mv1">{node.frontmatter.date}</h4>
                      <p className="f6 mv1">{node.frontmatter.description}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    mdx: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.any.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        description
      }
    }

    allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
