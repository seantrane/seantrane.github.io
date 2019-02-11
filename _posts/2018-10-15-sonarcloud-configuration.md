---
layout: post
title:  SonarCloud Configuration
date:   2018-10-15 01:00:00 -0500
categories:
  - DevOps
  - Engineering
  - Security
---

Enhance your workflow with continuous code quality, [SonarCloud](https://sonarcloud.io/) automatically analyzes and decorates pull requests on [GitHub](httpa://github.com/), [Bitbucket](https://bitbucket.org/) and [Azure DevOps](https://azure.microsoft.com/) on major languages. This page and section describes the details of Sonar usage.

## Sample Configuration for SonarCloud

{% highlight ini %}
sonar.organization=profile
sonar.projectKey=profile:sample-repo
sonar.projectName=Sample Repo
sonar.projectVersion=latest

sonar.links.homepage=https://github.com/profile/sample-repo#readme
sonar.links.ci=https://travis-ci.com/profile/sample-repo
sonar.links.scm=https://github.com/profile/sample-repo
sonar.links.issue=https://github.com/profile/sample-repo/issues

# sonar.analysis.mode=preview
sonar.exclusions=**/node_modules/**/*, **/__tests__/**/*, **/tests/**/*, **/spec/**/*, **/test.ts, **/*.test.ts, **/*.spec.ts, **/*.e2e.ts
# sonar.host.url=http://127.0.0.1:9000/sonar
# sonar.issuesReport.html.enable=true
# sonar.report.export.path=report.json
# sonar.scanner.dumpToFile = dumpFile.txt
# sonar.showProfiling = true
sonar.sourceEncoding=UTF-8
sonar.sources=src
sonar.tests=__tests__

# sonar.language=ts
sonar.typescript.tsconfigPath=tsconfig.json
sonar.typescript.lcov.reportPaths=coverage/lcov.info
sonar.typescript.tslint.reportPaths=coverage/unit-report.json
{% endhighlight %}

## Sonar Modules Configuration

Sonar "Modules" are used to define individual packages, apps, etc. This is useful for the management of monorepo's.

Each Sonar "Module" must have an identifier that can be used to override inherited properties. Module identifiers should use "snake_case" module names as shown in the examples below.

{% highlight ini %}
# Comma-separated list of Sonar "Module" identifiers:
sonar.modules=hello_world

# All Sonar configuration settings can be overridden using module identifier:
hello_world.sonar.projectName=Hello World
hello_world.sonar.projectBaseDir=packages/hello-world
{% endhighlight %}
