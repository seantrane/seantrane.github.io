---
layout: post
title:  Using Sonar Quality Gates
date:   2018-09-18 01:00:00 -0500
categories:
  - DevOps
  - Engineering
  - Security
---

[SonarQube](https://www.sonarqube.org/) and [SonarCloud](https://sonarcloud.io/) require the use of [Quality Gates](https://docs.sonarqube.org/latest/user-guide/quality-gates/) to ensure code quality is maintained. This page contains
descriptions for the variety of recommended Quality Gates that we judge our software by.

## The need for quality gate levels

There are several levels of achievement when judging high quality software. Each piece of software has a different
lifespan, and software with a longer lifespan tends to lose quality over time as software becomes more challenging to
maintain. You can have software that has changed hands, and while quality standards may not have been high in the past,
you want to ensure much higher standards on newly developed code.

Sonar provides a number of metrics and operators to describe code quality, but one must implement their own Quality
Gates to get effective use out of the functionality. The more opinionated the Quality Gates are, the more effective
they can be at maintaining high code quality standards.

You want software engineers to be incentivized to achieve high quality standards, while
being flexible enough to not block momentum. If Quality Gates are not used to prevent code changes of a lesser standard, they
can easily become blockers if there isn't a prescriptive and opinionated way to handle them and describe what they
mean.

## Sonar Quality Gates

<section class="row">

  <section class="col-lg-5">

    <h3>Platinum Quality Gate</h3>
    <p>Only applications and codebases of the highest quality are capable of passing the <em>Platinum Quality Gate</em>.</p>
    <p><em>Platinum apps</em> and their developers demonstrate a true passion for excellence. They should be
      recognized and rewarded as the metrics required for platinum status are no small feat for developers to
      achieve. That is why so few apps will be capable of achieving platinum status.</p>

  </section>
  <section class="col-lg-7">

    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>95%</td>
          <td><strong>90%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>&nbsp;</td>
          <td><strong>95%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>1%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Major Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>5</td>
          <td><strong>10</strong></td>
        </tr>
        <tr>
          <td><strong>New Major Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0</td>
          <td><strong>5</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">

    <h3>Gold Quality Gate</h3>
    <p>The <em>Gold level</em> is reserved for the applications and codebases that take the next leap above the
      industry standard.</p>
    <p>Developers of <em>Gold apps</em> are reaching for excellence and demonstrating a very high level of code
      quality. They have a very real opportunity to take the next step to excellence.</p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>90%</td>
          <td><strong>85%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>&nbsp;</td>
          <td><strong>90%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>3%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>1%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">
    <h3>Silver Quality Gate</h3>
    <p><em>Silver status</em> represents the industry standard and should be the baseline that every application
      and codebase aim to achieve.</p>
    <p>Most apps should fall into this category. When quality gates below this are applicable to more apps, there
      should be unrest. While it is acceptable for an app to remain indefinitely at <em>Silver status</em>, it is
      totally unacceptable for an app to remain at any lower level.</p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>85%</td>
          <td><strong>80%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>&nbsp;</td>
          <td><strong>85%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>5</td>
          <td><strong>10</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>1%</td>
          <td><strong>5%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>3%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>New Critical Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">
    <h3>Bronze Quality Gate</h3>
    <p>Applications and codebases achieving <em>Bronze status</em> are on the precipice of industry standard
      acceptability, but falling short in some key areas.</p>
    <p>Developers of <em>Bronze apps</em> should not remain bronze for long, as the industry standard is well
      within reach and only complacence can keep them from it.</p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>Yes</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>80%</td>
          <td><strong>70%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>&nbsp;</td>
          <td><strong>80%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>15</td>
          <td><strong>30</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>5%</td>
          <td><strong>10%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>5%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>New Critical Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>1</td>
          <td><strong>5</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>&nbsp;</td>
          <td><strong>A</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">
    <h3>Iron Quality Gate</h3>
    <p>The <em>Iron level</em> is for applications and codebases that have a concerning lack of code quality, but
      preventions of it getting any worse.</p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>0</td>
          <td><strong>5</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>70%</td>
          <td><strong>60%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>80%</td>
          <td><strong>70%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>20</td>
          <td><strong>40</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>10%</td>
          <td><strong>20%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0%</td>
          <td><strong>10%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>New Blocker Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>&nbsp;</td>
          <td><strong>0</strong></td>
        </tr>
        <tr>
          <td><strong>New Critical Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>1</td>
          <td><strong>10</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>A</td>
          <td><strong>B</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">
    <h3>Stone Quality Gate</h3>
    <p><em>Stone status</em><span> is for applications and codebases that have a seriously alarming lack of code
        quality. The are preventions of it getting any worse, but the situation needs immediate attention.</span></p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>0</td>
          <td><strong>10</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>60%</td>
          <td><strong>50%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>70%</td>
          <td><strong>60%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>30</td>
          <td><strong>50</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>20%</td>
          <td><strong>30%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>10%</td>
          <td><strong>20%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>New Blocker Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0</td>
          <td><strong>5</strong></td>
        </tr>
        <tr>
          <td><strong>New Critical Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>5</td>
          <td><strong>15</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>B</td>
          <td><strong>C</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
  <section class="col-lg-5">
    <h3>Wood Quality Gate</h3>
    <p>Software that is capable of spontaneous combustion at a second glance. The <em>Wood status</em> is no status
      at all really. The situation will either improve or be relegated to the <em>bonfire of bad software</em>.</p>

  </section>
  <section class="col-lg-7">
    <table>
      <thead>
        <tr>
          <th width="40%">Metric</th>
          <th width="20%">On New Code</th>
          <th width="20%">Operator</th>
          <th width="10%">Warning</th>
          <th width="10%">Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blocker Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>10</td>
          <td><strong>20</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage</strong></td>
          <td><em>No</em></td>
          <td>is less than</td>
          <td>50%</td>
          <td><strong>40%</strong></td>
        </tr>
        <tr>
          <td><strong>Coverage on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is less than</td>
          <td>60%</td>
          <td><strong>50%</strong></td>
        </tr>
        <tr>
          <td><strong>Critical Issues</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>40</td>
          <td><strong>60</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines (%)</strong></td>
          <td><em>No</em></td>
          <td>is greater than</td>
          <td>30%</td>
          <td><strong>40%</strong></td>
        </tr>
        <tr>
          <td><strong>Duplicated Lines on New Code (%)</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>20%</td>
          <td><strong>30%</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Maintainability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>New Blocker Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>0</td>
          <td><strong>10</strong></td>
        </tr>
        <tr>
          <td><strong>New Critical Issues</strong></td>
          <td><em>Always</em></td>
          <td>is greater than</td>
          <td>10</td>
          <td><strong>20</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Reliability Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating</strong></td>
          <td><em>Never</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
        <tr>
          <td><strong>Security Rating on New Code</strong></td>
          <td><em>Always</em></td>
          <td>is worse than</td>
          <td>C</td>
          <td><strong>D</strong></td>
        </tr>
      </tbody>
    </table>

  </section>
</section>
