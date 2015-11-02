# Editor Team Instructions

This document contains information used by the editors maintaining the specification.

## Handling Pull Requests

This spec does not use the green "Merge pull request" button. This ensures that each change is a single commit on the main `gh-pages` branch.

The following subsections contain instructions for merging. They assume the Bash functions that follow them are present.

### Merging Pull Requests from Forks

1. `git checkout gh-pages`

1. `pr <pull request ID>`

1. If index.html is not part of the pull request and needs to be updated:
  1. Generate index.html.
  1. Run the following:

    ```
    git add index.html
    git commit --amend
    ```

1. If the commit message needs to be updated (i.e. To add "Fix #\<bug ID\>: "), run the following and update the message:
    ```
    git commit --amend
    ```

1. `git push`

1. Close the pull request by following these steps in the web interface:
  1. Let `has` be the the commit hash.
  1. Navigate to the pull request.
  1. Add a comment that say "Merged as `hash`." and click the "Close pull request" button to post that
comment.

### Merging Pull Requests from Branches
For pull requests coming from branches within this repository, use the same steps above except use `mypr`.

### Bash Functions
The following are based on https://github.com/whatwg/html/blob/master/TEAM.md.

```
pr () {
  git fetch origin refs/pull/$1/head:refs/remotes/origin/pr/$1 --force
  git checkout -b pr/$1 origin/pr/$1
  git rebase gh-pages
  git checkout gh-pages
  git merge pr/$1 --ff-only
}

mypr () {
  git checkout $1
  git rebase gh-pages
  git push origin $1 --force
  git checkout gh-pages
  git merge $1 --ff-only
}
```
