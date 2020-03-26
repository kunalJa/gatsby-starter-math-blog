<p align="center">
  <a href="https://serene-ramanujan-285722.netlify.com/">
    <img src="https://serene-ramanujan-285722.netlify.com/static/f26993af3f4b1545e8a73e11b61ea1b5/16dbb/icon.png" alt="Light red circle" width="60" />
  </a>
</p>
<h1 align="center">
  @kunalja's math blog starter
</h1>

[![GitHub issues](https://img.shields.io/github/issues/kunalja/gatsby-starter-math-blog?style=for-the-badge)](https://www.github.com/kunalja/gatsby-starter-math-blog/issues)
![GitHub stars](https://img.shields.io/github/stars/kunalja/gatsby-starter-math-blog?style=for-the-badge)
[![Styled with tachyons](https://img.shields.io/badge/styled%20with-tachyons-9cf?style=for-the-badge)](https://tachyons.io)
[![Designed with storybook](https://img.shields.io/badge/Designed%20with-storybook-ff69b4?style=for-the-badge)](https://storybook.js.org)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f05e348a-6965-439a-91a8-963d49f8d1e8/deploy-status)](https://app.netlify.com/sites/serene-ramanujan-285722/deploys)

Write and release your _important_ mathematical and technical findings with this blog boilerplate. This starter is built with [Gatsby](https://www.gatsbyjs.org), a blazing fast app generator for React.

## ✨ Features

+ __Responsive__ - utilizing tachyons, this site was built mobile first!

+ __[MDX](https://mdxjs.com)__ - allowing you to utilize hydrated React components in Markdown!

+ __[Latex](https://katex.org)__ - with both inline and block options with the \`$\` key word.

+ __Code Syntax Highlighting__ - allowing you to communicate about software with specificity and clarity.

+ __Dynamic Configurations__ customizing your site's title, author, description, and social links!


<img src="https://serene-ramanujan-285722.netlify.com/static/921021e3cb4d78fd49de59cf2a8f7f05/7b12c/herobox_example_1.png" alt="Display of custom configurations" width="256" />

<p> Your website will change depending on the options you set in your `site.config.js` </p>

<img src="https://serene-ramanujan-285722.netlify.com/static/aebdceed62e83abda9ef6f221b736668/ac0b2/herobox_example_2.png" alt="Display of custom configurations" width="256" />


## 🚀 Get Started

1.  **Install Gatsby.**

  Install the gatsby cli via npm.

  ```shell
  npm install -g gatsby-cli
  ```

2.  **Create a Gatsby site.**

  Use the Gatsby CLI to create a new site, specifying the blog starter.

  ```shell
  gatsby new math-blog-starter https://github.com/kunalja/gatsby-starter-math-blog
  ```

3.  **Start developing.**

  Navigate into your new site’s directory and start it up.

  ```shell
  cd math-blog/
  npm run develop
  ```

4.  **See the development server live!**

  Your site is now running at `http://localhost:8000`!

5. **Configure your site.**

  ```js
  //site.config.js
  module.exports = {
    title: `M@th B|og`,
    description: `The premier math blog starter for Gatsby.`,
    author: `@kunalja`,
    personalDescription: `I am a student at the University of Texas.`,

    //Add your links to these websites or put a 0 if you don't use those sites
    //Do not add or remove any sites (unless you are willing to modify the grapql in pages/index.js)
    socialLinks: {
      facebook: 0,
      gatsby: 0,
      github: `https://github.com/kunalJa/gatsby-starter-math-blog`,
      imdb: 0,
      linkedin: `https://www.linkedin.com/in/kunalja`,
      reddit: 0,
      skype: 0,
      slack: 0,
      spotify: 0,
      telegram: 0,
      twitter: 0,
      whatsapp: 0,
    }
  }
  ```

6.  **Write new posts.**

  Navigate to the `blog` folder and create new .mdx files for each new post you make.

  ```shell
  cd blog/
  # Windows cmd
  type NUL >> 2020-03-25-my-first-post.mdx
  # Unix zsh or bash
  touch 2020-03-25-my-first-post.mdx
  ```

  Make sure you include valid frontmatter with the fields _title_, _date_, and _description_.

  ```Markdown
  ---
  title: "My first post"
  date: "2020-03-25"
  description: "This post is my first and probably my last"
  ---

  # My first post!

  this is an example of a post one might make.
  ```

  Save your changes and the site will update in real time!

## 🐞 Bugs or Questions?
>Please send them my way at [gatsby-starter-math-blog/issues](https://www.github.com/kunalja/gatsby-starter-math-blog/issues)

## 💖 Thank you for checking this starter out
