### Software Engineering Practices 

### Documentation Practices

#### Requirement Documentation

Requirement documentation records project objectives, scope, functional, and
non-functional requirements essential for building the software system.

It serves as a reference for all stakeholders to ensure alignment and a clear
understanding of the requirement.

How to implement

1. Guideline
   1. Should be a markdown (.md) file.
   2. Should be in the version control of the project.
   3. All changes should go through the Pull Request(PR) workflow with the
      necessary reviewers and code owners.
   4. Should include the following contents
      1. Unambiguously capture functional, and non-functional requirements.
      2. Clearly defined outcomes and acceptance criteria.
   5. Maintain two levels of requirement documents
      1. Project or System-level requirements
      2. Workflow level requirements
2. Template
   1. [System Requirements Template](../../../Templates/SystemRequirementsTemplate.md)
   2. [Feature Requirements Template](../../../Templates/FeatureRequirementsTemplate.md)
3. When
   1. Should be created during Pre-sales.
   2. Should be updated at regular intervals during the project.
4. Owner
   1. The `Presales Owner` should start during the presales
   2. The `Project Lead` should maintain the requirement document.
5. Contributors
   1. Project Manager
   2. Tech Lead
   3. Development Team
   4. Customer

> :no_entry: **Risk of not doing**
>
> 1. Unnoticed scope creep
> 2. Improper design
> 3. Wasted effort - time and money

#### Acceptance Table Definition

The acceptance table (AT) records all test scenarios (both functional and
non-functional) that the application should pass for a feature to be called
`Done`.

It is required to verify and validate that all requirements part of the
acceptance criteria are satisfied.

How to implement

1. Guideline
   1. Should be done at a feature level.
      1. All features should have an acceptance criteria (AC) mentioned.
      2. For each feature, a new acceptance table has to be created.
   2. Should list all test cases in `given_when_then` format.
   3. Should include test cases for all line items listed in acceptance criteria
      (AC).
   4. Should include test cases for both functional and non-functional
      requirements.
   5. Should indicate if a test case has an automated test and its type (unit,
      integration or E2E).
   6. Should capture who performed the test and when it was tested if the test
      was manually performed.
   7. All test cases should directly link to the acceptance criteria ID (in AzDo
      work item or equivalent).
   8. Should be reviewed and approved by the `Tech Lead` and `Project Lead`.
2. When
   1. Should be defined during the planning phase for each feature.
   2. Should be updated and maintained throughout the development process of the
      feature.
3. Owner
   1. The `Project Lead` should define and maintain the acceptance table.
   2. The `Project Lead` can delegate ownership to the `Feature Lead` for
      particular features.
4. Contributors
   1. Tech Lead
   2. Product Owner
   3. Development Team
   4. Customer
   5. QA Engineers
5. 
> :no_entry: **Risk of not doing**
>
> 1. Poor software quality (bugs, requirement misses)
> 2. Scope creep after development
> 3. Challenges in verifying compliance with AC

#### Technical Documentation

Technical documentation records clear and comprehensive information about the
software - its architecture, design, and usage.

It serves as a valuable resource for development teams, operations, maintenance
or support teams, and other stakeholders.

How to implement

1. Guideline
   1. Should be maintained in the version control system.
   2. Should be in the same repo (close to the source code)
   3. Should be easily available and searchable for all readers & contributors.
   4. List of technical documents to be maintained
      1. Architecture documents
         1. C4 Architecture diagrams
         2. System overview documents
         3. Database schema documents
         4. API documents
         5. Architecture decision records
      2. High-level design documents for each workflow/feature
      3. Project Handbooks
         1. Conventions & best practices
         2. How-To Guides
      4. Release notes
      5. User-facing documents (as needed)
   5. Guide to writing good technical documents - [Guide](TBD)
2. Template
   1. [Document Repository Templates](TBD)
3. When
   1. Should be used throughout the project lifecycle.
4. Owner
   1. The `Tech Lead` should own and organize technical documentation.
5. Contributors
   1. Development Team
   2. Project Lead
   3. Product Owner
   4. Project Manager

