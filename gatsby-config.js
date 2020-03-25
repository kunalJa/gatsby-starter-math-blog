const path = require(`path`)
const remarkMath = require(`remark-math`)

module.exports = {
  siteMetadata: {
    /* General: */
    title: `Math Blog`,
    description: `The premier math blog starter for Gatsby.`,
    author: `@kunalja`,

    socialLinks: {
      facebook: 0,
      gatsby: 0,
      github: `https://github.com/kunalJa/gatsby-starter-math-blog`,
      imdb: 0,
      linkedin: `https://www.linkedin.com`,
      reddit: 0,
      skype: 0,
      slack: 0,
      spotify: `https://www.spotify.com`,
      telegram: 0,
      twitter: `https://www.twitter.com`,
      whatsapp: 0,
  },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-math-blog`,
        short_name: `math-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-katex`],
        remarkPlugins: [remarkMath],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
        ],
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["katex/dist/katex.min.css"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'],
      },
    },
  ],
}
