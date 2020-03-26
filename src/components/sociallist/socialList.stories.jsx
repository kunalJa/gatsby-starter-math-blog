import React from "react"
import { storiesOf } from "@storybook/react"

import SocialList from "./socialList"

storiesOf("Social List", module)
  .add("Zero Links", () => <SocialList links={[]} socialEnums={[]} />)
  .add("One Link", () => (
    <SocialList links={["https://www.facebook.com"]} socialEnums={[0]} />
  ))
  .add("Two Links", () => (
    <SocialList
      links={[
        "https://www.facebook.com",
        "https://www.gatsbyjs.com",
        "https://www.github.com",
      ]}
      socialEnums={[0, 1, 2]}
    />
  ))
  .add("Three Links", () => (
    <SocialList
      links={[
        "https://www.facebook.com",
        "https://www.gatsbyjs.com",
        "https://www.github.com",
      ]}
      socialEnums={[0, 1, 2]}
    />
  ))
  .add("Multiple Lists", () => {
    return (
      <>
        <SocialList
          links={[
            "https://www.facebook.com",
            "https://www.gatsbyjs.com",
            "https://www.github.com",
          ]}
          socialEnums={[0, 1, 2]}
        />
        <SocialList
          links={["https://www.facebook.com", "https://www.gatsbyjs.com"]}
          socialEnums={[0, 1]}
        />
      </>
    )
  })
