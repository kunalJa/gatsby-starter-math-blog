import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div className="flex flex-column">
      <div>
        <Link to="/">Go Home</Link>
      </div>
      <div>
        <Link to="/page-3/">Go to page 3</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
