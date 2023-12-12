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
      resolve: 'gastby-source-apiserver',
      options: {
        name: 'records',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }
    }
  ]
};
