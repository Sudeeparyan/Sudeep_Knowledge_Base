### What is PandasLLM?

1. PandasLLM is a proposed integration that combines the Pandas library, known
   for data processing, with large language models (LLMs) such as GPT models,
   which excel in natural language processing.

2. This combination is designed to simplify complex data operations by allowing
   users to perform them through natural language commands. The goal is to make
   data manipulation easier for people who may not have deep programming skills
   or experience with data processing languages.

3. In the wider context of data science and machine learning, PandasLLM aims to
   bridge the gap between technical data handling and more intuitive,
   language-based interactions.

4. This tool would be especially useful in dynamic environments where data needs
   change rapidly and require quick analysis.

5. It also makes data processing more accessible to a broader audience, reducing
   the technical barrier for engaging with complex datasets.

### Why We Need PandasLLM

#### **Problem Statement**

1. Traditional data analysis tools often require substantial technical
   knowledge, including familiarity with programming syntax and data
   manipulation techniques, which can be a barrier for non-technical users.
2. Additionally, the process of translating natural language requests into
   executable data processing commands is not straightforward, inhibiting
   seamless user interaction with data.

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
            <td><span class="custom-header">Interactive Data Analysis</span></td>
            <td>Allowing users to query and manipulate data through conversational inputs.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Automated Reporting</span></td>
            <td>Generating reports based on natural language descriptions of the required outputs.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Educational Tools</span></td>
            <td>Providing an easier learning curve for students and new data practitioners to interact with and analyze data using natural language.</td>
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
            <td><span class="custom-header">Accessibility</span></td>
            <td>Makes data manipulation tasks accessible to a wider audience by reducing the need to understand complex code.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Speeds up data exploration and analysis by allowing more intuitive, language-based queries.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Integration</span></td>
            <td>Seamlessly integrates with existing data workflows, enhancing them with the power of natural language processing.</td>
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
            <td><span class="custom-header">User Friendliness</span></td>
            <td>Dramatically lowers the barrier to entry for performing sophisticated data manipulations.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Rapid Prototyping</span></td>
            <td>Enables faster turnaround times for testing and developing data-driven hypotheses or products.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Adaptability</span></td>
            <td>Adjusts to varied data querying styles and natural language nuances through LLM’s contextual understanding.</td>
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
            <td><span class="custom-header">Complex Implementation</span></td>
            <td>May require complex under-the-hood integrations between Pandas and LLM infrastructures.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Intensive</span></td>
            <td>Could be computationally expensive, requiring significant processing power for real-time natural language understanding and response.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Accuracy Concerns</span></td>
            <td>Potential risks in misinterpretation of natural language queries leading to incorrect data manipulations or outputs.</td>
        </tr>
    </tbody>
</table>

### Example

````js
import os
import pandas as pd
from pandas_llm import PandasLLM
import json

employees_df = pd.read_csv(os.path.join("D:\solichat - repo\storage\Falcon","Employees_Availability_Data.csv"))
with open(os.path.join("D:\solichat - repo\storage\Falcon","Engineer_Roles.txt"), "r") as engineerroles_file:
    # Load the dictionary from the file
    engineer_role = json.load(engineerroles_file)
with open(os.path.join("D:\solichat - repo\storage\Falcon","Missions.txt"), "r") as missions_file:
    # Load the dictionary from the file
    missions = json.load(missions_file)
instruction_str_emp = f"""
6. For the given dataset, there are 18 columns. First 6 columns are string columns and the next 12 columns are integer columns.
7. The integer columns are month columns which indicate the availability percentage. If the value is 0 means not available, otherwise greater than 0 means available for that particular percentage.
8. The 'Information not found' cells are denoted by 'No Info' for string columns and -1 for integre columns.
9. While crafting code always ignore "microsoft", "microsoft" words for any column search, because it is the company name.
10. While crafting code always use the short forms for technology column search. Short forms are labview - LV, angular - Angular, fpga - FPGA, teststand - TS, c# - C#, python - Python, machine learning - ML, database - DB, marketing - Marketing, sales - Sales, web technology - WT, testing or test - Test, ui/ux - UI/UX, react - React, gc - GC, catalyst - Catalyst, leave - Leave, general - General, kss - KSS.
11. These are the currently available missions - {missions}, while crafting code use only these missions for mission_assigned column search.
12. These are the currently available engineer roles - {engineer_role}, while crafting code always use 'STARTSWITH' search for the engineer_role column search.
13. If the request has "<technology> engineers" or "<technology> employees" it is not an engineer_role. Instead, take the <technology> only and search its respective short form in the technology column. (eg:"Python engineers" search the technology column with Python)
14. For all type of request, the 'result' should be always dataframe.
15. For all type of request, the resulting code should always select 'employee_name','employee_id', 'email', 'mission_assigned', 'engineer_role', 'technology' columns for the resulting DataFrame 'result'.
16. For all type of request, the resulting code should always select only the necessary month's columns for the resulting DataFrame 'result' if the request is about employee availability.

:::info
Present month and year is Oct-23, instead of 'and' operation use 'or' for months more than 1.
:::
```js

conv_df = PandasLLM(data=employees_df, llm_api_key = os.environ.get("OPENAI_API_KEY"), custom_prompt= instruction_str_emp ,verbose=True)
````

```js
query = "Is Arun will be available between Sept-2023 to Dec-2023?"

result = conv_df.prompt(query)
code = conv_df.code_block
print(f"Executing the following expression of type {type(result)}:\n{code}\n\nResult is:\n {result}\n")

```


By integrating the responsive and intuitive capabilities of LLMs with the robust
data processing power of Pandas, PandasLLM could revolutionize the way teams
interact with data, making data-driven decisions more accessible and informed.
This enhancement in data tools could lead to wider adoption and creativity in
data-driven fields, promoting a more inclusive approach to data analysis.
