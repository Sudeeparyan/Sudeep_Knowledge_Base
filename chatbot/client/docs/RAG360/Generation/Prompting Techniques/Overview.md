### What Are Prompting Techniques?

#### Explanation

1. Prompting techniques refer to the strategies used to frame inputs or
   questions for AI models like RAG (Retrieval-Augmented Generation).

2. These techniques ensure that the model understands the query correctly and
   produces accurate and relevant outputs. The goal is to guide the AI in
   generating responses that meet specific user needs.

#### Context

1. In the context of AI-driven applications, prompting techniques play a
   critical role in obtaining precise, structured, and useful outputs.

2. Properly formulated prompts can greatly enhance the efficiency and accuracy
   of AI systems, especially in complex tasks requiring detailed responses.

### Why Do We Need Prompting Techniques?

1. AI models, including RAG, can sometimes produce ambiguous, irrelevant, or
   incomplete answers if the prompts are unclear or poorly structured.

2. Without proper prompting techniques, the outputs may not align with the
   user's intentions, leading to inefficiencies and errors.

#### Use Cases

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Data Extraction</span></td>
            <td>For structured data extraction tasks, like retrieving information from a database or generating a report in a specific format (e.g., JSON), proper prompting ensures that the output is consistent and reliable.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Content Generation</span></td>
            <td>When generating content like articles, code snippets, or summaries, effective prompting can guide the model to produce more accurate and relevant content, avoiding off-topic or poorly structured results.</td>
        </tr>
    </tbody>
</table>

#### Benefits

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Clarity</span></td>
            <td>Clear and specific prompts help reduce ambiguity in the AI's understanding, leading to more accurate outputs.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>By using structured outputs and clear instructions, tasks are completed more quickly and with fewer errors.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>These techniques can be applied to more complex or large-scale tasks, ensuring consistency across different scenarios.</td>
        </tr>
    </tbody>
</table>

### Advantages and Disadvantages

#### **Advantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Well-structured prompts save time by minimizing misunderstandings and the need for multiple iterations. For example, using delimiters to separate different parts of a prompt makes it easier for the model to process and respond accurately.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Understanding</span></td>
            <td>Prompting techniques simplify complex tasks, making them easier to manage. By asking the model to work through its own solutions or provide structured outputs, users can ensure that the model's responses are more thoughtful and aligned with their needs.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>These techniques are adaptable to various scenarios, whether simple or complex. Few-shot prompting, for instance, allows the model to learn from examples, improving its performance on similar tasks in the future.</td>
        </tr>
    </tbody>
</table>

#### **Disadvantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Complexity</span></td>
            <td>Developing effective prompts requires an understanding of the AI model's behavior and capabilities, which can be challenging for users without technical expertise.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Usage</span></td>
            <td>Complex prompting techniques, like multi-step instructions or condition checking, may require more processing time and computational resources.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Limitations</span></td>
            <td>While prompting techniques can greatly enhance model performance, they may not fully eliminate the possibility of errors, especially in highly complex or novel scenarios.</td>
        </tr>
    </tbody>
</table>

### Principles

#### Common Principles for Writing Effective Prompts

1. **Principle 1: Write Clear and Specific Instructions**

    Ensure that the instructions provided to the model are unambiguous, clear,
      and detailed. This enhances the accuracy and relevance of the model's
      output.

2. **Principle 2: Give the Model Time to “Think”**
    Allow the model to process the input thoroughly before generating a
      response. This involves breaking down tasks and encouraging a step-by-step
      approach to ensure a well-considered output.

#### Principle 1: Write Clear and Specific Instructions

1. **Tactic 1: Use Delimiters to Clearly Indicate Distinct Parts of the Input**
    1. **Good Example:**

   ```js
   """
   Part 1: Provide a summary of the article.
   Part 2: List three key points.
   """
   ```

   This uses delimiters to clearly separate the tasks, making the input easy to
   follow.

    2. **Bad Example:**

   `"Summarize the article and list three key points without any clear separation." `

   Without delimiters, the model might conflate the two tasks, leading to a less
   organized response.

