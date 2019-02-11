---
layout: post
title:  Using Travis CI
date:   2018-10-22 01:00:00 -0500
categories:
  - DevOps
---

As a continuous integration platform, Travis CI supports your development process by automatically building and testing code changes, providing immediate feedback on the success of the change. Travis CI can also automate other parts of your development process by managing deployments and notifications.

## Getting started with Travis CI

It's easy to get started with Travis CI. Their documentation has a page describing it; [Travis CI for Beginners](https://docs.travis-ci.com/user/for-beginners/). There is also a great [Travis CI Tutorial](https://github.com/dwyl/learn-travis). However, there are some important things to take note of:

- You should **sign into Travis CI using your GitHub login**. This is because Travis CI will automatically show you repositories that you have read permissions to in GitHub, and it will restrict administrative control to those who also have admin permissions to a repo in GitHub.
- **Travis CI is free for public repositories**. You can, and should, experiment and learn Travis using a public repo in your personal GitHub account. You can sandbox and break things without having any effect on business operations. Everyone should take advantage of this.
- **Travis CI is much more powerful, by a significant magnitude, than you are probably aware of.** Do lot let perception control your reality. Travis CI can achieve the simplest of CI/CD plans with ease, but it is also capable of managing much more complex plans. Due to it's excellent support for Docker, there really are few limits to what can be achieved.

## Limitations of Travis CI

No tool is without limitations and negative aspects. It is important to note the following limitations of Travis CI, although continual improvements to the platform cause this list to shrink every year.

- **You cannot share build artifacts across jobs. **It is important to note that jobs do not share storage, as each job runs in a fresh VM or container. If your jobs need to share files (e.g., using build artifacts from the "Test" stage for deployment in the subsequent "Deploy" stage), you need to use an external storage mechanism such as an image repository or a remote server.

## Travis CI Configuration

### Breaking down the Travis CI configuration file

This is a top-down examination of a typical Travis CI configuration file, `.travis.yml`, and a description of the best practices exhibited therein.

<table class="table">
  <thead>
    <tr>
      <th width="40%">Configuration</th>
      <th width="60%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {% highlight yaml %}
sudo: required
{% endhighlight %}
      </td>
      <td>
        <p>The `<code>sudo</code>` property is no longer required and <a href="https://blog.travis-ci.com/2018-11-19-required-linux-infrastructure-migration">its use is now discouraged</a>.</p>
        <p>It had been `<code>false</code>` by default, and marking in as `<code>required</code>` was necessary
          when using Docker. However, `<code>required</code>` is now the default state and any other setting is
          deprecated. It is therefore no longer needed to have this line, but important to make note of it, as it
          can be found in many configuration examples.</p>
      </td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
language: node_js
{% endhighlight %}
      </td>
      <td>The `<code>language</code>` property is the most typical method of
        selecting the image that will be used for builds. `<code>node_js</code>` is the most popular, not only
        because JavaScript is the most popular language but also because the image also contains other system
        dependencies, such as; Java, Ruby, etc. Making it ideal for most build requirements.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
node_js:
  - '8'
{% endhighlight %}
      </td>
      <td>If `<code>node_js</code>` is the selected language/image, then you can specify which
        Node version(s) using the `<code>node_js</code>` property. As depicted, this property supports an array of
        values. This is useful when required to test code against multiple versions of Node.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
cache:
  directories:
    - ~/.npm
    - node_modules
  npm: true
{% endhighlight %}
      </td>
      <td>The `<code>cache</code>` property is used to dictate which dependencies and/or
        directories should be cached across build jobs and stages. This is most helpful to avoid running dependency
        installations more than once, saving up to 2 minutes for each additional job.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
notifications:
  email: false
{% endhighlight %}
      </td>
      <td>The `<code>notifications</code>` property is used to configure
          build notification settings. To avoid an overabundance of emails, it is common to always include this
          option and ensure the subsequent `<code>email</code>` property is marked as `<code>false</code>`.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
