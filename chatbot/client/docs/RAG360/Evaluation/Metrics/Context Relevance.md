:::info

### Is the retrieved context relevant to the query?

1. The first step of any RAG application is retrieval; to verify the quality of
   our retrieval, we want to make sure that each chunk of context is relevant to
   the input query.

2. This is critical because this context will be used by the LLM to form an
   answer, so any irrelevant information in the context could be weaved into a
   hallucination.

3. TruLens enables you to evaluate context relevance by using the structure of
   the serialized record.

4. The **"Usage"** part in function documentation tells how to define the
   Feedback Function for Context Relevance. 
:::

````js
COT_REASONS_TEMPLATE = """
Please answer using the entire template below.

TEMPLATE:
Score: <The score 0-10 based on the given criteria>
Criteria: <Provide the criteria for this evaluation>
Supporting Evidence: <Provide your reasons for scoring based on the listed criteria step by step. Tie it back to the evaluation being completed.>
"""

QS_RELEVANCE = """You are a RELEVANCE grader; providing the relevance of the given STATEMENT to the given QUESTION.
Respond only as a number from 0 to 10 where 0 is the least relevant and 10 is the most relevant.

A few additional scoring guidelines:

- Long STATEMENTS should score equally well as short STATEMENTS.

- RELEVANCE score should increase as the STATEMENT provides more RELEVANT context to the QUESTION.

- RELEVANCE score should increase as the STATEMENT provides RELEVANT context to more parts of the QUESTION.

- STATEMENT that is RELEVANT to some of the QUESTION should score of 2, 3 or 4. Higher score indicates more RELEVANCE.

- STATEMENT that is RELEVANT to most of the QUESTION should get a score of 5, 6, 7 or 8. Higher score indicates more RELEVANCE.

- STATEMENT that is RELEVANT to the entire QUESTION should get a score of 9 or 10. Higher score indicates more RELEVANCE.

- STATEMENT must be relevant and helpful for answering the entire QUESTION to get a score of 10.

- Answers that intentionally do not answer the question, such as 'I don't know', should also be counted as the most relevant.

- Never elaborate.

QUESTION: {question}

STATEMENT: {statement}

RELEVANCE: """

def qs_relevance_with_cot_reasons(self, question: str,
                                      statement: str) -> Tuple[float, Dict]:
        """
        Uses chat completion model. A function that completes a
        template to check the relevance of the statement to the question.
        Also uses chain of thought methodology and emits the reasons.

        **Usage:**
        feedback = Feedback(provider.qs_relevance_with_cot_reasons).on_input_output()
        The `on_input_output()` selector can be changed. See [Feedback Function Guide](https://www.trulens.org/trulens_eval/feedback_function_guide/)

        Usage on RAG Contexts:
        feedback = Feedback(provider.qs_relevance_with_cot_reasons).on_input().on(
            TruLlama.select_source_nodes().node.text # See note below
        ).aggregate(np.mean)

        The `on(...)` selector can be changed. See [Feedback Function Guide : Selectors](https://www.trulens.org/trulens_eval/feedback_function_guide/#selector-details)


        Args:
            question (str): A question being asked.
            statement (str): A statement to the question.

        Returns:
            float: A value between 0 and 1. 0 being "not relevant" and 1 being "relevant".
        """
        system_prompt = str.format(
            prompts.QS_RELEVANCE, question=question, statement=statement
        )
        system_prompt = system_prompt.replace(
            "RELEVANCE:", prompts.COT_REASONS_TEMPLATE
        )
        return self.generate_score_and_reasons(system_prompt)
        ```
````
