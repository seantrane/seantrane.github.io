---
layout: post
title:  Migrating from SonarQube to SonarCloud
short_title: Migrating from SonarQube to Cloud
date:   2019-01-22 01:00:00 -0500
categories:
  - DevOps
  - Engineering
  - Security
---

[SonarCloud](https://sonarcloud.io) (SaaS) differs from [SonarQube](https://www.sonarqube.org/) (self-hosted) in a number of different ways. This page documents the process of migrating from SonarQube to SonarCloud.

The most important thing to remember when performing this migration is that SonarCloud has different names for the configurable properties available in a `sonar-project.properties` file. The best place to find the property keys in SonarCloud is within the configuration settings area of the SonarCloud interface. Each configuration option therein shows the respective property key as would be used in the config file.

If a configuration option does not appear in the SonarCloud configuration settings, then it means it does not exist in SonarCloud. This is especially the case with SonarQube plugins, which do not exist in the same way on the cloud version, as SonarCloud comes with many popular plugins already baked into the service. SonarCloud does this because one cannot install plugins in SonarCloud, and this is a fundamental difference between the software. Not to worry though, because SonarCloud plugins are better integrated and easier to manage than it's server-based counterpart.

Please use the `sonar-project.properties` standards and practices described on [the SonarCloud Configuration
page]({{ site.baseurl }}{% post_url 2018-10-15-sonarcloud-configuration %}) to make modifications to existing SonarQube project config files. Any
SonarQube configuration properties that are not supported will simply be ignored by SonarCloud. When using
SonarCloud, the `sonar.organization` config property is required or it will not upload - regardless of setting up
the host URL and authentication properly.

When uploading results to SonarCloud or SonarQube, the `sonar-scanner` CLI usage is virtually the same, just a
different host URL;

{% highlight bash %}
sonar-scanner -Dsonar.host.url=https://sonarcloud.io ...
{% endhighlight %}

## Using SonarCloud with Travis CI

Travis CI has excellent integration with SonarCloud, requiring very little to get up and running. The first step is
to ensure the Travis CI SonarCloud add-on is activated in the `.travis.yml` config file;

{% highlight yaml %}
addons:
  sonarcloud:
    organization: sonar-org
{% endhighlight %}

Then you must ensure that the SonarCloud auth token is available as an environment variable; `SONAR_TOKEN`.

After that, you simply have to run `sonar-scanner` after your linting/testing is complete and, of course, that your
`sonar-project.properties` file is configured properly and your test reports are consumable by Sonar.

{% highlight yaml %}
script:
  - npm test
  - npm sonar-scanner
{% endhighlight %}

## Using SonarCloud other CI tools/services

It is relatively painless to switch from SonarQube to SonarCloud, as it is simply a change from using a SonarQube
server host to using `sonarcloud.io`. In addition to the hostname change, one must also provide authentication for
SonarCloud.

To make this process easier for users and plans, _environment variables_ be provided to be used
within job scripting. Here are the variables to be provided:

| `SONARCLOUD_HOST_URL` | `https://sonarcloud.io` |
| `SONARCLOUD_ORG` | `sonar-org` |
| `SONARCLOUD_TOKEN_PASSWORD` | `********` |

### Using SonarCloud with Bamboo

_Bamboo Global Variables_ can be accessed using the `${bamboo_...}` variable naming convention, for example; `${bamboo_SONARCLOUD_HOST_URL}`. The following command is all that is needed;

{% highlight bash %}
sonar-scanner -Dsonar.host.url=${bamboo_SONARCLOUD_HOST_URL} -Dsonar.login=${bamboo_SONARCLOUD_TOKEN_PASSWORD}
{% endhighlight %}