services:
  - docker
{% endhighlight %}
      </td>
      <td>The `<code>services</code>` property is used to activate services
          to be made available to build jobs. The most common of these services is `<code>docker</code>` and this
          should be enabled on all plans.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
addons:
  sonarcloud:
    organization: sonar-org-name
{% endhighlight %}
      </td>
      <td>The `<code>addons</code>` property is used to activate additional
          3rd party applications and integrations. This is most commonly used for things like <em>SonarCloud</em>
          integration and <em>Chrome</em> support. As depicted here, every single Travis CI build plan should have
          `<code>sonarcloud</code>` as an add-on with your `<code>sonar-org-name</code>` as the `<code>organization</code>`.
          The SonarCloud add-on is required to ensure the `<code>sonar-scanner</code>` binary is available and
          connected to the matching SonarCloud profile. Please note that the Travis CI plan must also provide the
          `SONAR_TOKEN` as an environment variable so that `<code>sonar-scanner</code>` can authenticate the
          account.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
git:
  depth: false
{% endhighlight %}
      </td>
      <td>The `<code>git</code>` property is used to control Git
          configuration. This is most commonly used to increase the default depth (50 commits) of GitHub pulls.
          When you want Travis CI to be able to analyze more than just the absolute latest commits to the master
          branch, you need increase this setting or disable it altogether. For example; if you want to automate
          your releases and changelogs, then you need to be able to analyze as many commits as are applicable to
          said release. In many cases, this can exceed the default. The more automation and contributors you have,
          the more this setting can interfere.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
branches:
  only:
    - master
    - /^greenkeeper.*$/
{% endhighlight %}
      </td>
      <td>
        <p>The `<code>branches</code>` property is used to control which branches Travis CI will
            watch for commits. This should always include the primary development branch, i.e.; `<code>master</code>`.
            Additional branches should be activated on a case-by-case basis. For example, if the repository is
            integrated with Greenkeeper, then you must add support for `<code>greenkeeper/...</code>` branches so
            they can be processed.</p>
        <p>Pull Requests are automatically processed if they are made against the branches listed in this
            configuration. In this example; any PR made against the `<code>master</code>` branch will be
            automatically processed. This means every PR will be able to exhibit accurate Status Checks in GitHub,
            capable of preventing PR's from being merged if they fail the CI plan.</p>
      </td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
env:
  global:
    - PATH=$HOME/.local/bin:$PATH
    - PATH=$PWD:$PATH
{% endhighlight %}
      </td>
      <td>
        <p>The `<code>env</code>` property is used to supply environment variables which, for
            most plans, should only be stored in the Travis CI Build Settings area - only accessible to repository
            admins. Travis CI supports encryption of environment variables, but it is still best practice to keep
            these things out of the config file.</p>
        <p>The primary value of the `<code>env</code>` property is modifying global
              variables, especially when needing to modify `<code>PATH</code>` variable. The example provided shows
              the best practice for ensuring globally installed packages are accessible at the command line, in
              addition to the current active directory (`<code>PWD</code>`).</p>
      </td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
before_install:
  - npm install -g greenkeeper-lockfile
{% endhighlight %}
      </td>
      <td>The `<code>before_install</code>` property is
          generally used for installing global dependencies. It can be ignored but it is best practice to use it
          for any system-level provisioning, and using the `<code>install</code>` property for application-level
          installation and provisioning.</td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
install:
  - travis_retry npm install
{% endhighlight %}
      </td>
      <td>
        <p>The `<code>install</code>` property is used to run all installation scripting, such
            as `<code>npm install</code>`. The caveat here, as exhibited in the example, is that the command should
            always be prefixed with the `<code>travis_retry</code>` command - which will ensure that any erroneous
            install failures will be retried before failing the build. This can be common during dependency
            installations when things like network drop-offs and registry blips affect the reliability of a plan.</p>
        <p><strong>Note</strong>: the `<code>travis_retry</code>` command can be
            used in front of any command to ensure that it is retried upon failure.</p>
      </td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
