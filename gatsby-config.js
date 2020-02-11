module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://tubbycatgames.us4.list-manage.com/subscribe/post?u=02fe308fb2accb1f3454808f3&amp;id=8d0948f68a",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
  siteMetadata: {
    description:
      "Business Website for Tubby Cat Games, LLC. A Philadelphiad video game company",
    title: "Tubby Cat Games",
  },
}
