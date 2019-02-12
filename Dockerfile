FROM starefossen/github-pages:latest

# ENV GITHUB_GEM_VERSION 193
# ENV JSON_GEM_VERSION 1.8.6

RUN gem install --verbose --no-document \
    # html-proofer \
    kramdown \
    netrc \
    # redcarpet \
    jekyll-email-protect \
    jekyll-gist \
    jekyll-github-metadata \
    jekyll-paginate \
    jekyll-seo-tag \
    jekyll-sitemap \
    jekyll-toc \
    jekyll-youtube \
    jemoji \
  && rm -rf /usr/lib/ruby/gems/*/cache/*.gem

# install and cache app dependencies
# COPY Gemfile package.json package-lock.json /usr/src/app/
# RUN npm install

# Copy the current directory contents into the container at /app
# ADD . /usr/src/app

# build app
# RUN bundle exec jekyll build --incremental

# EXPOSE 4000 80

# start app
# CMD bundle exec jekyll serve -d /_site --incremental --watch --force_polling -H 0.0.0.0 -P 4000
