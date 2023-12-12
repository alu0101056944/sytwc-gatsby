
// to be able to load .env to set ENABLE_GATSBY_REFRESH_ENDPOINT=true
// so that I don't have to restart the development server to refresh
// graphql.
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const apiContentSchema = {
  title: 'default title',
  body: 'default body',
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SYTWC Gatsby Assignment`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        name: 'records',
        url: 'https://jsonplaceholder.typicode.com/posts',
        schemaType: apiContentSchema,
        enableDevRefresh: true,
      }
    }
  ]
};
