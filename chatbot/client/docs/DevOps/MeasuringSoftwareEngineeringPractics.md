### Measuring Software Engineering Practices

As we adopt the
[Software Engineering Practices](./SoftwareEngineeringPractices.md) in projects,
It is important to have quantitative and qualitative metrics to measure the
effectiveness of the practice.

The metrics outlined below will serve as a baseline indicator for the
`Tech Leads` to evaluate the effectiveness of these practices in a project and
help progress towards the the desired end goal.

In addition to these metrics, project teams may need to identify or develop
custom metrics to track effectiveness specific to their projects.

## Requirement Documentation

| Factor to test                                      | What to measure                                                                                                                                      | Goal                                                                                                                                                                                           |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development features with requirement documentation | Measure the percentage of features that contains requirement documentation                                                                           | All the project features should contain detailed requirement documentation before start of development                                                                                         |
| Requirements approval from stakeholders             | Measure the percentage of requirement documentation that has explicit written approval from all stakeholders & customers                             | Requirement documentation should be reviewed & approved explicitly by stakeholders before development                                                                                          |
| Requirements scope change after development         | Measure the number of instances where the feature requirement changed after development started. Changes should reduce over time & tend towards zero | Requirement scope change should be minimal during implementation. If changes during development continue as a trend. Retrospect & improve on the requirement gathering & documentation process |

## Acceptance Table Definition

| Factor to test                                                | What to measure                                                                                          | Goal                                                                                                                                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Development features with acceptance table                    | Measure the percentage of features that have acceptance tables created before the start of development   | All the project features should contain detailed acceptance tables created before the start of development                                     |
| New tests added to acceptance table after development started | Measure the number of instances where new tests gets added to acceptance table after development started | Newly added tests should be minimal & tend towards zero. If the trend continues, retrospect & improve on defining the acceptance tables better |
| Automation tests written for acceptance table                 | Measure the percentage of automation tests written against manual tests                                  | Calibrate the test strategy & improve on areas that have repeated manual test efforts                                                          |
| Time taken to run the manual tests in acceptance table        | Measure the time taken to run the entire suite of manual tests in acceptance table for a feature         | Analyze tests that increase the total time taken to run the test suite and consider automating time consuming test cases                       |

## Technical Documentation

| Factor to test                                                  | What to measure                                                                                                                                                                                          | Goal                                                                                                                                                                                 |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Time taken to onboard new developer into project codebase       | Measure the average time taken by technical leads & peer developers to onboard a new developer into the project codebase                                                                                 | Redundant efforts in the onboarding of a developer will impact productivity. Identify gaps in technical documentation & improve on them to reduce redundant efforts                  |
| Time taken to work through ambiguity in technical documentation | Measure the average additional time taken by individuals to work through ambiguity (reaching out to peers for more details, exploration or resolving issues) due to poor quality technical documentation | The technical documentation must be clear & concise to enable quick understanding for the intended audience. Improve the quality of documentation to resolve ambiguity & reduce time |

## Version Control

| Factor to test                                      | What to measure                                                                                                                                                                                                                                                                                                                      | Goal                                                                                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time taken to locate & use project related resource | Measure the average time taken to locate project resources like application code, requirement documents, design documents, release notes, handbooks, configuration files, and scripts (database scripts, environment scripts) & if needed transfer resources to the version control system to enable centralization and quick access | Ensure that all essential project-related resources are available within the version control system. Reduce the time taken to search & locate them in various tools |

## Trunk Based Development

