### What is Structured Retrieval?

#### **Explanation**

1. Structured retrieval in Retrieval-Augmented Generation (RAG) systems involves
   querying organized databases or knowledge bases, such as tables or graphs, to
   retrieve specific information that assists in generating output.
2. Unlike unstructured retrieval, which deals with free-form text, structured
   retrieval focuses on well-organized data, allowing for more precise and
   efficient data lookups.
3. This process is crucial in RAG systems for providing rapid and accurate
   access to factual data, enhancing the model’s ability to generate factually
   correct and contextually relevant outputs.

### **Advantages**

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
            <td>Fast retrieval times as the data is well-organized.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Understanding</span></td>
            <td>Makes the generation process more transparent due to the direct relationship between queried data and output.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Easily scalable as adding data to a structured database is straightforward.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Structured Retrieval</span></td>
            <td>Structured Retrieval plays a pivotal role in RAG systems by utilizing well-organized data sources for efficient and precise information retrieval. Here, we outline how structured retrieval operates within two specific contexts: API calls and Excel data sourcing.</td>
        </tr>
    </tbody>
</table>

### Scenario 1: API Calls

#### **Situation**

An enterprise employs a RAG system to manage queries regarding employee
availability and project/customer details using a structured database named
Falcon.

#### **Steps/Workflow**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Process Step</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Daily Data Retrieval</span></td>
            <td>An API call is made to Falcon to retrieve the latest table details. These details are formatted into data files daily.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Management</span></td>
            <td>The retrieved data isn't subject to any embedding process; it is directly read and stored as a Pandas DataFrame.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Question Classification</span></td>
            <td>Incoming queries are analyzed through a question classifier that categorizes them as either pertaining to employee availability or project/customer details.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Query Generation</span></td>
            <td>Based on the classified question, a query generator translates the question into an SQL-like query tailored for Pandas (Pandas SQL).</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Fetching</span></td>
            <td>The generated query is executed on the DataFrame to extract the relevant details.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Answer Generation</span></td>
            <td>An answer summarizer processes the fetched data and articulates the response in natural language format.</td>
        </tr>
    </tbody>
</table>

#### **Outcome**

This structured retrieval workflow ensures that users receive precise and timely
updates based on their specific inquiries, improving operational efficiency and
decision-making within the enterprise.

### Scenario 2: Excel Data Sourcing

#### **Situation**

The same enterprise utilizes a similar RAG system setup to handle data sourced
from regularly updated Excel sheets for internal reporting and client-oriented
queries.

#### **Steps/Workflow**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Process Step</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Data Collection</span></td>
            <td>Data is collected from defined Excel sheets, rather than via API. These sheets are maintained with current information relevant to the organizational workflows.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Conversion</span></td>
            <td>The collected Excel data is converted into a Pandas DataFrame, maintaining a structured format compatible with further processing steps.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Question Classification</span></td>
            <td>Incoming queries are analyzed through a question classifier that categorizes them as either pertaining to employee availability or project/customer details.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Query Generation</span></td>
            <td>Based on the classified question, a query generator translates the question into an SQL-like query tailored for Pandas (Pandas SQL).</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Fetching</span></td>
            <td>The generated query is executed on the DataFrame to extract the relevant details.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Answer Generation</span></td>
            <td>An answer summarizer processes the fetched data and articulates the response in natural language format.</td>
        </tr>
    </tbody>
</table>

#### **Outcome**

By utilizing Excel as a data source, the RAG system provides seamless access to
necessary information, maintaining the integrity and responsiveness of the
system’s output. Users benefit from consistent and reliable data retrieval that
informs data-driven decisions.

### Importance of Structured Retrieval Systems

1. These examples underscore the versatility and efficiency of structured
   retrieval in RAG systems.

2. By leveraging structured data from varying sources (APIs and Excel),
   enterprises can enhance their information processing capabilities, leading to
   more informed decision-making and improved user satisfaction.

3. Understanding and effectively deploying structured retrieval ensures optimal
   performance of RAG systems across different operational scenarios.
