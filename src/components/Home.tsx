import React from 'react'
import NavBar from './NavBar'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

const Home = ({children}) => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <NavBar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>{ copyright }</p>
      </footer>
    </div>
  )
}

export default Home;