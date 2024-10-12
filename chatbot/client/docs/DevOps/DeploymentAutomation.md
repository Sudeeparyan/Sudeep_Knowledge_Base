### Deployment Automation (DA)


## Understanding

### Overview

- Deployment automation is the process of automatically deploying software
  applications or updates to various environments, such as testing, staging, and
  production, without manual intervention
- It involves using tools and scripts to streamline and standardize the
  deployment process, reducing errors and increasing efficiency
- Deployment automation typically includes tasks such as packaging the
  application, configuring environments, deploying code, and executing
  post-deployment tests
- Read and understand more in
  [DORA - Deployment Automation](https://dora.dev/devops-capabilities/technical/deployment-automation/)
- Watch first 7 minutes of this
  [Google Cloud channel's explanation of deployment automation](https://www.youtube.com/watch?v=rSAkwyhpRfs)

| Topic                  | Description                                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Practice Owners        | Tech lead                                                                                                                                                                                      |
| Practitioners          | Developers, Tech Leads, Project Leads, Product Owners, Release Managers                                                                                                                        |
| Time Investment        | ⏳⏳⏳ (3 out of 5)                                                                                                                                                                            |
| Return on Investment   | 🚀🚀🚀 (3 out of 5)                                                                                                                                                                            |

### Why?

Deployment Automation (DA) is considered to be one of the core engineering
software practices because:

1. Automating deployment process saves time and effort improving efficiency of
   team and accelerating delivery cycles
2. Ensures deployment consistency across different environments reducing manual
   errors
3. Allows faster, repeatable and more frequent deployments as needed
4. Introduces rollback capabilities to revert to previous versions in case of
   deployment failures

### What will be the impacts of Deployment Automation?

#### Customer Impact

1. Short Term - Faster delivery of updates and bug fixes, resulting in improved
   user experience and satisfaction.
2. Long Term - Enhanced reliability in deployments fosters greater trust in the
   software, resulting in reduced downtime and disruptions for end users.

#### Team Impact

1. Short Term - Reduction in manual deployment tasks allows teams to focus more
   on development and innovation, boosting productivity.
2. Long Term - Improved collaboration and morale as deployment processes become
   more streamlined, reducing frustration and burnout among team members.

#### Utilization Impact

1. Short Term - Reduction in deployment-related issues frees up time for
   developers to work on new features or address other priorities, enhancing
   overall efficiency.
2. Long Term - Increased productivity and effectiveness contribute to
   higher-quality software releases, driving customer satisfaction and
   potentially leading to revenue growth.

### Risks of not following

> :no_entry: Failing to follow Deployment Automation can lead to
>
> 1. Manual errors during deployments, resulting in inconsistent or faulty
>    releases.
> 2. Increased downtime and service disruption due to human oversight or
>    mistakes.
> 3. Deployment bottlenecks and delays, hindering the ability to deliver updates
>    quickly to customers.
> 4. Difficulty in reproducing deployment processes, leading to inconsistencies
>    across environments and configuration drift.
> 5. Reduced agility and competitiveness in the market as competitors deploy
>    updates faster and more reliably.

## Implementation

Following are the typical stages in DA, which can be adjusted based on project
needs

### Stage 1 - Automate deployment steps

> :checkered_flag: Focus on automating deployment steps

1. Application should read environment specific configurations from config files
   or environment variables.
   > Ex: Database connection string, Port in which the application will be
   > exposed, etc.
2. Create automation scripts to automate the deployment process.
   1. Scripts to compile source code and packaging it into a deployable
      artifact.
   2. Scripts to deploy the build artifact and configure environment specific
      settings.
   3. Scripts to automate the setup and configuration of the software.
3. Configurations to recreate the environment.
   1. For cloud based deployment use Infrastructure as code tools
      ([Terraform](https://www.terraform.io/),
      [AWS CloudFormation](https://aws.amazon.com/cloudformation/),
      [`Pulumi`](https://www.pulumi.com/), [Ansible](https://www.ansible.com/)
      etc.) to setup the environment.

### Stage 2 - Setup deployment pipelines

> :checkered_flag: Focus on setting up pipeline or some automation tool to
> deploy the application to specified environment with a single click

1. Setup deployment pipeline using CI/CD tools for the platform
   ([AzDO pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops&tabs=java%2Ctfs-2018-2%2Cbrowser#prerequisites---azure-devops),
   [Github Actions](https://docs.github.com/en/actions/quickstart), Travis CI,
   Jenkins, etc.)

2. Create deployment workflow scripts in the chosen tool to:
   1. Download build artifact from artifact repository.
   2. Get environment configuration based on the deployment environment (dev,
      test, prod).
   3. Run the deployment automation script to deploy the application.

### Stage 3 - Report & Rollback

> :checkered_flag: Focus on reporting and rolling back to the previous version
> incase of deployment failure and start fixing the deployment failures

1. Run some smoke tests in the deployment environment to capture the deployment
   failures.
2. Setup notification alerts on deployment failures.
3. On failure, rollback to previous version and start focusing on fixing the
   issues.

### Non-negotiables

<!--List concepts in each stage which are non-negotiable for customization to fit
project needs-->

To ensure the success of the Deployment Automation (DA) process, certain
non-negotiable should be adhered across the mentioned stages:

1. Application should read the configurations that might vary based on the
   deployment environment through environment variables or configuration files.
2. Version control to check in automation scripts and environment configuration
   information.
   1. Scripts to automate the deployment process
   2. Configuration to recreate the environment for deployment
3. Artifact repository to store build artifacts.
   1. Build artifacts should be stored in a repository and managed properly.
   2. Builds should be classified and versioned. Development builds should have
      different versioning strategy from the production builds.
4. Deployment should desirably happen with a single click.
   1. Download artifact from the artifact repository.
   2. Run automation script to deploy the application.
5. Any authorized personnel in the team should have access to deploy and they
   should know how to setup a deployment environment from scratch without any
   individual's dependencies.
   1. There should be a document and necessary configuration files should be
      available to setup a deployment environment from scratch.

> **Note:** Project tech leads can have conversation with Practice owners to
> take exception from the above non-negotiable list based on project needs.
> However any tools that needs to be developed for long term improvement, needs
> to be captured in corresponding project backlog and acted on in a agreed
> timeline
