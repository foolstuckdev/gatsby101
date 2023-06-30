import React from "react"
import Home from "../components/Home"
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter

  return (
    <Home>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Home>
  )
}
 
export default ProjectDetails

export const projectDetailsQuery = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
      }
    }
  }
`