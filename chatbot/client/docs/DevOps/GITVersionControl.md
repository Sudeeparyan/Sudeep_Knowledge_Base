### Version Control (VC)

## Understanding

### Overview

Version control records all changes made to the files, creating a historical
record of all modifications, who made them, when they were made, and why.

It facilitates collaboration and enables disaster recovery. It also makes it
easy to audit changes.

Understand in detail
[here](https://dora.dev/devops-capabilities/technical/version-control/).



### Why?

Version control is considered to be one of the core engineering software
practices in  because it enables:

1. Disaster Recovery: Reproduce Deterministically​
2. Auditability: Show the path backwards for every deployment on where it came​
   from
3. Higher Quality: Enables faster delivery and quick feedback to improve the
   quality
4. Capacity Management: Create reproductions​ easily when there is a need to
   scale up
5. Response to Defects: Quick restore​

### Risk of not doing

:no_entry: Failing to follow VC can lead to

1. Significant productivity impact - time, cost and resources
2. Lack of standardization and collaboration
3. No traceability or auditability for changes made
4. No possibility to recover from disasters
5. No version management and application stability

### Resources

| Topic          | Description                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| Template       | [Repo folder structure](RepoFolderStructure.md)                                         |
| External Links | [DORA Version Control](https://dora.dev/devops-capabilities/technical/version-control/) |

## Implementation

1.  Below list of project artifacts should be version-controlled (basically
    everything needed to restore the production service) -
    1. Application source code and dependencies (libraries and static content)
    2. Supporting automated tests
    3. Requirement documents, design documents, release notes, handbooks.
    4. Configuration files
    5. Scripts used (database scripts, application reference data)
    6. Environment creation scripts and configurations
    7. Pipeline files
2.  All folders in version control should have a `code owner`.
3.  It should be access-controlled and audited once a month by the `Tech Lead`.
4.  Below code/content submission rules should be enforced
    1. All submissions to the `main` branch require PR workflow
    2. All submissions to the `main` branch require `code owner` approval
    3. All PRs should have passing checks (pipeline, status) before submission
       to the `main` branch
5.  Internal and external release commits should have tags created for
    identification.

### Non-negotiable items

To ensure the success of version control process, certain non-negotiable items
should be adhered:

1. Main branch should be protected - no merge without review​
2. Setup code owners for all folders​
3. Define proper folder structure​
4. ​Have tags created for every release
5. Have all assets and documents needed to restore production services in
   version control which inturn facilitates review and approval of any updates
   made
6. Have 'Least privilege' and audit every month


# Frequently Asked Questions (FAQs)

> All the source code is in version control but some of the documents are in
> other places like Sharepoint / Confluence. They are also in different formats
> like Word / Excel / PPT which might not be effective when put into version
> control. What should be done in this case?

- The main reason for recommending to have all the documents in version control
  is to mandate the process of reviewing and approving any change made to the
  documents. It is agreed that if documents are in different format (not in md
  file) it is difficult to have it in version control and review changes
  effectively. In this case, you can continue to maintain the documents in other
  places but you have to make sure there is a review process enforced for any
  document update. The documents can have a version history table with reviewed
  and approved by details added for every revision. The process for review
  should be documented and aligned with everyone in the team. There should be a
  designated owner for every document whose review is mandatory for any updates
  done to that particular document. This requires a lot of manual effort to
  ensure the process is followed stringently.
- When you are creating new documents in the future, push for transitioning to
  md files and tracking it in version control

> The project repo is owned by customer and they take responsibility for adding
> / removing required access to people. What should be my responsibility here as
> a Tech Lead?

- If the repo is owned by customer, we can make sure we are informing the repo
  owner whenever a transition happens in the team. As part of onboarding /
  off-boarding process document, we should also have a check point for ensuring
  this communication on repo access


# Folder structure

Below is the recommended folder structure for maintaining all the project
artifacts in version control. It is an exhaustive list and some folders might
not be applicable for your project. Please use this as a reference and tailor it
based on your project need.

<!-- prettier-ignore-start -->
```markdown
.
├── .< Repo configuration >
├── .assets
│ ├── BuildTools
| └── Documents
|   └── Handbooks
|     └── Conventions
|       └── < asset name > - file that is used in Conventions folder
├── BuildTools
├── Documents
│ ├── Handbooks
│ │ ├── Conventions
│ │ └── HowToGuides
│ ├── Design Documents
│ ├── Requirement Documents
│ ├── Release Notes
│ ├── User Guide
│ └── < build config files for documents folder >
├── Source
│ ├── < App/Service 1 >
│ │ └── < Sub folders >
│ └── < App/Service 2 >
│   └── < Sub folders >
├── Shared
│ └── Libraries
│ └── < Shared libraries >
├── Scripts
├── Tools
│ └── < Custom tools built >
├── Playground
│ ├── R&D
│ └── Demos
├── Readme.md
├── Contributing.md
└── < build config files for root folder >
```
<!-- prettier-ignore-end -->

## Repo configuration



```text
.azuredevops - Pull request template
.husky - Pre commit hooks to check for linting errors before every commit
.vscode - VS code extension settings
```

## Assets

All the images used in different parts of the repo can be organized in this
location. For better maintenance the image file can be added by creating the
exact same folder structure similar to where it is being used.The general norm for supporting folders like assets is to
start with . so that it will be hidden always. This can vary based on your
project need.

## BuildTools

This folder contain scripts related to CI/CD

## Documents

This folder contain all the project documentation.

### Handbooks

By definition, A handbook is a concise and comprehensive collection of
information, facts, instructions, and processes about something.

#### Conventions

The Conventions folder contains documents and style guides that outlines the
standards, best practices, guidelines and coding conventions for your project.

Any traditional principles and guidelines that are being inherited from external
recommendations can also be consolidated here.

Example : Coding standards, Style guides

#### HowToGuides

The How-to Guides folder contains practical step-by-step instructions and
tutorials aimed at helping team members solve specific technical problems or
complete common tasks efficiently.

Example : How to setup development environment, How to run the application

### Design Documents

All the technical design documents goes into this folder. This includes
architecture documents, feature specific HLDs, etc.



### Release Notes

Release notes for every update can be maintained in this folder

### User Guide

Documentation on how to use the application can go into this folder.

### Build config files

Build config files include items like package.json, prettier config files, lint
config files and other pipeline files

## Source

Here is where the actual code base resides. It could be split into multiple
services and maintained in different folders based on the architecture

## Shared

All the shared libraries or modules source code can be maintained here.

## Scripts

This folder contains files like build scripts, database migration scripts, etc

## Tools

Any project internal tools can be maintained here

## Playground

Any research or exploration work can be maintained here. This could include
quick prototypes that are done for feasibility check.

## Readme

README file is the first item that anyone will look at when visiting your
repository. Add important information about your project in this file. This can
include the following

- What the project does
- How to get started with the project

PS: Make sure we are not living with the auto generated README file forever!

## Contributing

Add quick guide for developers to start contributing to the repo. This typically
includes prerequisites, how to setup development environment, formatting and
linting configurations and other instructions on how to develop and merge any
work to the repo
