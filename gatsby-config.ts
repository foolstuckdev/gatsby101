import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `unread`,
    siteUrl: `https://github.com/foolstuckdev/gatsby101`,
    description: 'Unread -  a simple Gatsby starter project',
    copyright: 'copyright 2023',
    contact: 'foolstuckdev@gmail.com'
  },

  graphqlTypegen: true,
  
  plugins: [
    "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": `${__dirname}/src/projects/`
      },
      __key: "pages"
    },
    "gatsby-transformer-yaml",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "records",
        path: `${__dirname}/src/data/`,
      },
      __key: "data"
    },
  ]
};

export default config;
