import React from "react"
import { storiesOf } from "@storybook/react"

import HeroBox from "./heroBox"

storiesOf("HeroBox", module)
  .add("Alphabetical Title", () => (
    <HeroBox siteTitle="Math Blog" author="@kunalja" />
  ))
  .add("Title with Symbols", () => (
    <HeroBox siteTitle="M@th B|og" author="@kunalja" />
  ))
  .add("Long Title", () => (
    <HeroBox
      siteTitle="supercalifragilisticexpialidocious is my favourite word!"
      author="@kunalja"
    />
  ))
  .add("With One Social Link", () => (
    <HeroBox
      siteTitle="M@th B|og"
      author="@kunalja"
      links={["https://www.facebook.com"]}
      socialEnums={[0]}
    />
  ))
  .add("With Three Social Links", () => (
    <HeroBox
      siteTitle="M@th B|og"
      author="@kunalja"
      links={[
        "https://www.facebook.com",
        "https://www.gatsbyjs.com",
        "https://www.github.com",
      ]}
      socialEnums={[0, 1, 2]}
    />
  ))
  .add("With Eight Social Links", () => (
    <HeroBox
      siteTitle="M@th B|og"
      author="@kunalja"
      links={[
        "https://www.facebook.com",
        "https://www.gatsbyjs.com",
        "https://www.github.com",
        "https://www.imdb.com",
        "https://www.linkedin.com",
        "https://www.reddit.com",
        "https://www.skype.com",
        "https://www.slack.com",
      ]}
      socialEnums={[0, 1, 2, 3, 4, 5, 6, 7]}
    />
  ))
