### What is Pandas SQL?

#### **Explanation**

1. Pandas SQL involves the utilization of SQL syntax or SQL-like queries within
   the context of Python's Pandas library to manipulate structured data directly
   from DataFrames.

2. Pandas does not inherently support SQL; however, there are tools and
   libraries such as `pandasql` or integrations with databases through
   SQLAlchemy that allow SQL-style querying on DataFrame objects.

3. This technique enables users who are familiar with SQL to apply similar query
   logic to manipulate, filter, or transform data in DataFrames without
   transitioning away from the Python ecosystem.

4. Employing Pandas SQL facilitates the blending of structured data handling
   with Python's analytical capabilities, thus enhancing data retrieval
   processes from structured sources like databases or spreadsheets.

5. It fits into the broader picture of structured retrieval by providing a
   flexible and powerful tool for data analysis within the Python environment,
   particularly beneficial where complex data transformations and aggregations
   are required.

### Why We Need Pandas SQL

#### **Problem Statement**

1. Handling large datasets often requires sophisticated data filtering,
   transformation, and analysis that go beyond basic DataFrame operations.

2. Traditional Python operations on Pandas DataFrames, although powerful, might
   not always be intuitive for those accustomed to SQL.

3. Moreover, translating complex logic into Pandas operations can sometimes
   become verbose and hard to maintain.

#### **Use Cases**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Data Analysis</span></td>
            <td>Quickly running ad-hoc queries on large DataFrames.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Transformation</span></td>
            <td>Implementing complex data transformations easily using SQL syntax.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Integration Testing</span></td>
            <td>Simplifying the process of testing by using SQL queries directly on DataFrames to replicate database states and operations during testing phases.</td>
        </tr>
    </tbody>
</table>

#### **Benefits**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Leveraging SQL Expertise</span></td>
            <td>Allows users proficient in SQL to directly apply their knowledge.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Enhanced Readability and Maintainability</span></td>
            <td>SQL queries can be more readable and easier to maintain than complex Pandas operations.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Unified Data Manipulation Language</span></td>
            <td>Users can manipulate data in Pandas similar to how they would in a relational database.</td>
        </tr>
    </tbody>
</table>

### Advantages and Disadvantages

#### **Advantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Enables quicker modifications and querying of DataFrames using SQL, which is especially beneficial for users familiar with SQL.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Understanding</span></td>
            <td>SQL as a declarative language can make complex data manipulations easier to understand and implement.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Useful in scenarios where SQL-like processing is required before additional Pythonic analysis.</td>
        </tr>
    </tbody>
</table>

#### **Disadvantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Complexity</span></td>
            <td>Introduces a layer of complexity as it requires learning or integrating additional tools like <code>pandasql</code> or <code>SQLAlchemy</code>.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Usage</span></td>
            <td>Might lead to higher memory usage if not handled properly, especially with large data sets.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Limitations</span></td>
            <td>While SQL-like, it may not support all features of SQL or may handle operations differently, leading to unexpected results.</td>
        </tr>
    </tbody>
</table>

### Example