stages:
  - test
  - name: deploy
    if: repo = profile/repo
        AND type != pull_request
        AND branch = master
{% endhighlight %}
      </td>
      <td>
        <p>The `<code>stages</code>` property is used to segment jobs into individual stages.
            Whilst this is not a required property, it is best practice to ensure that subsequent jobs are not run
            if a previous job/stage has failed. This is because Travis CI will run all scripts within a job even if
            a failure occurs during the first script. The job would still fail, but not before all scripts run.
            This has a benefit of observing just how many scripts failed, instead of just the first one. But it has
            the unfortunate consequence of potentially running a script that should be run if previous failures
            occurred. This is obviously the case with things like deployments, but can also play a role in other
            areas, such as; ensuring a build doesn't run for 10 minutes if a failure occurred in the first 2
            minutes. As Travis CI is priced based on concurrent builds, it is important to ensure you do not
            unnecessarily waste build time.</p>
        <p>As exhibited in the example, stages are a great way to add conditionals to restrict if and when a
            stage is run. The example shows how to restrict a deployment stage to just the master branch of the
            explicit repo and not on any PR's.</p>
        <p><strong>Note</strong>: stages are processed in a linear fashion, meaning subsequent stages cannot
            run until a previous stage as completed <em>successfully</em>.</p>
      </td>
    </tr>
    <tr>
      <td>
        {% highlight yaml %}
jobs:
  include:
    - stage: test
      name: 'Checks and Tests'
      script:
        - npm run lint
        - npm run test
        - npm run build
    - stage: deploy
      name: 'Publish and Release'
      script:
        - npm run semantic-release
{% endhighlight %}
      </td>
      <td>The `<code>jobs</code>` property is used to group all
          scripts/command into individual jobs. When using stages, you can have multiple jobs within the same
          stage. The example show one job per stage, but there is plenty of documentation describing the
          alternative.</td>
    </tr>
  </tbody>
</table>

### Conditional scripting and statements

Travis CI provides a number of [methods for wrapping build stages and jobs with conditional statements](https://docs.travis-ci.com/user/conditional-builds-stages-jobs/). There is also [a page describing the available conditions](https://docs.travis-ci.com/user/conditions-v1), and a page describing [how conditionals can be tested](https://docs.travis-ci.com/user/conditions-testing). You can also find [a list of environment variables that can be used in conditional statements](https://docs.travis-ci.com/user/environment-variables/).

There are plenty of standard methods to learn therein. But there is little documentation about inline conditionals and the quirks of their behavior. This is a list of those quirks;

- Inline conditional **statements should be enclosed in single-quotes** or they will not be processed properly;
    `'[[ $TRAVIS_BRANCH = master ]] && echo "is master" || echo "is not master";'`
- All **statements should end with a semicolon** to ensure the statement is closed properly.
- Any unmet inline conditional will trigger a premature fail/exit of the build plan. This is because Travis CI expects all scripts output to complete without error. If a conditional fails, this does not occur. It is therefore required to provide an "else" branch in the conditional statement. However, the "else" must also not fail. So it is common to simply "echo" some text that signifies the bypass.

{% highlight yaml %}
script:
  - '[[ $TRAVIS_BRANCH =~ ^greenkeeper.*$ ]] && greenkeeper-lockfile-update || echo "Skipping greenkeeper-lockfile-update";'
  - '[[ $TRAVIS_BRANCH =~ ^greenkeeper.*$ ]] && npm audit || echo "Skipping npm audit";'
  - commitlint-travis
  - npm run lint
  - npm run build
  - travis_retry github-label-sync -a "$GH_TOKEN" -l 'https://git.io/fAe5i' profile/repo
  - npm run test
  - '[[ $TRAVIS_BRANCH = master ]] && sonar-scanner || echo "Skipping sonar-scanner";'
  - '[[ $TRAVIS_BRANCH =~ ^greenkeeper.*$ ]] && greenkeeper-lockfile-upload || echo "Skipping greenkeeper-lockfile-upload";'
{% endhighlight %}
