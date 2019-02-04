# Getting started

> `git clone git@bitbucket.org:devexpateo/pa.git` > `cd pa` > `npm i` > `npm run start`

# Running Tests

> `npm run test`

# Development

> `npm run start`

# Production build

> `npm run build`

# Technical stack

- React
- Redux (redux-thunk, redux-form)
- React.SemanticUI
- Mocha, Sinon, Enzyme, Should

# File structure

Based on Atomic Design + Duck directory

- pages : containing all pages
- redux-utils : containing all redux utilitaries
  ...

# Workflow

1.  git pull
1.  git checkout feature*<branch-feature> or fix*<branch-fix>
1.  git commit
1.  git commit ...
1.  git push
1.  CREATE pull request <branch-> -> develop
1.  MERGE pull request _into develop_--> trigger test runner --> tests are valid ? --> trigger a deployement
1.  DO NOT merge manually without a -m flag `git merge XXX -m 'Merge XXX into XXX'

# Deployment

Bituckets pipelines + Bitbuckets deployement -> trigger netlifly build -> deploy

To skip build : add [skip ci] into the commit message as described here (https://confluence.atlassian.com/bitbucket/branch-workflows-856697482.html)

To configure `bitbucket-pipelines.yml` see https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html

wath's news : https://confluence.atlassian.com/bitbucket/what-s-new-in-bitbucket-pipelines-859444600.html

# Environnement

- Production : manual trigger
- Staging : automatique trigger on develop branch push (NODE_ENV = production)
- Developement (test) automatique trigger on develop branch push (NODE_ENV = development)

# PWA : Notification + Push Api + Service Worker

# Building badge

# i18N

# Tests

# UX Data : GA

# How themes work

# Feature Toogle

# Documentation

... JSDOC ...

# Classic Issues :

- `ENOSPC` --> `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
  (src)[https://github.com/facebook/jest/issues/3254#issuecomment-297214395]
