import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBox from "../components/herobox/heroBox"

const IndexPage = ({ data: { allMdx, site } }) => {
  const socialEnums = []
  const socialLinks = []

  Object.entries(site.siteMetadata.socialLinks).forEach(([_, link], i) => {
    if (link !== 0) {
      socialEnums.push(i)
      socialLinks.push(link)
    }
  })

  return (
    <Layout title={site.siteMetadata.title}>
      <HeroBox
        siteTitle={site.siteMetadata.title}
        author={site.siteMetadata.author}
        links={socialLinks}
        socialEnums={socialEnums}
      />
      <hr className="mw5 mv3" />
      <section
        className="db center mw5 mw6-l mv4"
      >
        <ul className="ma0 pa0">
          {allMdx.edges.sort((a, b) => {
            return new Date(a.node.frontmatter.date) < new Date(b.node.frontmatter.date)
          }).map(({ node }, id) => {
            return (
              <li className="list mb4 dim" key={id}>
                <Link to={node.fields.slug} className="no-underline">
                  <h2 className="f3 fw6 mv2 light-red">{node.frontmatter.title}</h2>
                  <h4 className="f6 fw2 mv1 black">{node.frontmatter.date}</h4>
                </Link>
                <p className="f5 mt0">{node.frontmatter.description}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        socialLinks: PropTypes.any.isRequired,
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

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author

        socialLinks {
          facebook
          gatsby
          github
          imdb
          linkedin
          reddit
          slack
          spotify
          skype
          telegram
          twitter
          whatsapp
        }
      }
    }

    allMdx {
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
