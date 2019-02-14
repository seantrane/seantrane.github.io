# Contributing

> This is my personal repository, and I don't expect any contributions here. However, I keep the same process in every repository I manage. Meaning a CONTRIBUTING.md is required and should descibe how to manage and develop the repository contents. So this just documents how I contribute to my own repository - short of requiring a PR process. But if you are so nutty that you've actually read this, and you still want to contribute, then here is the standard spiel... _Thank you for contributing. Contributions are always welcome, no matter how large or small._

## Table of Contents

- [Guidelines](#guidelines)
- [Pull Requests](#pull-requests)
- [Clone the Repository](#clone-repo)
- [Install Dependencies](#install-dependencies)
- [File Structure](#file-structure)

---

## Guidelines <a id="guidelines"></a>

As a contributor, here are the guidelines you should follow:

- [Code of conduct](https://github.com/seantrane/engineering/blob/master/CODE_OF_CONDUCT.md)
- [How can I contribute?](https://github.com/seantrane/engineering/blob/master/CONTRIBUTING.md#how-can-i-contribute)
- [Using the issue tracker](https://github.com/seantrane/engineering/blob/master/CONTRIBUTING.md#using-the-issue-tracker)
- [Submitting a Pull Request](https://github.com/seantrane/engineering/blob/master/CONTRIBUTING.md#submitting-a-pull-request)
- [Coding rules](https://github.com/seantrane/engineering/blob/master/CONTRIBUTING.md#coding-rules)
- [Working with code](https://github.com/seantrane/engineering/blob/master/CONTRIBUTING.md#working-with-code)

We also recommend to read [How to Contribute to Open Source](https://opensource.guide/how-to-contribute).

---

## Pull Requests <a id="pull-requests"></a>

Thank you for contributing.

- Create your branch from `develop`. **The `master` branch is only for GitHub Pages deployments.**
- Ensure your [git commit messages follow the required format](https://github.com/seantrane/engineering/blob/master/STYLE_GUIDES.md#git-commit-messages).
- Ensure your scripts are well-formed, well-documented and object-oriented.
- Ensure your scripts are stateless and can be reused by all.
- Update your branch, and resolve any conflicts, before making pull request.
- Fill in [the required template](https://github.com/seantrane/engineering/blob/master/PULL_REQUEST_TEMPLATE.md).
- Do not include issue numbers in the PR title.
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the [style guide](https://github.com/seantrane/engineering/blob/master/STYLE_GUIDES.md) [applicable to the language](https://github.com/seantrane/engineering/blob/master/STYLE_GUIDES.md#languages) or task.
- Include thoughtfully-worded, well-structured tests/specs. See the [Tests/Specs Style Guide](https://github.com/seantrane/engineering/blob/master/STYLE_GUIDES.md#tests).
- Document new code based on the [Documentation Style Guide](https://github.com/seantrane/engineering/blob/master/STYLE_GUIDES.md#documentation).
- End all files with a newline.

---

## Clone the Repository <a id="clone-repo"></a>

```bash
git clone git@github.com:seantrane/seantrane.github.io.git seantrane.github.io && cd seantrane.github.io
```

## Getting Started <a id="getting-started"></a>

### Install system dependencies <a id="install-system-dependencies"></a>

Your system will need access to `npm`, `docker` and `docker-compose` commands, so ensure you have the following requirements installed globally;

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [npm](https://www.npmjs.com/)

### Install the app <a id="install-the-app"></a>

```bash
# Install dependencies
npm install
```

### Run the app <a id="run-the-app"></a>

> Run `npm start` to build the Docker image and run the container.

This method takes advantage of the [`docker-github-pages`](https://github.com/Starefossen/docker-github-pages) image.

The app will be available locally using the following server addresses;

- `http://localhost:4000/`
- `http://127.0.0.1:4000/`
- `http://[::1]:4000/` (IPv6)

### Dependencies <a id="dependencies"></a>

#### Node/npm Dependencies <a id="node-dependencies"></a>

- [bootstrap-sass](https://github.com/twbs/bootstrap-sass): Bootstrap framework for Sass.
- [fontawesome](https://github.com/FortAwesome/Font-Awesome): The iconic font and CSS framework.
- [rimraf](https://github.com/isaacs/rimraf): The UNIX command `rm -rf` for node.

#### Ruby Dependencies <a id="ruby-dependencies"></a>

- [github-pages](https://github.com/github/pages-gem): A simple Ruby Gem to bootstrap dependencies for setting up and maintaining a local Jekyll environment in sync with GitHub Pages.
- [kramdown](https://github.com/gettalong/kramdown): A fast, pure Ruby Markdown superset converter.
- [netrc](https://github.com/heroku/netrc): Reads and writes `.netrc` files.
- [redcarpet](https://github.com/vmg/redcarpet): The safe Markdown parser, reloaded.
- *jekyll_plugins:*
  - [jekyll-email-protect](https://github.com/vwochnik/jekyll-email-protect): Email protection liquid filter.
  - [jekyll-gist](https://github.com/jekyll/jekyll-gist): Liquid tag for displaying GitHub Gists.
  - [jekyll-github-metadata](https://github.com/jekyll/github-metadata): Access `site.github` metadata anywhere.
  - [jekyll-paginate](https://github.com/jekyll/jekyll-paginate): Default pagination generator for Jekyll.
  - [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag): Add metadata tags.
  - [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap): Silently generate a sitemaps.org compliant sitemap.
  - [jekyll-toc](https://github.com/toshimaru/jekyll-toc): A liquid filter plugin to generate a table of contents.
  - [jekyll-youtube](https://github.com/dommmel/jekyll-youtube): Generate embed html snippets for Youtube URLs.

---

## File Structure <a id="file-structure"></a>

[Jekyll](https://jekyllrb.com/) is used for [GitHub Pages](https://pages.github.com/) site generation and file management. Here is a description of the basic file structure:

```text
seantrane.github.io/
 │
 ├─ _category/              * blog category pages
 ├─ _data/                  * YAML-based data files
 ├─ _includes/              * view partials used by layouts, posts, etc.
 ├─ _layouts/               * templates that wrap posts, pages, etc.
 ├─ _plugins/               * custom/raw Jekyll plugins
 ├─ _posts/                 * dynamic content
 ├─ _sass/                  * SASS style sheets
 ├─ _site/                  * generated site directory (not committed)
 ├─ _toolbox/               * directory for "toolbox" content
 ├─ _work/                  * directory for "work" content
 │
 ├─ css/                    * site style sheet directory
 ├─ fonts/                  * site fonts directory
 ├─ images/                 * site images directory
 │
 ├─ .env.example            * example .env file
 ├─ _config.yml             * Jekyll configuration file
 ├─ Gemfile                 * Bundler configuration file
 ├─ Gemfile.lock            * Bundler configuration lock file
 └─ package.json            * Node/npm/Yarn configuration file
```

---

#### Happy coding!
