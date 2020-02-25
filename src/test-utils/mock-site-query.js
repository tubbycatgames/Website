import { StaticQuery } from "gatsby"

export default () => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          author: "Tubby Cat Games, LLC.",
          description: "Tubby Cat Games Helmet Tester",
          title: `TCG Test`,
        },
      },
    })
  )
}
