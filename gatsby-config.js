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
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfiguModule: "src/utils/typography",
      },
    },
  ],
  siteMetadata: {
    description:
      "Business Website for Tubby Cat Games, LLC. A Philadelphiad video game company",
    title: "Tubby Cat Games",
  },
}
