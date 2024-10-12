Query expansion involves transforming a single query into multiple enriched
    queries. This approach helps in providing additional context and addressing
    nuances that may be missing in the original query.

        1. **Multi-Query Expansion**: By employing prompt engineering, a single query can be expanded into multiple queries using Large Language Models (LLMs). These expanded queries are executed in parallel, ensuring that they are meticulously designed to enhance retrieval relevance.

        2. **Sub-Query Generation**: Complex questions can be decomposed into simpler sub-questions using the least-to-most prompting method. This helps in contextualizing and fully answering the original question by addressing it in smaller, more manageable parts.

        3. **Chain-of-Verification (CoVe)**: Expanded queries undergo validation by LLMs to reduce hallucinations. This process ensures that the validated queries are more reliable and likely to retrieve relevant information.

### **Advantages**

1. Provides enriched context and nuanced understanding.
2. Reduces ambiguity and improves relevance.
3. Enhances reliability through validation.

### **Disadvantages**

1. May increase computational overhead.
2. Requires sophisticated prompt engineering techniques.
