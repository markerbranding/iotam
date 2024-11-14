/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `iotam`,
    siteUrl: `https://www.iotam.com`,
    description: `the internet of things`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contenidos`,
        path: `${__dirname}/src/contenidos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
