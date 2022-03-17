# [RFC] Software Templates

**Summary**: Determine requirements to create Software Templates for the Lighthouse Developer Portal


## Background

Creating a new application when starting from an empty repository is a time consuming and error prone process. This process typically includes tasks like creating a repository, organizing files and directories, setting up basic configuration files, creating workflows for a CI pipeline, etc. Any time saved while standing up a new project could be extra times spent towards developing the actual application. One solution to this common problem is known as scaffolding. Scaffolding automates the project creation process using templates thereby saving time and ensuring each new project contains all of the necessary files and configurations. Backstage includes a scaffolder that can be used directly through the web based UI. The user can select a template type and then submit information about the project to initiate the Scaffolder plugin. The Backstage Scaffolder runs a workflow, similar to a GitHub action, that will use a template to create the templated project and then push the project to a newly created repository. The new project will also automatically be registered in the software Catalog

## Goal
We want to leverage the Backstage Scaffolder plugin so teams can more easily and quickly setup new projects using a selection of software templates.

## Creating Templates

Each Software Template is defined with a `template.yaml`. The template is a workflow and describes the steps for setting up the new project.

```

```