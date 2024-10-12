#### What is Query Transformation?

1. Query Transformation involves modifying a user's original query to improve
   the effectiveness and accuracy of retrieving information from large datasets
   or language models.

2. In Retrieval-Augmented Generation (RAG) systems, this process is essential as
   it significantly impacts the quality of retrieved information by enhancing
   how the query is presented.

3. Serving as a preprocessing step, Query Transformation optimizes the
   interaction between user input and the AI's retrieval capabilities, ensuring
   that queries are well-suited to leverage the algorithms and data structures
   of large language models (LLMs), thereby enhancing the relevance and accuracy
   of the generated responses.

### Why We Need Query Transformation

Original user queries often lack the clarity, focus, or specificity needed to
effectively retrieve high-quality information from complex databases or LLMs.
They may be too vague, ambiguous, or overly broad, leading to poor retrieval
performance and irrelevant answers.

### Advantages and Disadvantages

#### Advantages

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
            <td>Saves time and computational resources by increasing the precision of search results.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Applicable to a wide range of domains and can handle increasing complexities in user queries.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Understanding</span></td>
            <td>Improves the interpretability of user queries by the system, leading to better outcomes.</td>
        </tr>
    </tbody>
</table>

#### Disadvantages

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
            <td>The process may introduce an additional layer of complexity in query processing.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Usage</span></td>
            <td>May require significant computational power, especially with complex algorithms for transformation.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Limitations</span></td>
            <td>Not all queries can be transformed effectively, which may lead to inconsistencies in retrieval quality.</td>
        </tr>
    </tbody>
</table>

### Examples

```js
Prompt

SEARCH_QUERY_PROMPT="""You act as an expert in understanding the meaning of "Question" and converting them into precise search queries.
The query you generate will be used to search for the answer, so ensure the "Search query" is clear and accurately reflects the user's intent.

Follow the below instructions and generate the Search Query:
1. The chat history is a record of the conversation between the user and Vina, the AI Chat Assistant. It consists of pairs of user questions and Vina's responses, listed in chronological order with the most recent question at the end (Question-Response format).
2. Please, Do not use the "Chat_History" if the "Question" is clear and does not need additional context.
3. Retain all the important keywords in the question and Do not modify it.
4. Retain abbreviations as they appear in the question unless contextually incorrect.
5. Don't use question marks in the search query.
6. If the question itself is a search query, return the same query.


Please return ONLY the Search Query.
DO NOT add any NOTE or explanations on how the Search Query is generated.


Chat_History (enclosed in a XML tag below) used as a reference to frame the search query:
<chat_history>{chat_history}</chat_history>

Question (enclosed in a XML tag below) that needs to be formatted:
<question>{user_query}</question>

Search query:

"""
SEARCH_QUERY_TEMPLATE = Prompt(SEARCH_QUERY_PROMPT)
```

```js
prompt = SEARCH_QUERY_TEMPLATE.format(
            chat_history=conversation, user_query=task.input
        )

        # Get the search query from the chat history
        completion_response = self.llm_for_reasoning.complete(prompt)
        search_query = completion_response.text

```

### **Reference Links**

:::info 
[Source Link](https://blog.langchain.dev/deconstructing-rag/) 
:::
