module.exports = {
  siteMetadata: {
    title: `Blog do Mitrut`,
    author: `Wellington Mitrut`,
    description: `Designer, developer and technology consultant.`,
    siteUrl: `https://blog.wmitrut.co/`,
    social: {
      twitter: `wmitrut`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-32817386-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog do Mitrut`,
        short_name: `Mitrut`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cba6f7`,
        display: `standalone`,
        icon: `content/assets/icon.png`,
        include_favicon: true,
        legacy: true,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        height: 3,
        excludePaths: ['/'],
        prependToBody: false,
        color: `#cba6f7`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
