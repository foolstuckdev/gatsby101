import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
import Home from "../components/Home"


const flexColumn = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid black"
}

const flexRow = {
  display: "flex",
  flexDirection: "row",
  border: "1px solid red"
}

const navStyle = {
  height: "20vh",
  backgroundColor: "#dfdfdf"
}



const IndexPage: React.FC<PageProps> = ({ data }) => {
  const items = data.showcase.nodes[0].items;
  return (
    <Home>
      <main>
        {items.map(item => (
          <Link to={item.link} key={item.link}>
            <section>
              <p>{item.title}</p>
            </section>
          </Link>
        ))}
      </main>
    </Home>
  )
}

export const query = graphql`
  query HomeQuery {
    showcase: allDataYaml {
      nodes {
        items {
          description
          image
          link
          section
          source
          tags
          title
        }
      }
    }
  }
`

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: {eq:"icon.png"}){
//       childImageSharp {
//         gatsbyImageData(layout: FIXED, width: 24)
//       }
//     }
//   }
// `

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
