---
layout: post
title:  Merging Strategies in GitHub
date:   2019-01-15 01:00:00 -0500
categories:
  - Engineering
---

Different projects use different git merging strategies. Even though this post is really talking about git itself, you can
use this information without actually using GitHub. It also applies to any other online Git frontends like
Bitbucket as well.

_**TLDR**: If you need to maintain all commit IDs in your branches after they are merged/deleted you must use
**Create a merge commit**. If it's an open source project with contributors, **Squash and merge** is the best choice.
If it's a private repo where you can control the engineers **Rebase and merge** is a good choice, however **Squash
and merge** also works just as well._

## Merge Options

<table>
  <tbody>
    <tr>
      <th width="30%">The following dropdown is presented when the arrow to the right of the merge button is clicked:</th>
      <td>
        <p><a href="{{ site.baseurl }}/images/posts/github-repo-merge-button-options.png"><img src="{{ site.baseurl }}/images/posts/github-repo-merge-button-options.png" alt="GitHub repository merge button options" style="float:left;margin-right:10px"></a> <em>Whichever one you select will automatically stay selected, so you don't have to select it each time.</em></p>
      </td>
    </tr>
    <tr>
      <th>Merge button options can be restricted on the Repository Settings page:</th>
      <td>
        <p><a href="{{ site.baseurl }}/images/posts/github-repo-settings-merge-button.png"><img src="{{ site.baseurl }}/images/posts/github-repo-settings-merge-button.png" alt="GitHub repository merge button settings"></a></p>
      </td>
    </tr>
  </tbody>
</table>

## Merge Option Comparison

Each strategy has its own advantages and disadvantages. This table is worded in a way where a ✅ generally means it does that task/option/thing better. However, that's not strictly true in all cases. In fact, you may specifically not want it to have that feature.