```js
# you will have the employee_data dataframe in local memory
# Refer the previous example for the dataframe

from langchain import PromptTemplate
from langchain.chains import LLMChain

AVAILABILITY_SQL_QUERY_GENERATOR_PROMPT = """
System:
You act as an expert in writing SQL queries based on the context. Try to provide simple SQL queries

Rules for generating Queries:
- Write SQL queries based on the context.
- Extract the same column names as described in the headers.
- The header (column name) must always be enclosed in double quotes in the query.
- The SQL query should be in a standard format that supports the PANDASQL library in Python.
- Always use 'LIKE' SQL query with '%' for the employee_name column search.
- For months, use the format (%b-%Y) (e.g., Jan-2024).
- The month columns will have availability percentages ranging from 0% to 100%.
- The SQL query should always contain employee_name, employee_id, email, engineer_role, mission_assigned, technology columns for any type of context .
- If the context is about availability, include the respective months in the SQL query.
- Use the short forms for technology column search. Short forms are labview - LV, angular - Angular, fpga - FPGA, teststand - TS, c# - C#, python - Python, machine learning - ML, database - DB, marketing - Marketing, sales - Sales, web technology - WT, testing or test - Test, ui/ux - UI/UX, react - React, gc - GC, catalyst - Catalyst, leave - Leave, general - General, kss - KSS.
- Use 'StartsWith' SQL query for the engineer_role column search if any engineer role is mentioned in the context from this list {engineer_role}.
- Do not use technologies for the engineer_role column search.
- If the context is about availability and the question has either <after> or <from> particular month then provide 6 consecutive months' availability.
- These are the quarters
    - Apr, May, Jun - First Quarter
    - Jul, Aug, Sep - Second Quarter
    - Oct, Nov, Dec - Third Quarter
    - Jan, Feb, Mar - Fourth Quarter

You have a dataframe in Python with the name "employees_availability_data". The dataframe contains information about Employee details.

The data frame has the following headers:
employee_name - Name of the employee
employee_id - ID of the employee
email - Email address of the employee
engineer_role - Project role or designation of the employee.
mission_assigned - Mission in which the employee is assigned to
technology - The Technolog(s) which is(are) known in the project
Jan-yyyy - The availability of the employee for January month. 'yyyy' represents year.
Feb-yyyy - The availability of the employee for February month. 'yyyy' represents year.
Mar-yyyy - The availability of the employee for March month. 'yyyy' represents year.
Apr-yyyy - The availability of the employee for April month. 'yyyy' represents year.
May-yyyy - The availability of the employee for May month. 'yyyy' represents year.
Jun-yyyy - The availability of the employee for June month. 'yyyy' represents year.
Jul-yyyy - The availability of the employee for July month. 'yyyy' represents year.
Aug-yyyy - The availability of the employee for August month. 'yyyy' represents year.
Sep-yyyy - The availability of the employee for September month. 'yyyy' represents year.
Oct-yyyy - The availability of the employee for October month. 'yyyy' represents year.
Nov-yyyy - The availability of the employee for November month. 'yyyy' represents year.
Dec-yyyy - The availability of the employee for December month. 'yyyy' represents year.

The 12 columns next to technology column are months. The consecutive month column to the technology column will be the first month and Use present year for 'yyyy'.

Present_month_year:
<present_month_year>{present_month_year}</present_month_year>

Context (enclosed in a XML tag below) :
<context>user: {context}</context>

SQL Query Template:
SELECT "employee_name", "employee_id", "email", "engineer_role", "mission_assigned", "technology" "<respective months>"
FROM employee_availability_data
"""

availability_sql_query_generator_prompt_template = PromptTemplate(
    input_variables=["context","engineer_role","present_month_year"],
    template=AVAILABILITY_SQL_QUERY_GENERATOR_PROMPT,
    validate_template=False,
)


availability_sql_query_generator = LLMChain(
    llm=ChatLLM,
    prompt=availability_sql_query_generator_prompt_template
    )
```

```js
query = "What is the employee id of Sanjay?";

sql_query = availability_sql_query_generator.run({
  context: query,
  engineer_role: engineerroles.values(),
  present_month_year: date.strftime("%b-%Y"),
});
print(sql_query);
```

```js
from pandasql import sqldf
output = sqldf(sql_query)
output
```

#### **Output**

```js
OUTPUT: Query: 'SELECT "employee_id" FROM employees_availability_data WHERE "employee_name" LIKE \'%Sanjay%\'';
Output: 1655;
```

By understanding and effectively deploying Pandas SQL in scenarios involving
complex data operations, organizations can leverage both Python’s powerful data
manipulation features alongside the intuitive and widely used SQL syntax, making
their data retrieval and analysis processes more robust and efficient.