2. **Tactic 2: Ask for a Structured Output (JSON, HTML)**
    1. **Good Example:**  
   "Please provide the output in the following JSON format:

   ````json
   {
       'summary': '...',
       'key_points': ['point1', 'point2', 'point3']
   }
   ```"
   This instruction clearly specifies the format, ensuring the output is easy to parse.
   ````

    2. **Bad Example:**  
  `    "Summarize the article and list the key points."` Without specifying a
  format, the response could be unstructured, making it difficult to use
  programmatically.

3. **Tactic 3: Ask the Model to Check Whether Conditions Are Satisfied**
    1. **Good Example:**  
   "Before proceeding, check if the input is a valid JSON string. If it is,
   extract the values; if not, return an error message."  
   This instruction ensures that the model verifies the input before performing
   any actions, reducing the chance of errors.

    2. **Bad Example:**  
   "Extract values from the input without validating its format."  
   This can lead to errors if the input is not in the expected format.

4. **Tactic 4: "Few-Shot" Prompting**
    1. **Good Example:**  
   "Here are two examples of summaries for articles. Use them as a reference to
   summarize the new article:  
   Example 1: [Summary of Article 1]  
   Example 2: [Summary of Article 2]"  
   This provides clear examples, guiding the model towards the desired output.

    2. **Bad Example:**  
   "Summarize the article."  
   Without examples, the model might produce an output that does not meet the
   user's expectations.

#### Principle 2: Give the Model Time to “Think”

1. **Tactic 1: Specify the Steps Required to Complete a Task**
    1. **Good Example:**  
   "Step 1: Read the article.  
   Step 2: Identify the main theme.  
   Step 3: Summarize the key points.  
   Step 4: Conclude with your analysis."  
   Breaking down the task ensures that each aspect is thoroughly considered.

    2. **Bad Example:**  
   "Read the article and summarize it."  
   This instruction might lead to a summary that overlooks important aspects of
   the article.

2. **Tactic 2: Instruct the Model to Work Out Its Own Solution Before Rushing to a Conclusion**
    1. **Good Example:**  
   "Consider different ways to solve the problem, then choose the best approach
   and explain why."  
   This encourages the model to think critically and consider multiple options
   before settling on a solution.

    2. **Bad Example:**  
   "Solve the problem quickly."  
   This might lead to a hasty and potentially inaccurate response.

3. **Tactic 3: Asking Series of Questions**
    1. **Good Example:**  
   "What are the potential causes? What are the possible solutions? Which
   solution is most feasible and why?"  
   Asking a series of questions helps the model explore different angles and
   arrive at a well-rounded conclusion.

    2. **Bad Example:**  
   "What is the solution to the problem?"  
   A single question might lead to a narrow or incomplete answer.

### Example

Implementing Prompting Techniques

#### **Situation**

A user wants to generate a report in JSON format that includes data on customer
purchases from an e-commerce platform. The goal is to ensure that the output is
structured correctly and includes all relevant details.

#### **Steps/Workflow**

1. **Write Clear and Specific Instructions**

   1. Use delimiters to separate different sections of the prompt, e.g.,
      “Customer Purchase Report” and “Include details: [Date, Item, Quantity, Price].”
   2. Request the output in JSON format to ensure it is structured and easy to
      parse.

2. **Give the Model Time to “Think”**
   1. Break down the task into smaller steps, asking the model first to list all
      purchases, then to format them correctly.
   2. Instruct the model to validate that all data fields are complete before
      finalizing the report.

**Outcome**

1. The model generates a structured JSON report that accurately reflects the
   required data, with clear, organized fields.

2. The use of delimiters and structured output instructions ensures consistency,
   while the step-by-step approach reduces errors, leading to a reliable and
   usable report.

---

By following these principles and using the described tactics, users can
effectively guide AI models like RAG to produce high-quality outputs that meet
their specific needs, enhancing both the efficiency and reliability of the
system.
