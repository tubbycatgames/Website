const primaryColor = "#003F39"

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: primaryColor,
        display: "standalone",
        icon: "src/images/Logo.png",
        name: "Tubby Cat Games",
        short_name: "TCG",
        start_url: "/",
        theme_color: primaryColor,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-console",
    "gatsby-plugin-sharp",
    "gatsby-plugin-stylus",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://tubbycatgames.us4.list-manage.com/subscribe/post?u=02fe308fb2accb1f3454808f3&amp;id=8d0948f68a",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
  ],
  siteMetadata: {
    author: "Tubby Cat Games, LLC.",
    description:
      "Business Website for Tubby Cat Games, LLC. A Philadelphia video game company",
    title: "Tubby Cat Games",
  },
}
