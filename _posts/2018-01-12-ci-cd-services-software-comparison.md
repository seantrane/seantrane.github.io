---
layout: post
title:  CI/CD Services & Software Comparison
short_title:  CI/CD Comparison
date:   2018-01-12 01:00:00 -0500
categories:
  - DevOps
  - Engineering
---

There are a lot of [continuous integration](http://en.wikipedia.org/wiki/Continuous_integration) and [continuous delivery](http://en.wikipedia.org/wiki/Continuous_delivery) services. All of them have a different set of functionality; some of them require payment, some of them are free, some only manage continuous integration and not delivery/deployment, etc.

- https://blog.takipi.com/jenkins-vs-travis-ci-vs-circle-ci-vs-teamcity-vs-codeship-vs-gitlab-ci-vs-bamboo/
- https://www.thoughtworks.com/radar/tools/jenkins-as-a-deployment-pipeline
- http://concourse.ci/concourse-vs.html

## Comparison list/table of CI/CD services

There is a [similar comparison on Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_continuous_integration_software).

This table was inspired by a [similar comparison on GitHub](https://github.com/ligurio/awesome-ci/blob/master/README.md).

**Plan/cost shorthand syntax:**

```text
<monthly-cost> : <concurrent_builds> . <total_builds> / <projects> {<users>}
```

<table>
  <thead>
    <tr>
      <th>Name/Links</th>
      <th>Description</th>
      <th>Features</th>
      <th>Repos</th>
      <th>Open</th>
      <th>Pricing</th>
      <th>Host</th>
      <th>Pipe</th>
      <th>Config</th>
      <th>StackShare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.atlassian.com/software/bamboo">Bamboo</a>&nbsp;<br>
        -&nbsp;<em><a href="https://confluence.atlassian.com/alldoc/bamboo-documentation-directory-23855144.html">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://www.atlassian.com/software/bamboo/pricing">pricing</a></em>
      </td>
      <td>
        Tie automated builds, tests, and releases together in a single workflow.&nbsp;<br>
        &gt;&nbsp;<em>All but deprecated by&nbsp;<a href="https://bitbucket.org/product/features/pipelines">Bitbucket Pipelines</a></em>
      </td>
      <td>&nbsp;</td>
      <td>Bitbucket, Git, Mercurial, Perforce, Webhooks</td>
      <td>&nbsp;</td>
      <td>
        <code>1x$10:&nbsp;~.~/10</code><br>
        <code>1x$880:&nbsp;~.~/~</code>
      </td>
      <td>Self</td>
      <td>&nbsp;</td>
      <td>UI + SQL</td>
      <td><a href="https://stackshare.io/bamboo">5★ 115§ 7✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://buddy.works/">Buddy</a>&nbsp;<br>
        -&nbsp;<em><a href="https://buddy.works/help">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://buddy.works/pricing">pricing</a></em>
      </td>
      <td>Continuous Delivery, simplified. Build any app and run any command in isolated Docker containers. Deploy everywhere.</td>
      <td>FTP/SFTP, AWS, Kubernetes, Google Cloud, Heroku, DigitalOcean &amp; more. Run apps from your Git repo.</td>
      <td>GitHub, GitLab, Bitbucket &amp; more.</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: 1.120/5</code><br>
        <code>$49: 1.~/20</code><br>
        <code>$98: 2.~/~</code>
      </td>
      <td>SaaS</td>
      <td>Pipe</td>
      <td>UI&nbsp;<em>or</em>Code</td>
      <td><a href="https://stackshare.io/buddy">59★ 74§ 513✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://buildkite.com/">Buildkite</a>&nbsp;<br>
        -&nbsp;<em><a href="https://buildkite.com/docs/guides/getting-started">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://github.com/buildkite/buildkite-agent">source</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://buildkite.com/pricing">pricing</a></em>
      </td>
      <td>Build automation platform which gives you complete control, without the pain of running your own CI system.</td>
      <td>Lang:&nbsp;.NET/C#, C/C++, Clojure, Elixir, Erlang, Go, Java, Node/JS, Objective-C, PHP, Python, Ruby, Rust, Scala, Swift</td>
      <td>GitHub, Bitbucket, GitLab, Custom</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: OS/Edu</code><br>
        <code>$15:&nbsp;~.~/~ {1}</code><br>
        <code>Trial (14d)</code>
      </td>
      <td>SaaS</td>
      <td>&nbsp;</td>
      <td>UI</td>
      <td><a href="https://stackshare.io/buildkite">14★ 43§ 109✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://circleci.com/">CircleCI</a>&nbsp;<br>
        -&nbsp;<em><a href="https://circleci.com/docs">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://circleci.com/pricing">pricing</a></em>
      </td>
      <td>CI/CD platform for teams of all sizes to rapidly build/release software at scale, in the
        cloud or behind a firewall.</td>
      <td>&nbsp;</td>
      <td>GitHub, Bitbucket</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: 1.&lt;1500min&gt;/~</code><br>
        <code>$50: 2.~/~</code>
      </td>
      <td>Both</td>
      <td>Pipe</td>
      <td>Code</td>
      <td><a href="https://stackshare.io/circleci">127★ 1,190§ 878✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://codefresh.io/">CodeFresh</a>&nbsp;<br>
        -&nbsp;<em><a href="https://docs.codefresh.io/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://codefresh.io/pricing">pricing</a></em>
      </td>
      <td>CodeFresh is a Docker-native CI/CD platform. Instantly build, test and deploy Docker
        images to Kubernetes</td>
      <td>Lang:&nbsp;Go, Java, Node/JS, PHP, Python, Ruby, Rust, etc.</td>
      <td>GitHub, Bitbucket, GitLab, Webhooks</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: 1.120/~ {2}</code><br>
        <code>$69: 2.220/~ {5}</code><br>
        <code>$299: 3.~/~ {10}</code>
      </td>
      <td>SaaS</td>
      <td>Pipe</td>
      <td>UI + Code</td>
      <td><a href="https://stackshare.io/codefresh">25★ 13§ 14✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.codeship.io/">Codeship</a>&nbsp;<br>
        -&nbsp;<em><a href="https://www.codeship.io/documentation">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="http://ebooks.codeship.io/efficiency-in-development-workflows-by-codeship/">ebook</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://codeship.io/pricing">pricing</a></em>
      </td>
      <td>Fast and secure hosted Continuous Integration service that scales.</td>
      <td>Lang:&nbsp;Dart, Elixir, Go, Java, JVM-based, Node/JS, PHP, Python, Ruby
      </td>
      <td>GitHub, Bitbucket, GitLab</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: Open</code><br>
        <code>$0: 1.100/~</code><br>
        <code>$75+: 1.~/~</code><br>
        <code>$150+: 2.~/~</code>
      </td>
      <td>SaaS</td>
      <td>&nbsp;</td>
      <td>Code</td>
      <td><a href="https://stackshare.io/codeship">97★ 629§ 1,440✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="http://concourse.ci/">Concourse CI</a>&nbsp;<br>
        -&nbsp;<em><a href="https://concourse.ci/introduction.html">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="http://concourse.ci/downloads.html">source</a></em>
      </td>
      <td>Self-hosted CI solution written in Golang, backed by&nbsp;<a href="https://www.cloudfoundry.org/">Cloud Foundry</a>.</td>
      <td>&nbsp;</td>
      <td>GitHub, OAuth</td>
      <td>O</td>
      <td><code>Free</code></td>
      <td>Self</td>
      <td>Pipe</td>
      <td>CLI + Code</td>
      <td><a href="https://stackshare.io/concourse">16★ 32§ 24✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://drone.io/">Drone</a>&nbsp;<br>
        -&nbsp;<em><a href="http://docs.drone.io/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://github.com/drone/drone">source</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://drone.io/pricing">pricing</a></em>
      </td>
      <td>Continuous Integration service</td>
      <td>&nbsp;</td>
      <td>GitHub, Bitbucket, Google Code, Custom</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: Open</code><br>
        <code>$125: 2.~/~</code><br>
        <code>$250: 4.~/~</code><br>
        <code>$500: 8.~/~</code>
      </td>
      <td>Both</td>
      <td>Pipe</td>
      <td>CLI + Code</td>
      <td><a href="https://stackshare.io/drone-io">36★ 104§ 194✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://gocd.io/">GoCD</a>&nbsp;<br>
        -&nbsp;<em><a href="https://docs.gocd.io/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://gocd.io/download">source</a></em>
      </td>
      <td>Automate and streamline your build-test-release cycle for reliable, continuous delivery of your product.&nbsp;<em>Sponsored by&nbsp;<a href="http://www.thoughtworks.com/">ThoughtWorks</a></em>.</td>
      <td>&nbsp;</td>
      <td>Git, Perforce, Mercurial, Subversion, TFS,&nbsp;<a href="https://gocd.io/plugins">Custom</a></td>
      <td>O</td>
      <td><code>Free</code></td>
      <td>Self</td>
      <td>Pipe</td>
      <td>UI&nbsp;<em>[+ Code]</em></td>
      <td><a href="https://stackshare.io/go-cd">30★ 65§ 184✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://jenkins.io/">Jenkins</a>&nbsp;<br>
        -&nbsp;<em><a href="https://jenkins.io/doc">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://github.com/jenkinsci/jenkins">source</a></em>
      </td>
      <td>The leading open source automation server, providing hundreds of plugins to support building, deploying and automating any project.</td>
      <td>Android, C/C++, Docker, Embedded, Java, PHP, Python, Ruby</td>
      <td>GitHub, Bitbucket, Custom</td>
      <td>O</td>
      <td><code>Free</code></td>
      <td>Self</td>
      <td>Pipe</td>
      <td>UI + Code</td>
      <td><a href="https://stackshare.io/jenkins">267★ 3,640§ 1,970✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://semaphoreci.com/">Semaphore</a>&nbsp;<br>
        -&nbsp;<em><a href="https://semaphoreci.com/docs/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://semaphoreci.com/pricing">pricing</a></em>
      </td>
      <td>Hosted continuous integration and delivery solution for open source and private projects.</td>
      <td>Lang:&nbsp;C/C++, Clojure, Elixir, Erlang, Go, Java, Node/JS, PHP, Ruby, Scala</td>
      <td>GitHub, Bitbucket</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: Open</code><br>
        <code>$25: 1.~/~</code><br>
        <code>$83: 2.~/~</code><br>
        <code>$166: 4.~/~</code><br>
        <code>$332: 8.~/~</code><br>
        <code>$499: 12.~/~</code><br>
        <code>Trial (30d)</code>
      </td>
      <td>SaaS</td>
      <td>&nbsp;</td>
      <td>UI</td>
      <td><a href="https://stackshare.io/semaphore">15★ 83§ 69✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.shippable.com/">Shippable</a>&nbsp;<br>
        -&nbsp;<em><a href="http://docs.shippable.com/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://www.shippable.com/pricing.html">pricing</a></em>
      </td>
      <td>CI/CD and DevOps automation platform with Docker support that simplifies provisioning, building, testing, and deploying any application anywhere.</td>
      <td>
        Lang:&nbsp;Go, Java, Node/JS, PHP, Python, Ruby, Scala;&nbsp;<br>
        DBs:&nbsp;CouchDB, MongoDB, MySQL, Neo4j, Postgres, Redis, RethinkDB, SQLite
      </td>
      <td>GitHub, Bitbucket, GitLab</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: Open</code><br>
        <code>$0: 1.150/~</code><br>
        <code>$25: {#C4L}.~/~</code><br>
        <code>$75: {#C4XL}.~/~</code><br>
        <code>$150: {#C42XL}.~/~</code><br>
        <code>Support:$500+/mo</code><br>
        <code>Server:&nbsp;$500/yr + $20/user/mo</code>
      </td>
      <td>Both</td>
      <td>Pipe</td>
      <td>Code</td>
      <td><a href="https://stackshare.io/shippable">13★ 40§ 126✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.solanolabs.com/">Solano CI</a>&nbsp;<br>
        -&nbsp;<em><a href="http://docs.solanolabs.com/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://www.solanolabs.com/#pricing">pricing</a></em>
      </td>
      <td>
        Hosted service that runs your test suite on a distributed infrastructure.&nbsp;<br>
        &gt;&nbsp;<em><a href="https://www.ge.com/digital/">GE Digital</a>&nbsp;has acquired&nbsp;<a href="https://www.solanolabs.com/">Solano Labs</a>&nbsp;for their&nbsp;<a href="https://www.ge.com/digital/predix">Predix platform</a>.</em>
      </td>
      <td>Self-hosted version called <a href="https://ci.solanolabs.com/private-ci">Solano Private CI</a>, <em>used by <a href="http://nerds.airbnb.com/testing-at-airbnb/">Airbnb</a></em>.</td>
      <td>GitHub, Bitbucket, GitLab, Custom</td>
      <td>&nbsp;</td>
      <td>
        <code>$15: 2.&lt;10h&gt;/~ {2}</code><br>
        <code>$50: 4.&lt;40h&gt;/~ {5}</code><br>
        <code>$100: 8.&lt;200h&gt;/~ {6}</code><br>
        <code>$125+: ?.~/~</code><br>
        <code>Trial (14d)</code>
      </td>
      <td>Both</td>
      <td>&nbsp;</td>
      <td>Code</td>
      <td><a href="https://stackshare.io/solano-ci">12★ 24§ 29✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.jetbrains.com/teamcity/">TeamCity</a>&nbsp;<br>
        -&nbsp;<em><a href="https://confluence.jetbrains.com/display/TCD10/TeamCity+Documentation">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://www.jetbrains.com/teamcity/buy/#license-type=new-license">pricing</a></em>
      </td>
      <td>A Java-based build management and continuous integration server from JetBrains.</td>
      <td>Support&nbsp;<a href="https://confluence.jetbrains.com/display/TCD10/Supported+Platforms+and+Environments#SupportedPlatformsandEnvironments-BuildRunners">wide variety of web browsers and build tools</a></td>
      <td>Git, SVN, Perforce, Mercurial, CVS &amp; many more.</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: 3.~/100</code><br>
        <code>$299: 4.~/110</code><br>
        <code>$598: 5.~/120</code>
      </td>
      <td>SaaS</td>
      <td>&nbsp;</td>
      <td>UI</td>
      <td><a href="https://stackshare.io/teamcity">24★ 374§ 221✓</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://travis-ci.org/">Travis CI</a>&nbsp;<br>
        -&nbsp;<em><a href="http://docs.travis-ci.com/user/getting-started/">docs</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://github.com/travis-ci/travis-ci">source</a></em>&nbsp;<br>
        -&nbsp;<em><a href="https://travis-ci.com/plans">pricing</a></em>
      </td>
      <td>Hosted continuous integration and deployment system for open source and private projects.
      </td>
      <td>Lang:&nbsp;C, C++, Clojure, Erlang, Go, Groovy, Haskell, Java, Node/JS, Objective-C, Perl, PHP, Python, Ruby, Rust, Scala.</td>
      <td>GitHub</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: Open</code><br>
        <code>$69: 1.~/~</code><br>
        <code>$129: 2.~/~</code><br>
        <code>$249: 5.~/~</code><br>
        <code>$489: 10.~/~</code>
      </td>
      <td>SaaS</td>
      <td>&nbsp;</td>
      <td>Code</td>
      <td><a href="https://stackshare.io/travis-ci">178★ 1,880§ 1,700✓</a></td>
    </tr>
    <tr>
      <td><a href="https://www.visualstudio.com/team-services/">Visual Studio Team Services</a><br>-&nbsp;<em><a href="https://www.visualstudio.com/en-us/docs/overview">docs</a></em>&nbsp;<br>-&nbsp;<em><a href="https://docs.microsoft.com/en-us/vsts/billing/buy-more-build-vs">pricing</a></em></td>
      <td>Cloud-based collaboration services for version control, agile planning, continuous delivery, and analytics application for Visual Studio, Eclipse, Xcode.</td>
      <td>&nbsp;</td>
      <td>Visual Studio Team Services, GitHub, Custom</td>
      <td>&nbsp;</td>
      <td>
        <code>$0: 1.&lt;4h&gt;/1 {1}</code><br>
        <code>$40: 1.&lt;6h&gt;/2 {1}</code><br>
        <code>$80: 1.&lt;6h&gt;/3 {1}</code>
      </td>
      <td>SaaS</td>
      <td>Pipe</td>
      <td>UI&nbsp;<em>or</em>Code</td>
      <td><a href="https://stackshare.io/visual-studio-team-services">11★ 94§ 14✓</a></td>
    </tr>
  </tbody>
</table>
