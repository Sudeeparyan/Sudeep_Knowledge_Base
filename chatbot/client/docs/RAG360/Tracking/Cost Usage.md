### Token Usage Calculation

1. The Context window of a LLM model will be represented in terms of tokens (for
   example `128K tokens` for `gpt-4`)

2. If the token limit for a model is exceeded, the prompt cannot be processed.
   So it is important to make sure you are not exceeding the token limit for
   each LLM call you make

:::info[Tools that can track tokens]

1. llama-index
2. langchain 
::: 
:::tip 
Both langchain and llama-index provides token tracking
   only for openAI models for now 
   :::

#### Llama-Index token tracking

llama index is having a
[TokenCounting Handler](https://docs.llamaindex.ai/en/stable/examples/observability/TokenCountingHandler/)
that tells the token count for

1. LLM Prompt Tokens
2. LLM Completion Tokens
3. Embedding Tokens (if you are using RAG)

#### Langchain token tracking

langchain is having
[OpenAI Callback](https://python.langchain.com/v0.1/docs/modules/model_io/llms/token_usage_tracking/)
which provides token count like llama-index, in addition to that it can also
provide usage cost

### Cost Usage Calculation

1. Lets say you are having a AI system the uses `gpt-4-turbo` to generate
   response, you are utilizing maximum context (128K tokens) and the completion
   tokens is 1K tokens, if that's the case, a single generation would cost
   `$1.3` dollars and if 100 people are using your system making 10 generations
   in a day, then it would cost `1.3 * 100 * 10 * 30 = $3900` in a month Whereas
   `gpt-4o` is relatively cheaper and provides response as good as
   `gpt-4-turbo`, if you have switched to `gpt-4o` the total cost for a month
   would be `$1950`

2. To make these calculation, you need to track the usage cost precisely for
   each block of your system where LLM call is made

3. To make this process easier, langchain provides
   [OpenAI Callback](https://python.langchain.com/v0.1/docs/modules/model_io/llms/token_usage_tracking/)
   that tells the cost for a AI workflow

#### How Langchain is tracking cost

For openai models, langchain will maintain a dictionary that says how much it
costs for each model to consume 1K tokens, after tracking tokens, it will me
multiplied with the corresponding model's cost

#### Track usage cost in llama-index

llama-index currently doesnot support cost tracking, but with help of langchain
it is possible to track cost of your llama-index application -
[refer here](https://github.com/run-llama/llama_index/issues/13443)

### Methods to Optimize Usage cost

If you found your AI system is consuming lot of cost and want to reduce it,
there are several way to do it

1.  Reducing prompt length
    1.  prompt compression : summarize the prompt with a lower model before
        getting completion from a more performant model
2.  Using lower sized models
    1. compromising performance for cost
3.  Using openai batch api
    1. 50% less cost with increased latency
