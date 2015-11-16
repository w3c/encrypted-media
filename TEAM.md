# Editor Team Instructions

This document contains information used by the editors maintaining the specification.

## Updating `index.html`

>Note: The following references the main spec, but similar steps apply for registry files.

`index.html` is the published version of the specification.
Unlike some other ReSpec-based specifications, this one does not rely on runtime generation when viewing the specification.
Thus, a new `index.html` must be generated, committed, and pushed in order for changes to the `-respec.html` file to be reflected.
We generally do this for every commit, but sometimes we only generate the file once for a series of commits.

Use the following steps to publish the new index.html after modifying the `-respec.html` file:

1. Open an Incognito or private browsing window. (This generally ensures that extensions are not loaded and will not interfere with the output.)
1. Open the `-respec.html` file in that window.
1. **Verify that there are no errors** next to the ReSpec bubble in the upper right corner.
1. **Verify that ReSpec completed and there are no exceptions** by checking the browser's console (i.e. `Ctrl+Shift+i`). You should see exactly three ReSpec logs entries and no other messages:
  >```
  >RESPEC PROCESSING STARTED
  >RESPEC Version: 3.2.76
  >RESPEC DONE!
  >```

1. ReSpec button => Save Snapshot => Save as HTML
1. `mv ~/Downloads/index.html ./`
1. Review the diff in a tool like `gitk`.
  * `-respec.html` should contain just your edits.
  * `index.html` should generally contain diffes related to your edits. However, sometimes, such as when a Note is added or ReSpec has been updated, there will be lots of unrelated changes.
1. `git commit -a`
1. `git push`

## Handling Pull Requests

This spec does not use the green "Merge pull request" button. This ensures that each change is a single commit on the main `gh-pages` branch.

The following subsections contain instructions for merging. They assume the Bash functions that follow them are present.

### Merging Pull Requests from Forks

1. `git checkout gh-pages`

1. `pr <pull request ID>`

1. If the pull request contains multiple commits, squash them as appropriate.
   * In general, all commits and merges should be squashed into a single commit.
   * If commits or sets of commits represent multiple distinct actions (i.e. do something then rename a variable), then the branch might be squashed into two or more commits, each representing a distinct action.
   * Squash commits by running `git rebase -i origin/gh-pages` then using `squash` on the commit(s) to be squashed.

1. If index.html is not part of the pull request and needs to be updated:
  1. Generate index.html.
  1. Run the following:

    ```
    git add index.html
    git commit --amend
    ```

1. If the commit message needs to be updated (i.e. To add "Fix #\<bug ID\>: "), do one of the following and update the message:
    * Run `git rebase -i origin/gh-pages` then use `reword` to select the commit(s) to reword.
    * Run `git commit --amend` and edit the last commit message.

1. `git push`

1. Close the pull request by following these steps in the web interface:
  1. Let `hash` be the the commit hash.
  1. Navigate to the pull request.
  1. Add a comment that say "Merged as `hash`." and click the "Close pull request" button to post that
comment.

### Merging Pull Requests from Branches
For pull requests coming from branches within this repository, use the same steps above except use `mypr` and there is no reason to use the web interface.

`git push` will _automatically_ close the pull request and mark it as merged, since the commits contained there were updated.

### Bash Functions
The following is based on https://github.com/whatwg/html/blob/master/TEAM.md.

```
pr () {
  git fetch origin refs/pull/$1/head:refs/remotes/origin/pr/$1 --force
  git checkout -b pr/$1 origin/pr/$1
  git rebase gh-pages
  git checkout gh-pages
  git merge pr/$1 --ff-only
}
```
Pulls down the PR into a local branch, using [the special refs GitHub provides](https://help.github.com/articles/checking-out-pull-requests-locally/); rebases the PR's commits on top of `gh-pages`; and does a fast-forward only merge into `gh-pages`.

```
mypr () {
  git checkout $1
  git rebase gh-pages
  git push origin $1 --force
  git checkout gh-pages
  git merge $1 --ff-only
}
```
Rebases the PR on top of `gh-pages`; force-pushes it to the appropriate branch, thus updating the PR; and does the fast-forward only merge into `gh-pages`.
