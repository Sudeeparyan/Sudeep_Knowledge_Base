### 🔍 Overview - Acceptance Table

This document outlines the guidelines for creating and using the Acceptance
Table.

[[_TOC_]]

## 📋 Acceptance Table

As part of software testing, the Acceptance Table (AT) is a comprehensive
mechanism to document high-level test scenarios derived from acceptance
criteria. Typically, an acceptance table is created for each feature, covering
test scenarios for both functional and non-functional aspects.

## ↔️ Test Plan vs Acceptance Table

|                     | **Test Plan**                                                    | **Acceptance Table**                                                         |
| ------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Scope**           | It includes detailed test cases and procedures.                  | It specifies the conditions a feature must meet to be considered acceptable. |
| **Level of Detail** | Its detailed, step-by-step instructions.                         | It outlines broader conditions.                                              |
| **Purpose**         | How to execute tests to ensure the software functions correctly. | Sets the standard for when a feature is considered complete and accepted.    |
| **Audience**        | Primarily for testing and development teams.                     | Project team and also targeted at stakeholders and end-users.                |

## 🤔 Why do we need it?

- **Addressing gaps in current testing:** It's an easier platform for anyone to
  collaborate, provided they have a basic understanding of the application flow.
- **High test coverage:** With all test scenarios covered against acceptance
  criteria, the Acceptance Table ensures comprehensive test coverage.
- **Efficiency in development:** Effectively utilizing the Acceptance Table can
  save development time by early identification of requirement ambiguities,
  contributing to an overall improved application design.

## 🕒 When to Start Writing the Acceptance Table?

Start creating the Acceptance table once features are fully defined with
acceptance criteria. This ensures minimal changes to feature expectations,
providing clarity on both in-scope and out-of-scope items. It's recommended to
have the first version of the Acceptance Table defined before feature
development for a clear testing roadmap and development planning and to identify
potential issues early.

## 👥 Who is Responsible for the Acceptance Table?

Each user story owner is accountable for the corresponding test associated with
their user story, while the feature owner holds overall responsibility and
accountability for the feature, ensuring that all tests are established,
conducted and passed successfully before shipping the feature.

## 🛠️ Practitioners​

- **Required:** Development Team, Tech Lead, Project Lead.
- **Optional:** Product Owner, Customer.



## 📑 Acceptance Table Structure

The Acceptance table is organized into the following columns:

1. **Acceptance Criteria:** Acceptance criteria have predefined conditions or
   standards that a feature must meet to be considered acceptable. This column
   aims to ensure that all line items in the Acceptance Criteria have
   corresponding tests, facilitating effective tracking back to the
   requirements.

2. **Story:** The user story to which the test cases belong can be added as a
   hyperlink to the respective line.

3. **Given, When, Then columns:**

   - _Given:_ Describes the initial conditions or context of the test scenario.
   - _When:_ Specifies the actions or input conditions applied during the test.
   - _Then:_ Outlines the expected outcomes or results for the specific case.

   Example for a simple login page

   | **Given**     | **When**                        | **Then**                                                                                               |
   | ------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------ |
   | On Login Page | Enter valid login credentials   | User should be redirected to the authentication page to approve the request from the Authenticator app |
   | On Login Page | Enter invalid login credentials | Error message should be displayed                                                                      |

4. **Manual Resolution:** Indicates whether the test case has been manually
   verified. If verified, specify the person and the date of verification.

5. **Auto Test:** Marks whether there are automated test cases for the scenario,
   either in Unit, Integration, or Acceptance test.

   - Use "Auto" for automated tests and "NA" for scenarios without automated
     tests.
   - If no automated tests exist, add 'NA' with a specific reason in the comment
     section.

6. **Test Name:** Specify the automated test case name, typically corresponding
   to the description or block in the Unit, Integration, or Acceptance test
   script.

7. **Comments:** Additional information related to the test scenario. For
   example, in concurrent login testing, you can add notes such as "tested with
   5 users"

If there are additional checks for a specific feature, such as UI mock-up links,
they can be added under the 'Other Acceptance Criteria' table.

## 🧩 Acceptance Table Stages

### 🚧 Stage 1 - Initiation & Creation of Acceptance Tables

Before development, the user story owner defines test scenarios and adds them to
the Acceptance Table.

### 🔁 Stage 2 - Review & Iteration​

During development, the Acceptance Table is shared for review by team members,
including developers and feature owners. All contributors ensure code covers all
test scenarios, and any missed scenarios prompt collaborative discussion for
updating the Acceptance Table.

### ✅ Stage 3 - Testing & Closure​

This stage happens after development and before the release. Once the feature is
deployed and available for testing, team members, irrespective of their roles,
should actively participate in testing. It is essential to validate that all
test scenarios mentioned in the Acceptance Table are thoroughly covered during
testing.

Testing updates should be documented in the Acceptance Table during the final
feature testing phase.


