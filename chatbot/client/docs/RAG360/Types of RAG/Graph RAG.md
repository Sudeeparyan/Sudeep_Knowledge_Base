1. **Graph RAG** is an advanced machine learning model that combines the
   capabilities of graph-based data structures with retrieval-augmented
   generation for natural language processing.

2. This model utilizes a graph database to retrieve contextual information which
   is then used by a generative model to produce text outputs that are more
   relevant and accurate.

### Context

1. In the broader landscape of AI, especially in tasks involving complex data
   interrelationships and dependencies such as knowledge
   `graphs`,` document summarization` and `question answering`, retrieving
   relevant information efficiently is crucial.

2. Graph RAG fits into this context by leveraging the structured storage and
   rapid traversal capabilities of graphs to enhance the data retrieval step in
   language generation processes.

### Why We Need Graph RAG

#### **Problem Statement**

1. Traditional text generation models often struggle with generating
   contextually appropriate content because they lack direct access to relevant
   external information during the generation phase.

2. Graph RAG addresses this by integrating retrieval with generation, directly
   influencing the output with contextually relevant data fetched from graph
   databases.

#### **Use Cases**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Use Case</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Knowledge-Based Question Answering</span></td>
            <td>Graph RAG can quickly retrieve information from a knowledge graph comprising millions of interconnected entities and facts to provide accurate answers.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Legal and Scientific Document Summarization</span></td>
            <td>By retrieving data from structured repositories of legal cases or scientific research, Graph RAG helps in generating concise summaries that are rich in detail and specific to the users' queries.</td>
        </tr>
    </tbody>
</table>

#### **Benefits**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Benefits</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Enhanced Accuracy</span></td>
            <td>By utilizing contextually relevant information during generation, the accuracy of the text output is greatly improved.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Context Awareness</span></td>
            <td>Retrieves and incorporates a diverse range of information, enhancing the model's understanding of different domains.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Customizable</span></td>
            <td>The use of graphs allows for easy customization and scaling based on domain-specific needs, such as medical literature or legal documents.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Convert Unstructured Data to Structured Data (Graph) with AI</span></td>
            <td>Utilize AI techniques to transform unstructured data into a structured graph format, allowing for better organization and analysis of data.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Get Information from Structured Data</span></td>
            <td>Retrieve and extract information from data that is already organized in a structured format, such as graphs or databases, for efficient querying and analysis.</td>
        </tr>
    </tbody>
</table>

### Naive RAG vs Knowledge Graphs

| Stage     | Naive RAG                            | Knowledge Graphs                                                                   |
| --------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| Chunking  | Collect isolated/meaningful entities | Collect relationships between entities. usually in triples -> node1,relation,node2 |
| Indexing  | Embed data to Vector Space           | Connect entities with relationships (Knowledge graph)                              |
| Querying  | Semantic search                      | Query Knowledge graphs (Cypher Query)                                              |
| Synthesis | Generate answer from retrieved data  | Same as RAG                                                                        |

:::tip[When Knowledge Graphs outperform RAG] 
**Scenario**

```
data:
chunk 1: "Person A is a friend of Person B"
chunk 2: "Person A's age is 25"
chunk 3: "Person B's age is 30"
... other chunks
query : "What is the age of Person A's friend?"
```

Take a look at [sample large dataset](https://github.com/yixuantt/MultiHop-RAG)

Here semantic search will not retrieve chunk3, but knowledge graph with
search-depth 2 will retrieve it 
:::

### Graph Properties for better querying

1. Direction
   1. Unidirectional
   2. Bidirectional
2. Weight : How strong is the relationship
3. Traversing Algorithm
   1. BFS
   2. DFS

### Libraries

#### 1. **Neo4j**

    1. graph database
    2. use cypher query language

#### 2. **Microsoft GraphRAG**

1. [Repo](https://github.com/microsoft/graphrag?tab=readme-ov-file),[White Paper](https://arxiv.org/pdf/2404.16130),[Demo Video](https://youtu.be/jCjyaQL-7mA?si=PTPT9XdJdX-2wbdi)
2. Well-suited for Query Focused Summarization (QFS), e.g., answering
   `"What is this document about?"`
   1. Provides answers with a score for a query by processing in parallel within
      local communities.
   2. Filters based on the scores, then combines the results and passes them to
      the global community for the final answer.

### Advantages and Disadvantages

**Advantages:**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Benefits</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Streamlines the process of retrieving and generating text by making information retrieval targeted and quicker.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Understanding</span></td>
            <td>Facilitates a deeper understanding of the context owing to its ability to access and use structured, relevant data during generation.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Adapts easily to large-scale scenarios owing to the inherent scalability of graph databases.</td>
        </tr>
    </tbody>
</table>

**Disadvantages:**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Challenges</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Complexity</span></td>
            <td>The setup and maintenance of a graph database, coupled with the integration of a generative model, can be complex.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Usage</span></td>
            <td>Higher computational and storage resources might be required to manage and process large graph databases.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Limitations</span></td>
            <td>Depending on the completeness and quality of the graph database, the performance of the model can be significantly affected.</td>
        </tr>
    </tbody>
</table>

By providing a structured yet adaptable approach, **Graph RAG** offers a
compelling solution to the complexities involved in tasks requiring deep
contextual understanding and speedy information retrieval.
