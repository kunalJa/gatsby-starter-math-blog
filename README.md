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

- **Responsive** - utilizing tachyons, this site was built mobile first!

- **[MDX](https://mdxjs.com)** - allowing you to utilize hydrated React components in Markdown!

- **[Latex](https://katex.org)** - with both inline and block options with the \`\$\` key word.

- **Code Syntax Highlighting** - allowing you to communicate about software with specificity and clarity.

- **Dynamic Configurations** customizing your site's title, author, description, and social links!

<img src="https://serene-ramanujan-285722.netlify.com/static/d0d8810c744f3b2fd298b80ed77dedc1/6e18f/herobox_example_1.png" alt="Display of custom configurations" width="256" />

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
      },
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


## 🧐 What's inside?

A quick look at the important files and directories you'll see in this starter.

    .
    ├── .storybook
    ├── node_modules
    ├── src
    │    └── blog
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── site.config.js
    └── UI_Design.xd

1.  **`/node_modules`**: This directory contains all of the modules of code (npm packages) that your project depends on and are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`/src/blog`**: This directory is where you should place all of your blog posts. Make sure to give them a _.mdx_ file extension and include a _title_, _date_, and _description_ in the frontmatter of each post.

1.  **`.eslintrc.json`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool to help find and fix linting problems in JavaScript code.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierignore`**: (See `.prettierrc` below, first). This file tells prettier which directories and files it should not attempt to format.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`LICENSE`**: This starter is licensed under the MIT license, much like Gatsby itself.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`postcss.config.js`**: This is a configuration file for [PostCSS](https://postcss.org/). PostCSS is a tool for transforming CSS with JavaScript.

1.  **`README.md`**: A text file containing useful reference information about your project.

1.  **`site.config.js`**: This file allows you to edit the site metadata that is used to automatically generate several elements of the blog. Make sure to update the _title_, _author_, and _personal description_ sections with your information.

1.  **`UI_Design.xd`**: This is a file (openable with Adobe XD) used to come up with the user experience and design of the website in its inception.


## 🐞 Bugs or Questions?

> Please send them my way at [gatsby-starter-math-blog/issues](https://www.github.com/kunalja/gatsby-starter-math-blog/issues)


## 💖 Thank you for checking this starter out
