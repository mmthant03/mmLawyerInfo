const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Myanmar Lawyer Information`,
    description: `This website will show Myanmar's lawyers contact information up to date for detainees' parents, or guardians.`,
    author: `@mmthant03`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/app/layout.js`
      }
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.MONGODB_URI,
        dbName: `mmLawyers`,
        collection: `Lawyer`,
        extraParams: {
          ssl: 'true',
          authSource: 'admin'
        }
      }
    },
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     connectionString: `mongodb+srv://mmthant03:neuron12@mmlawyercluster.r12ce.mongodb.net`,
    //     dbname: `mmLawyers`,
    //     collection: `Lawyer`,
    //   }
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
