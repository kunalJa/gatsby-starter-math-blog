import React from "react"
import { storiesOf } from "@storybook/react"

import Navbar from "./navbar"

storiesOf("Navbar", module)
  .add("Default", () => <Navbar />)
  .add("Title prop", () => <Navbar siteTitle="Title Prop" />)
