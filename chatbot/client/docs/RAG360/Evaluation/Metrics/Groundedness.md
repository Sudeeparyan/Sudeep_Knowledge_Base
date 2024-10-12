:::info

#### Is the response supported by the context?

1. After the context is retrieved, it is then formed into an answer by an LLM.
   LLMs are often prone to stray from the facts provided, exaggerating or
   expanding to a correct-sounding answer.

2. To verify the groundedness of our application, we can separate the response
   into individual claims and independently search for evidence that supports
   each within the retrieved context.

3. The **"Usage"** part in function documentation tells how to define the
   Feedback Function for Groundedness. 
:::

````js
LLM_GROUNDEDNESS_FULL_SYSTEM = """You are a INFORMATION OVERLAP classifier providing the overlap of information between a SOURCE and STATEMENT.
For every sentence in the statement, please answer with this template:

TEMPLATE:
Statement Sentence: <Sentence>,
Supporting Evidence: <Choose the exact unchanged sentences in the source that can answer the statement, if nothing matches, say NOTHING FOUND>
Score: <Output a number between 0-10 where 0 is no information overlap and 10 is all information is overlapping>
"""

LLM_GROUNDEDNESS_FULL_PROMPT = """Give me the INFORMATION OVERLAP of this SOURCE and STATEMENT.

SOURCE: {premise}

STATEMENT: {hypothesis}
"""

def groundedness_measure_with_cot_reasons(
        self, source: str, statement: str
    ) -> Tuple[float, dict]:
        """
        A measure to track if the source material supports each sentence in the statement using an LLM provider.

        The LLM will process the entire statement at once, using chain of thought methodology to emit the reasons.

        Usage on RAG Contexts:
        from trulens_eval import Feedback
        from trulens_eval.feedback import Groundedness
        from trulens_eval.feedback.provider.openai import OpenAI
        grounded = feedback.Groundedness(groundedness_provider=OpenAI())


        f_groundedness = feedback.Feedback(grounded.groundedness_measure_with_cot_reasons).on(
            Select.Record.app.combine_documents_chain._call.args.inputs.input_documents[:].page_content # See note below
        ).on_output().aggregate(grounded.grounded_statements_aggregator)
        The `on(...)` selector can be changed. See [Feedback Function Guide : Selectors](https://www.trulens.org/trulens_eval/feedback_function_guide/#selector-details)


        Args:
            source (str): The source that should support the statement
            statement (str): The statement to check groundedness

        Returns:
            Tuple[float, dict]: A measure between 0 and 1, where 1 means each sentence is grounded in the source.
        """
        groundedness_scores = {}
        if not isinstance(self.groundedness_provider, LLMProvider):
            raise AssertionError(
                "Only LLM providers are supported for groundedness_measure_with_cot_reasons."
            )
        else:
            reason = self.groundedness_provider._groundedness_doc_in_out(
                source, statement
            )
            i = 0
            for line in reason.split('\n'):
                if "Score" in line:
                    groundedness_scores[f"statement_{i}"
                                       ] = re_0_10_rating(line) / 10
                    i += 1
        return groundedness_scores, {"reasons": reason}

def _groundedness_doc_in_out(self, premise: str, hypothesis: str) -> str:
        """
        An LLM prompt using the entire document for premise and entire statement
        document for hypothesis.

        Args:
            premise (str): A source document
            hypothesis (str): A statement to check

        Returns:
            str: An LLM response using a scorecard template
        """
        assert self.endpoint is not None, "Endpoint is not set."

        return self.endpoint.run_in_pace(
            func=self._create_chat_completion,
            prompt=str.format(prompts.LLM_GROUNDEDNESS_FULL_SYSTEM,) +
            str.format(
                prompts.LLM_GROUNDEDNESS_FULL_PROMPT,
                premise=premise,
                hypothesis=hypothesis
            )
        )
        ```
````
