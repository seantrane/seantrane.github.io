---
layout: post
title:  Security Monitoring in GitHub
date:   2019-01-16 01:00:00 -0500
categories:
  - Engineering
  - Security
---

GitHub has data services that can scan a repository for known security vulnerabilities found in dependencies.

## Settings and Configuration

### Data Services

You can find configuration for GitHub Data Services on the Repository Settings page. It is advisable to enable all settings in this area. Security monitoring and alerting cannot happen unless GitHub is granted permission to scan the dependencies of a repository.

[![GitHub Repository Data Services Settings]({{ base_url }}/images/posts/github-repo-settings-data-services.png)]({{ base_url }}/images/posts/github-repo-settings-data-services.png)

### GitHub Alerts Settings

Vulnerability alerts can be sent to any person or team. You can find configuration options within the Alerts section of the Repository Settings page. The default is organization and repository admins. It is best practice to only add GitHub Teams, if necessary. Additionally, as the section description says; users can manage their own notification settings, which controls how alerts are sent/received.

[![GitHub Repository Alerts Settings]({{ base_url }}/images/posts/github-repo-settings-alerts.png)]({{ base_url }}/images/posts/github-repo-settings-alerts.png)

## GitHub Vulnerability Alerts

The primary location of a GitHub Vulnerability Alert is at the top of the Repository page, displayed only to individuals granted access via the Alerts Settings.

[![GitHub Repository Security Alert]({{ base_url }}/images/posts/github-repo-security-alert.png)]({{ base_url }}/images/posts/github-repo-security-alert.png)

Clicking See security alert leads to the Alerts section of the Repository Insights page, which provides a summary of open vulnerabilities.

[![GitHub Repository Vulnerability Alert]({{ base_url }}/images/posts/github-repo-alerts-vulnerability.png)]({{ base_url }}/images/posts/github-repo-alerts-vulnerability.png)

Clicking a vulnerability will lead to a Vulnerability Details page, where all additional information is available. The instructions provided are not necessarily advisable, as the may be signifying a "sub-dependency", in which case the direct dependency would need the consideration.

[![GitHub Repository Vulnerability Alert Details]({{ base_url }}/images/posts/github-repo-alerts-vulnerability-details.png)]({{ base_url }}/images/posts/github-repo-alerts-vulnerability-details.png)
