---
description: How we do code (or try to at least)
---

# Codebase

## 📜 **Guidelines**

Here we list a few practical considerations that we found useful.

### 👍 Good practice

* Notify and remind reviewers about pull-requests.
* Pull-requests should not be left open longer than 10 hours.
* Each pull-request should only include a single task.
* Delete branches after merging a pull-request
* Commit messages should have the following format:
  * Start with the category:
    * feat - New features
    * fix - Bug fixes
    * chore - Refactoring, editor configs etc.
    * style - Not functionality, eg. CSS
    * wip - Work in progress
  * Then a description of what you have done.
  * Example: `feat: add navbar`

### 🐙 Github integration

When we do project management on Jira, we like to create a new branch for every new issue. This makes it easier to track the task. All you need to do is to follow the correct naming convention for new branches.

Start your branch name with the issue code and then the issue title, divided by dashes. For example `LEG-230-setup`.

Jira simplifies the process by providing you with a line that you can paste in your terminal to do it for you. See the an example in the image below.

![Github integration example](../../agile/jira\_github\_integration.png)

## Automation

We are a fan of making life easier for ourselves. So we use stuff like Cloudflare and Github Actions to automate deployments. So don't go pushing things in places where you shouldn't (usually the develop and master branches, and in general life).

## Cloud and Servers

We are still growing. So no Kubernetes (yet).

For now we use [Vultr](https://www.vultr.com/) Servers and instances.

Let the big dogs worry about these things.

## Monitoring

We primarily use [New Relic](https://newrelic.com/) to monitor all our services.&#x20;
