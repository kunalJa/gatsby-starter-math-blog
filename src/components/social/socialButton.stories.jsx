import React from "react"
import { storiesOf } from "@storybook/react"

import SocialButton from "./socialButton"

storiesOf("Social Button", module)
  .add("Facebook", () => <SocialButton socialEnum={0} />)
  .add("Gatsby", () => <SocialButton socialEnum={1} />)
  .add("Github", () => <SocialButton socialEnum={2} />)
  .add("IMDB", () => <SocialButton socialEnum={3} />)
  .add("Linkedin", () => <SocialButton socialEnum={4} />)
  .add("Reddit", () => <SocialButton socialEnum={5} />)
  .add("Skype", () => <SocialButton socialEnum={6} />)
  .add("Slack", () => <SocialButton socialEnum={7} />)
  .add("Spotify", () => <SocialButton socialEnum={8} />)
  .add("Twitter", () => <SocialButton socialEnum={9} />)
  .add("Telegram", () => <SocialButton socialEnum={10} />)
  .add("WhatsApp", () => <SocialButton socialEnum={11} />)
