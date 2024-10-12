### What is Summarization?

1. Summarization is the act of shortening a longer text into a brief version
   that still contains all the main points and important information.

2. It simplifies the original text while keeping its key messages intact.

3. In the realm of information processing, summarization plays a crucial role by
   enabling more efficient comprehension and communication of large volumes of
   data.

4. It fits into broader systems where quick decision-making is essential by
   providing users with a synthesized form of large documents or data sets.

### Why We Need Summarization

Every day, vast amounts of new information and data are generated. Processing
this bulk information can be time-consuming and often impractical for
individuals or businesses needing to make quick and informed decisions.

#### **Use Cases**

1. Business executives use summaries to understand reports and make decisions
   efficiently.
2. Researchers use article summaries to decide which full texts are worth a
   detailed read.
3. News aggregators offer article summaries for readers to quickly grasp the
   day's important events.

#### **Benefits**

1. Summarization helps users rapidly digest large amounts of information, saving
   time and improving productivity.

2. It enhances understanding by focusing on key points and reduces the cognitive
   load on users.

### Advantages and Disadvantages of Summarization

#### **Advantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="custom-header">Efficiency</td>
            <td>Quickly processes and condenses long texts into digestible summaries.</td>
        </tr>
        <tr>
            <td class="custom-header">Understanding</td>
            <td>Helps clarify and focus on the main points, aiding quicker comprehension.</td>
        </tr>
        <tr>
            <td class="custom-header">Scalability</td>
            <td>Applicable to various texts regardless of volume or complexity.</td>
        </tr>
    </tbody>
</table>

#### **Disadvantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="custom-header">Complexity</td>
            <td>May require sophisticated algorithms to handle nuances and different data types.</td>
        </tr>
        <tr>
            <td class="custom-header">Resource Usage</td>
            <td>Development and maintenance of effective summarization tools can be resource-intensive in terms of computational power and technical expertise.</td>
        </tr>
        <tr>
            <td class="custom-header">Limitations</td>
            <td>May overlook certain nuances or contexts, potentially leading to loss of vital information in some cases.</td>
        </tr>
    </tbody>
</table>

### Example Scenario

Here's the example as it is:

#### **Input**

````js
prod_review = """
Got this panda plush toy for my daughter's birthday, \
who loves it and takes it everywhere. It's soft and \
super cute, and its face has a friendly look. It's \
a bit small for what I paid though. I think there \
might be other options that are bigger for the \
same price. It arrived a day earlier than expected, \
so I got to play with it myself before I gave it \
to her.
"""

prompt = f"""
Your task is to extract relevant information from
a product review from an ecommerce site to give
feedback to the Shipping department.

From the review below, delimited by triple quotes
extract the information relevant to shipping and
delivery. Limit to 30 words.

Review: ```{prod_review}```
"""

response = get_completion(prompt)
print(response)
````

#### **Output**

```js
Feedback: The product arrived a day earlier than expected, which was a pleasant surprise.
Customers may appreciate faster shipping times for future orders.
```
