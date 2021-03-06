module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`, 
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`, 
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, 
        path: `${__dirname}/src/images`
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Cinzel Decorative`,
            `PT Serif` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
  ],
}