| Factor to test                                                | What to measure                                                                                                                       | Goal                                                                                                                                                                                                                          |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Number of active branches on the application code repository  | Measure how many active branches exist in the application repository and incrementally cut down to bring it close to the desired goal | Three or fewer active branches or it should not be more than number of developers in the team                                                                                                                                 |
| Number of pull requests merged into `main` for a given period | Measure how many pull requests are merged into the `main` branch for a given period (preferably weekly)                               | Pull requests merged per week should be consistent with the team's [pull request velocity](#trunk-based-development-references). Sudden spikes indicate drift in [lead time for changes](#trunk-based-development-references) |
| Branches following naming standard                            | Measure how many branches don't follow the recommended naming standard `users/<firstname-lastname>/<task-name>`                       | All user-created branches must follow the recommended naming standard to identify who is accountable for merging them to `main`                                                                                               |
| Code freeze periods                                           | Measure how many days `the team` refrains from merging code to `main` and how long these code freezes lasts                           | No code freeze should happen which blocks the active development merges                                                                                                                                                       |
| Frequency of merging branches to `main`                       | Measure the percentage of branches that are merged to `main` everyday out of all active branches                                      | Merge branches to `main` at least once a day                                                                                                                                                                                  |

### Trunk Based Development References

1. Read more about
   [trunk based development.](https://dora.dev/devops-capabilities/technical/trunk-based-development/)
2. Read more about
   [lead time for changes.](https://plandek.com/blog/lead-time-for-changes/)
3. **Pull request velocity :** Average number of pull request observed  
   in a given period of time.

## Code Review

| Factor to test                          | What to measure                                                                                                                                                                                                                                          | Goal                                                                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Volume of changes in a pull request     | Measure how many files & lines have changed in the pull request (includes line addition, modification and removal )                                                                                                                                      | The pull request should be [small in size](https://google.github.io/eng-practices/review/developer/small-cls.html)                                                        |
| Pull request first review response time | Measure the time duration between the first review vote and the pull request creation. Reduce this time towards the desired goal. `Time taken = (PR first review vote time - PR created time )`                                                          | Code reviews should happen shortly after they arrive (If reviewers are not engaged in a focused task). Acceptable time frame to respond should be within one business day |
| Pull request approval time              | Measure the time duration between the pull request approval (from all required reviewers) and the pull request creation. Reduce this time towards the desired goal. `Time taken = ( Time of PR approval from all required reviewers - PR created time )` | Review (or multiple reviews) and approval(s) by all required reviewers should be completed within two business days                                                       |
| Pull request merge time                 | Measure the time duration between the pull request merge time and the pull request creation. Reduce this time towards the desired goal. `Time taken = ( PR merge time - PR created time)`                                                                | After approval aim to merge within one business day                                                                                                                       |
| Pull request votes                      | Measure how many blocking votes (wait for author, rejected) exists the pull request & consistently record this trend over a period                                                                                                                       | Identify potential gaps in the requirement, design or implementation & increase pull request quality through continuous improvement                                       |
| Pull request `nit` comments             | Measure how many `nit` comments exists in the pull request & consistently record this trend over a period                                                                                                                                                | Get insights about pull request code quality & gaps in existing automated tooling like - static code analysis, linting, formatting, checklists etc                        |
| Pull request `major` comments           | Measure how many `major` comments exists in the pull request & consistently record this trend over a period                                                                                                                                              | Get insights about pull request code quality & gaps in software foundation principles. Reduce the gaps by continuous improvement and upskilling                           |

### Code Review References

1. Read about
   [Google code review practices.](https://google.github.io/eng-practices/)
2. Read more about
   [pull request comments](https://google.github.io/eng-practices/review/reviewer/comments.html)

## Test Automation

| Factor to test                                        | What to measure                                                                                                                                                 | Goal                                                                                                                                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Time taken for automation tests to run                | Measure the time taken to run the unit test, integration test & end to end test                                                                                 | The automation tests run should complete within few mins, with an upper limit of 15 minutes. If it takes longer, audit the tests & optimize for faster runs                                |
| Number of bugs found in automation tests              | Measure the number of bugs found in the automation tests over a period                                                                                          | More bugs are found in "cheaper" test phases, add automated tests for the bugs find during exploratory testing & production, add unit tests to catch bugs discovered in acceptance tests   |
| Test data maintenance                                 | Measure the time taken to generate test data & cleanup test data for automation tests run                                                                       | Time taken for test data maintenance should not be more than few minutes, with an upper limit of 5 minutes. If it takes longer, audit your test data maintenance strategy for improvements |
| Automation tests that represent real defect           | Measure the percentage of test failures that represent a real defect in product                                                                                 | Test failures should always indicate a real defect in the product                                                                                                                          |
| Automation tests that represent intermittent failures | Measure the number of intermittent or random test failures which don't represent real defect (test environment failures, poorly written test etc) over a period | Intermittent failures caused by automation tests should be zero & test failures should always indicate a real defect in the product                                                        |
| Time taken to fix acceptance test failures            | Measure the time taken to fix the acceptance test failures over a period                                                                                        | Automated tests should be easy to fix. Time taken to fix should reduce over a period.                                                                                                      |

### Test Automation References

1. Read more about
   [test automation](https://dora.dev/devops-capabilities/technical/test-automation/)

## Continuous Integration

| Factor to test                                                  | What to measure                                                                                                                                                | Goal                                                                                                                                                                              |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code commits in `main` that trigger the software build process  | Measure the percentage of code commits that result in a software build without manual intervention                                                             | Automated scripts should be used to create the software build and the software build should to ready to deploy on any environment                                                 |
| Time taken for the software build                               | Measure the time duration needed to successfully build the software                                                                                            | Acceptable time for software build process should be within 5 minutes                                                                                                             |
| Code commits in `main` that trigger a series of automated tests | Measure the percentage of code commits that result in a suite of automated tests (unit & integration tests) being run without manual intervention.             | Ensure all portions of the code that could be impacted (directly or indirectly) have passing automated testing after every commit                                                 |
| Time taken for the automated tests to run                       | Measure the time duration required to run all mandatory automated tests in pipeline                                                                            | Automated tests should not take more than a few minutes to run, with an upper limit of 10 minutes. If it takes longer, audit your test for efficiency & architecture improvements |
| Automated builds and tests are executed successfully            | Measure the percentage of automated builds and the percentage of automated tests (unit & integration tests) that are executed successfully in a given period . | Evaluate the efficiency & health of the pipeline by monitoring the success rates. Higher success rates contribute to faster development lifecycle                                 |
| Time taken to resolve the pipeline failures in `trunk`          | Measure the time duration between the pipeline failure and the pipeline success in `trunk`                                                                     | Fixing failures or reverting failures in `trunk` should take priority over any other work                                                                                         |
| Time taken for the CI pipeline run                              | Measure the total time taken to run all the steps in CI pipeline and optimize it to reduce time                                                                | The pipeline run should complete within few mins, with an upper limit of 15 minutes. If it takes longer, audit the pipeline steps & optimize for faster runs                      |

### Continuous Integration References

1. Read more about
   [continuous integration](https://dora.dev/devops-capabilities/technical/continuous-integration/)

## Deployment Automation

| Factor to test                                 | What to measure                                                                                                           | Goal                                                                                                                                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manual steps involved in deployment process    | Measure the number of manual steps involved in deployment process & incrementally bring it close towards the desired goal | Manual steps in deployment process increases the deployment time & opportunity for error. Reduce the manual steps to zero & automate deployment to any environments (testing, production) with push of a button |
| Time taken to run deployment pipeline          | Measure the time duration needed to successfully run the deployment pipeline                                              | Deployment pipeline run should be completed within few mins, with an upper limit of 10 minutes. If it takes longer, audit the pipeline steps & optimize for faster runs                                         |
| Time taken to rollback from deployment failure | Measure the time taken to rollback from a deployment failure when the current deployment fails                            | Get insights about how quickly the system recover from deployment failures & optimize to improve the rollback speed. Faster rollback will reduce the downtime experienced by users or customers                 |

### Deployment Automation References

1. Read more about
   [deployment automation](https://dora.dev/devops-capabilities/technical/deployment-automation/)