> :no_entry: **Risk of not doing**
>
> 1. Lack of common understanding
> 2. Increased onboarding time
> 3. Knowledge silos and people dependency
> 4. Loss of Knowledge over time
> 5. Reinvention of wheel and reduced efficiency
> 6. Need for repeated meetings and on-call time

### Code Maintenance Practices

#### Version Control

Version control records all changes made to the files, creating a historical
record of all modifications, who made them, when they were made, and why.

It facilitates collaboration and enables disaster recovery. It also makes it
easy to audit changes.

[Read more on how to adopt Version Control for projects](./VersionControl/Overview.md)

#### Trunk-Based Development

Trunk-based development is a version control management practice where
developers merge small, frequent updates to a core `trunk` or `main` branch.

It reduces conflicts and streamlines the merging, and integration of code.

[Read more on why and how to adopt Trunk Based Development for projects](./TrunkBasedDevelopment/Overview.md)

#### Code Review

Code review is a practice of having peers and code owners review and provide
feedback on the proposed code change.

It enhances code quality and enables early identification of issues, drifts in
quality or best practices.

How to implement

1. Guideline
   1. Code review should be enforced through pull requests (PR).
   2. All submissions (code, scripts, documents, assets) to the `main` branch
      should be reviewed.
   3. The `Code author` should create a PR with the proposed change and request
      review comments.
   4. Review from `peers` is good to have but getting approval from the
      `code owners` is mandatory.
   5. The `Code author` should communicate clearly -
      1. Why this change is required
      2. Changes implemented in the PR
      3. Summary of automated tests added
      4. How the changes were tested
      5. Inline comments and necessary context for async reviewers
      6. If applicable, add screen shot/screen recordings to describe the change
   6. The `Code owner` should review and provide feedback on the following -
      1. Is the submission small and simple for review in 20 minutes?
      2. Is the code easy to understand and follow?
      3. Is the code clean and follows best practices, and software design
         principles?
      4. Is the code architected well?
      5. Does it follow all coding guidelines agreed upon within the team?
      6. Does the code adhere to the design agreed upon in high-level design
         documents?
      7. Does the code introduce defects?
      8. Are there areas where code can be improved or simplified?
      9. Is the pipeline passing with no errors or warnings?
   7. The `Code owner` (and reviewers) should mark their vote explicitly after
      review (use equivalents of these votes in other code review tools) -
      1. Approved - The reviewer found no issues (for their area of expertise)
      2. Approved with suggestions - The reviewer has some feedback that needs
         to be addressed before submitting
      3. Wait for Author - **Cannot submit**, The reviewer needs
         clarification/actions from the author
      4. Rejected - **Cannot submit**, Fundamental issues that need
         rework/alignment
   8. The `Code owner` should communicate clearly -
      1. Reason for their votes
      2. What needs to be addressed before re-requesting review?
      3. Differentiate suggestions and comments that are non-negotiable and use
         prefixes like `await`, `major`, and `must-fix:` to make blocking
         comments
      4. Background and reference(s) for comments (wherever applicable)
   9. The `Code author` should address all feedback and re-request review if
      required.
   10. Once approved, the `Code author` should ensure all feedback is addressed
       and changes are merged to the `main` branch.
   11. For rudimentary changes, `Code author` can bypass reviews from
       `Code owners` after getting changes reviewed from at least one another
       `Code reviewer`
   12. Read more-
       [Code Review Handbook](https://google.github.io/eng-practices/review/reviewer/),
       [Code Authors Handbook](https://google.github.io/eng-practices/review/developer/)
2. When
   1. Should be used throughout the development process.
3. Owner
   1. The `Tech Lead` should own and enforce the code review process.
   2. The `Tech Lead` can delegate ownership to `Code owners` when required.
4. Contributors
   1. Development Team
   2. QA Engineers
   3. Project Lead
   4. Product Owner
   5. Customer
5. Refer
   [code review metrics](../MeasuringSoftwareEngineeringPractices.md#code-review)
   to measure the effectiveness of this practice in a project

> :no_entry: **Risk of not doing**
>
> 1. Suboptimal quality of code or artifacts submitted
> 2. High chance of application design failures
> 3. Stability and security issues due to lack of review
> 4. Lack of consistency
> 5. Lack of knowledge sharing and hindered growth

### Testing and Quality Practices

#### Test Automation

Test automation involves systematically running automated tests to verify
software functionality and performance of the system, component, module or unit
under test.

It ensures code correctness, and early defect detection, and reduces the risk of
production errors. It also improves developer efficiency

How to implement

1. Guideline
   1. Set up a test automation framework at the start of the project.
   2. Write and run tests continuously throughout the delivery process.
   3. Pick a
      [testing strategy](https://www.linkedin.com/pulse/pyramid-diamond-honeycomb-trophy-find-testing-strategy-fits/?trk=article-ssr-frontend-pulse_more-articles_related-content-card)
      and continuously tune it.
   4. Add automated tests for all code changes (in the same PR).
   5. Ensure all regression tests are passing for all code changes.
   6. Use
      [shift left testing approach](https://www.ibm.com/topics/shift-left-testing)
   7. Complement manual tests along with automated tests (like exploratory
      testing, and usability testing)
   8. Read more
      1. [Test automation document](../TestAutomation.md)
      2. [DORA Test automation](https://dora.dev/devops-capabilities/technical/test-automation/)
2. When
   1. Should be used throughout the development and deployment process.
3. Owner
   1. The `Tech Lead` should enforce testing automation with the right
      strategies.
4. Contributors
   1. Development Team
   2. QA Engineers

> :no_entry: **Risk of not doing**
>
> 1. Lack of stability and failures in production
> 2. Severe quality defects due to lack of regression testing
> 3. Security vulnerabilities
> 4. Performance gaps
> 5. Increased post-release maintenance
> 6. Stress and burnout for developers

#### Continuous Integration (CI)

Continuous Integration is the practice of frequently integrating code changes
into a shared repository and running automated tests. It ensures code
reliability, identifies integration issues early, and improves development
collaboration.

[Read more on why and how to adopt Continuous Integration for projects](./ContinuousIntegration/Overview.md)

#### Deployment Automation

Deployment automation is what enables the deployment of your software with the
push of a button.

[Read more on why and how to adopt Deployment Automation for projects](./DeploymentAutomation/Overview.md)

## Need-driven Software Engineering Practices

Below is a list of **NEED-DRIVEN** software engineering practices that can be
considered based on project needs and the team's objectives.

| S.No | Practice                     | Description                                                                                                              | Who Owns    | Guideline                                                                                                    |
| ---- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------ |
| 1    | Continuous Delivery          | Ability to release changes of all kinds on demand quickly, safely, and sustainably                                       | `Tech Lead` | [Continuous Delivery](https://dora.dev/devops-capabilities/technical/continuous-delivery/)                   |
| 2    | Monitoring and Observability | Tool or solution that allows to watch, understand and actively debug complex systems                                     | `Tech Lead` | [Monitoring and observability](https://dora.dev/devops-capabilities/technical/monitoring-and-observability/) |
| 3    | Shifting left on Security    | Address security concerns earliest in the software development lifecycle                                                 | `Tech Lead` | [Shifting left on security](https://dora.dev/devops-capabilities/technical/shifting-left-on-security/)       |
| 4    | Test data management         | Strategy to generate, manage and share good test data                                                                    | `Tech Lead` | [Test data management](https://dora.dev/devops-capabilities/technical/test-data-management/)                 |
| 5    | Database change management   | Managing configurations and communication to avoid risk and delay when performing deployments                            | `Tech Lead` | [Database change management](https://dora.dev/devops-capabilities/technical/database-change-management/)     |
| 6    | Flexible Infrastructure      | Allows for provisioning environments, make configuration changes, and execute deployments through an automated mechanism | `Tech Lead` | [Flexible infrastructure](https://dora.dev/devops-capabilities/technical/flexible-infrastructure/)           |
