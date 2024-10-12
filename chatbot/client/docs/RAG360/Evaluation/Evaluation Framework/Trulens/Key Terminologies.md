### Feedback Functions in TruLens

#### **Overview and Explanation**

1. Feedback functions within TruLens are designed to assess, refine, and
   optimize the performance of different models within the TruLens evaluation
   framework.

2. Essentially, these functions act as metrics or criteria that help in
   determining how well a model's outputs align with expected outcomes, thereby
   guiding the enhancement of algorithms through systematic feedback.

### Example

```js
# Context relevance between question and each context chunk.
f_context_relevance = (
    Feedback(
        provider.context_relevance_with_cot_reasons,
        name="Context Relevance"
    )
    .on(Select.RecordCalls.retrieve.args.query)
    .on(Select.RecordCalls.retrieve.rets)
    .aggregate(numpy.mean)
)
```

### Reference

:::info
[Feedback Functions](https://www.trulens.org/trulens_eval/evaluation/feedback_functions/)

[Anatomy of Feedback Functions](https://www.trulens.org/trulens_eval/evaluation/feedback_functions/anatomy/)
:::

### Instruments

1. When using LLM applications, access to internal data like the retrieved
   context is crucial for evaluation.

2. TruLens offers a tool called the `@instrument` decorator, which allows you to
   mark specific methods for data collection. Here's a simple way to use it:

   1. Identify the method you want to analyze.
   2. Put `@instrument` before the method definition.

3. This setup allows TruLens to collect and provide you with the necessary
   internal details when you execute that method.

### Example

```js
from trulens_eval.tru_custom_app import instrument

class RAG_from_scratch:
    @instrument
    def retrieve(self, query: str) -> list:
        """
        Retrieve relevant text from vector store.
        """

    @instrument
    def generate_completion(self, query: str, context_str: list) -> str:
        """
        Generate answer from context.
        """

    @instrument
    def query(self, query: str) -> str:
        """
        Retrieve relevant text given a query, and then generate an answer from the context.
        """
```

### Reference

:::info
[Instruments-Documentation](https://www.trulens.org/trulens_eval/tracking/instrumentation/#using-the-instrumentmethod)
:::

### Providers

#### **1. Classification-based Providers**

1.  These providers use classifiers specifically designed for certain tasks.
2.  **Examples**
    1. [Huggingface provider](https://www.trulens.org/trulens_eval/api/provider/huggingface/):
       Offers a range of classification-based feedback functions.
    2. [OpenAI provider](https://www.trulens.org/trulens_eval/api/provider/openai/#trulens_eval.feedback.provider.openai.OpenAI):
       Known for moderation feedback functions.

#### **2. Generation-based Providers**

1.  These providers utilize large language models to generate feedback.
2.  **Examples**
    1. [OpenAI](https://www.trulens.org/trulens_eval/api/provider/openai/#trulens_eval.feedback.provider.openai.OpenAI)
       or
       [AzureOpenAI providers](https://www.trulens.org/trulens_eval/api/provider/openai/azureopenai/#trulens_eval.feedback.provider.openai.AzureOpenAI)
    2. [Bedrock provider](https://www.trulens.org/trulens_eval/api/provider/bedrock/#trulens_eval.feedback.provider.bedrock.Bedrock)
    3. [LiteLLM provider](https://www.trulens.org/trulens_eval/api/provider/litellm/#trulens_eval.feedback.provider.litellm.LiteLLM)
    4. [LangChain provider](https://www.trulens.org/trulens_eval/api/provider/langchain/#trulens_eval.feedback.provider.langchain.Langchain)
3.  Common feedback functions across these providers are defined in their
    `LLMProvider` class.

#### **3. Embedding-based Providers**

1.  Focus on generating and utilizing embeddings (vector representations of
    data) for feedback functions.

Additionally, there are combination providers that blend capabilities from the
above categories to offer more comprehensive feedback functions.

[Providers-Documentation](https://www.trulens.org/trulens_eval/evaluation/feedback_providers/)

### Records

:::tip 
Learn more about [Records-Documentation](https://www.trulens.org/trulens_eval/api/record/) 
:::
