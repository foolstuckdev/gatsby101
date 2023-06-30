import React from "react";
import { Link, graphql } from "gatsby";
import Home from "./../../components/Home";


const containerStyle = {
  display: "grid",
  gridTemplateColumn: "1fr 1fr 1fr",
  gridGap: "4em",
  margin: "4em 1em"
}

export default function Markdown ({ data }) {
    const projects =  data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Home>
          <h2>Blog Home</h2>
          {
            projects.map(project => (
              <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                  <div style={containerStyle}>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
              </Link>
            ))
          }
          <p>{contact}</p>
        </Home>
      )
}

export const query = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark (sort: {frontmatter: {title: DESC}}) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`