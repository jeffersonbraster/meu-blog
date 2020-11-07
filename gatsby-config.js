require("dotenv").config()

const queries = require("./src/utils/algolia-querys")

module.exports = {
  siteMetadata: {
    title: `Jefferson Brandão`,
    position: `Backend Developer`,
    description: `Apaixonado por programação, escrevo sobre as noticias do universo TI.`,
    author: `@jeffersonbrandao`,
    siteURL: `https://jeffersonbrandao.com.br`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // precisa ser o primeiro para trabalhar com gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          //prismjs deixa o highlight do codigo bonito na tela, precisa ser sempre o ultimo plugin
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jefferson Brandao`,
        short_name: `Jefferson Brandao`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
