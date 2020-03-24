/* eslint-disable react/prop-types */
import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout"
import SEO from "../seo"

export default function BlogPost({ data: { allMdx, mdx, site } }) {
  return (
    <Layout title={site.siteMetadata.title} noSEO>
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
              {allMdx.edges.sort((a, b) => {
                return new Date(a.node.frontmatter.date) < new Date(b.node.frontmatter.date)
              }).map(({ node }, id) => {
                return (
                  <li className="list mb4" key={id}>
                    <Link to={node.fields.slug} className="no-underline hover-purple white">
                      <h2 className="f5 fw6 mv1">{node.frontmatter.title}</h2>
                      <h4 className="f6 fw2 mv1">{node.frontmatter.date}</h4>
                    </Link>
                    <p className="f6 mv1">{node.frontmatter.description}</p>
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

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(id: {eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }

    allMdx(limit: 5) {
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
