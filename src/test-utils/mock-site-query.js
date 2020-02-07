import { StaticQuery } from "gatsby"

export default () => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          description: "Tubby Cat Games Helmet Tester",
          title: `TCG Test`,
        },
      },
    })
  )
}
