import React from "react"
import { storiesOf } from "@storybook/react"

import Navbar from "./navbar"

storiesOf("Navbar", module)
  .add("Default", () => <Navbar />)
  .add("Title prop", () => <Navbar siteTitle="Title Prop" />)
  .add("Long Name", () => (
    <Navbar siteTitle="I am not certain how to handle this situation: submit a pull request to https://github.com/kunalJa/gatsby-starter-math-blog/issues" />
  ))
