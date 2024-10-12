:::tip

### Is the answer relevant to the query?

1. Last, our response still needs to helpfully answer the original question. We
   can verify this by evaluating the relevance of the final response to the user
   input.

2. The **"Usage"** part in function documentation tells how to define the
   Feedback Function for Answer Relevance.

:::

### **Implementation in Trulens**

````js
PR_RELEVANCE = """You are a RELEVANCE grader; providing the relevance of the given RESPONSE to the given PROMPT.
Respond only as a number from 0 to 10 where 0 is the least relevant and 10 is the most relevant.

A few additional scoring guidelines:

- Long RESPONSES should score equally well as short RESPONSES.

- Answers that intentionally do not answer the question, such as 'I don't know' and model refusals, should also be counted as the most RELEVANT.

- RESPONSE must be relevant to the entire PROMPT to get a score of 10.

- RELEVANCE score should increase as the RESPONSE provides RELEVANT context to more parts of the PROMPT.

- RESPONSE that is RELEVANT to none of the PROMPT should get a score of 0.

- RESPONSE that is RELEVANT to some of the PROMPT should get as score of 2, 3, or 4. Higher score indicates more RELEVANCE.

- RESPONSE that is RELEVANT to most of the PROMPT should get a score between a 5, 6, 7 or 8. Higher score indicates more RELEVANCE.

- RESPONSE that is RELEVANT to the entire PROMPT should get a score of 9 or 10.

- RESPONSE that is RELEVANT and answers the entire PROMPT completely should get a score of 10.

- RESPONSE that confidently FALSE should get a score of 0.

- RESPONSE that is only seemingly RELEVANT should get a score of 0.

- Never elaborate.

PROMPT: {prompt}

RESPONSE: {response}

RELEVANCE:
"""

COT_REASONS_TEMPLATE = """
Please answer using the entire template below.

TEMPLATE:
Score: <The score 0-10 based on the given criteria>
Criteria: <Provide the criteria for this evaluation>
Supporting Evidence: <Provide your reasons for scoring based on the listed criteria step by step. Tie it back to the evaluation being completed.>
"""

def relevance_with_cot_reasons(self, prompt: str,
                                   response: str) -> Tuple[float, Dict]:
        """
        Uses chat completion Model. A function that completes a template to
        check the relevance of the response to a prompt. Also uses chain of
        thought methodology and emits the reasons.

        **Usage:**
        ```python
        feedback = Feedback(provider.relevance_with_cot_reasons).on_input_output()

        The `on_input_output()` selector can be changed. See [Feedback Function
        Guide](https://www.trulens.org/trulens_eval/feedback_function_guide/)

        Usage on RAG Contexts:
        ```python

        feedback = Feedback(provider.relevance_with_cot_reasons).on_input().on(
            TruLlama.select_source_nodes().node.text # See note below
        ).aggregate(np.mean)

        The `on(...)` selector can be changed. See [Feedback Function Guide :
        Selectors](https://www.trulens.org/trulens_eval/feedback_function_guide/#selector-details)

        Args:
            prompt (str): A text prompt to an agent.
            response (str): The agent's response to the prompt.

        Returns:
            float: A value between 0 and 1. 0 being "not relevant" and 1 being
            "relevant".
        """
        system_prompt = str.format(
            prompts.PR_RELEVANCE, prompt=prompt, response=response
        )
        system_prompt = system_prompt.replace(
            "RELEVANCE:", prompts.COT_REASONS_TEMPLATE
        )
        return self.generate_score_and_reasons(system_prompt)
````
