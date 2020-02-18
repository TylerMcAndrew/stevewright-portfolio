import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="Highly-skilled-tradesperson-with-the-ability-to-adapt-and-adjust-to-new-projects">
            Highly skilled tradesperson with the ability to adapt and adjust to new projects
          </h2>

          <p>
           After more than 20 years of working for large corporate companies it all came to a halt when the termination of Havelock came,
           I went job hunting for months to try and grasp onto a new career and It wasnt working for me, My mental health had detiorated
           and I just wasnt finding the joy in it anymore. That's when i'd decided enough was enough and it was time to do something that
           made me happy, Throughout the years i've been creating and thats where I found the most joy so i thought why not make a career
           out of it? It's not been easy going and theres times where I thought it wasnt going anywhere but it's finally starting to piece
           together.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