<table>
  <thead>
    <tr>
      <th width="62%">Topic</th>
      <th width="19%">Create&nbsp;a Merge&nbsp;commit</th>
      <th width="19%">Squash and&nbsp;merge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#history-is-immutable" aria-expanded="false" aria-controls="history-is-immutable">
            History is immutable
          </a></strong>
        </div>
        <div id="history-is-immutable" class="collapse in">
          <div>
            <p>The history is never modified, so commit IDs will always stay persistent. If your repository, build system, delivery pipeline, bundled application versions or documentation relies on commit IDs staying the same in your entire history (including deleted feature branches) then this can be a deal breaker that means you have to use Create a merge commit.</p>
            <p>It's important to note that rewriting history (if done correctly) should only affect the feature branches before they are merged into you main or stable branch. You would only rewrite history on the main branch if something went terribly wrong (such as passwords got accidentally committed and merged).</p>
          </div>
        </div>
      </td>
      <td>✅</td>
      <td>⛔</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#avoids-introducing-commits-that-break-ci" aria-expanded="false" aria-controls="avoids-introducing-commits-that-break-ci">
            Avoids introducing commits that break CI
          </a></strong>
        </div>
        <div id="avoids-introducing-commits-that-break-ci" class="collapse in">
          <div>
            <p>If you have a CI system running your tests (such as Travis CI), it will be likely be trigged when you push code. However, it does not test every commit, only the most recent. This means it's possible to push 5 commits where 4 of them cause a failure in the build system but the 5th one passes.</p><p>A common scenario is when a build fails for a minor reason like a style check. People will push fixup commits like "fixing code style" or the dreaded "minor". Eventually the build will pass but all those broken commits will be merged in with the feature.</p>
            <p>If you need to rerun a build or use <code>git bisect</code> to locate when bugs were introduced (see <a href="http://elliot.land/post/automatically-locate-when-and-where-bugs-were-introduced-with-git-bisect">Automatically locate when are where bugs were introduced with git bisect</a>) you will have a hard time pinpointing errors that are real as opposed to unrelated failures. Also, unless you absolutely need to ensure commit IDs forever you will have a lot of patches that just aren't useful in your history.</p>
          </div>
        </div>
      </td>
      <td>⛔</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#keeps-a-linear-commit-history" aria-expanded="false" aria-controls="keeps-a-linear-commit-history">
            Keeps a linear commit history
          </a></strong>
        </div>
        <div id="keeps-a-linear-commit-history" class="collapse in">
          <div>
            <p>Branching in git is cheap, easy and wonderful. Even in mid-sized projects with a handful of developers using the <strong>Create a merge commit</strong> strategy can lead to a very convoluted history that's often impossible to follow. For example:</p>
            <p><img src="https://cdn-images.postach.io/aa0e0e8e-5932-48c5-bbd5-bb782bc5caef/4fcfd2ee-cef9-46de-8cd8-ed2126cf8616/83153eb8-9310-41e6-9ec7-a886a9e84f73.png"></p>
            <p>Keeping a linear commit history requires that branches will have to be rebased or collapse their commits on top of the latest head of the branch they wish to merge into. This changes the history (and therefore commit IDs) of the branches, but it also provides a single line of history that is much easier to follow and understand.</p>
          </div>
        </div>
      </td>
      <td>⛔</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#is-easier-for-git-beginners" aria-expanded="false" aria-controls="is-easier-for-git-beginners">
            Is easier for git beginners
          </a></strong>
        </div>
        <div id="is-easier-for-git-beginners" class="collapse in">
          <div>
            <p>Even though nothing is really deleted in git and you can always recover a bad rebase using the <code>git ref-log</code>. It can still be a real problem for beginners that get themselves into a situation that they haven't yet developed the git ninja skills to work their way out of.</p>
            <p>This is often why projects opt for simple merge commits. It's about as full proof as you can get in terms of preventing the engineer from getting into sticky situations.</p>
          </div>
        </div>
      </td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#easily-link-back-to-the-pull-request" aria-expanded="false" aria-controls="easily-link-back-to-the-pull-request">
            Easily link back to the Pull Request
          </a></strong>
        </div>
        <div id="easily-link-back-to-the-pull-request" class="collapse in">
          <div>
            <p>This can be very important for open source projects where all of the issues and discussions are in GitHub itself. GitHub will automatically recognize issue and PR numbers in the form of "#123" in your commit messages and create real links back to those entities.</p><p>Except for <strong>Rebase and merge</strong>, GitHub will include these automatically for you in the commit messages making it much nicer and easier when exploring the commit history to identify why things were changed.</p>
            <p><img src="https://cdn-images.postach.io/aa0e0e8e-5932-48c5-bbd5-bb782bc5caef/4fcfd2ee-cef9-46de-8cd8-ed2126cf8616/e84cacf2-c34e-4c54-ae0c-9a2001da4c3e.png"></p>
          </div>
        </div>
      </td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#avoids-code-cleanup-style-commits" aria-expanded="false" aria-controls="avoids-code-cleanup-style-commits">
            Avoids "code cleanup" style commits
          </a></strong>
        </div>
        <div id="avoids-code-cleanup-style-commits" class="collapse in">
          <div>
            <p>Referencing back to <strong>Avoids introducing commits that break in CI</strong>, people that are not comfortable with rebasing will often create new commits to fix up the tests or builds.</p>
            <p>These are of no use in your history and actually make it harder to locate the real commit that made the genuine change to identify the motivation or description.</p>
            <p>This is where <strong>Squash and merge</strong> really shines and works great in open source projects where the experience of engineers will vary and all changes will be put together in a single commit with a link back to the issue and/or pull request.</p>
          </div>
        </div>
      </td>
      <td>⛔</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#merge-conflicts-are-easier-to-deal-with" aria-expanded="false" aria-controls="merge-conflicts-are-easier-to-deal-with">
            Merge conflicts are easier to deal with
          </a></strong>
        </div>
        <div id="merge-conflicts-are-easier-to-deal-with" class="collapse in">
          <div>
            <p>Rebasing (especially for those new to git) can sometimes be a more complicated way to deal with conflicts because you are dealing with lots of small conflicts that affect conflicts further down the line. We have all done it. When you realized halfway through a rebase that you have chosen the wrong side and you will be dealing with that same conflict many more times.</p>
            <p>If your project is dealing with external engineers or less experienced engineers it can be tough to enforce and make sure they have a nice rebase history.</p>
          </div>
        </div>
      </td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#can-edit-the-message-at-merge-time" aria-expanded="false" aria-controls="can-edit-the-message-at-merge-time">
            Can edit the message at merge time
          </a></strong>
        </div>
        <div id="can-edit-the-message-at-merge-time" class="collapse in">
          <div>
            <p>Sometimes you want to edit the commit message when merging. To fix spelling mistakes, adding extra ticket numbers, etc. <strong>Squash and merge</strong> is great for this.</p>
          </div>
        </div>
      </td>
      <td>⛔</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>
        <div>
          <strong>+ <a role="button" data-toggle="collapse" href="#avoids-suppressing-tags" aria-expanded="false" aria-controls="avoids-suppressing-tags">
            Avoids suppressing tags
          </a></strong>
        </div>
        <div id="avoids-suppressing-tags" class="collapse in">
          <div>
            <p>Tags are just labels that point to specific commit IDs. When rebasing or squashing the history is modified and so the existing commits that were rebased will now have a different commit IDs.</p>
            <p>If you rebase your feature branch you will find that any tags you previously had will now be gone, because they point to commits that are no longer in the history of your branch. The tags are still valid and will not be removed but there is no way to move tags to the equivalent rebased commit, even if no patches or merge conflicts were encountered.</p>
            <p>Tags created on your main or stable branch will stay intact because rebasing and squashing will only append new commits, but any tags within the feature branch will disappear form that history.</p>
          </div>
        </div>
      </td>
      <td>✅</td>
      <td>⛔</td>
    </tr>
  </tbody>
</table>
