#### Nomic Embedding in RAG Systems

#### **Explanation**

1. Nomic Embedding is a technique that converts textual data into rich, semantic
   vector embeddings using machine learning models optimized for offline
   operations.

2. In Retrieval Augmented Generation (RAG) systems, especially those handling
   batch processes and large-scale datasets without real-time interaction, Nomic
   Embedding plays a critical role.

3. These embeddings capture deep contextual nuances beyond simple word
   associations, enabling more sophisticated data retrieval and analysis in RAG
   systems.

4. For offline RAG systems, where data is processed in batches, Nomic Embedding
   offers a robust framework for preprocessing and storing embeddings, enhancing
   the efficiency of data retrieval and processing workflows.

5. Nomic-embed-text-v1.5 is trained on Matryoshka Representation Learning as
   same as OpenAI's text-embedding-3-small and text-embedding-3-large.

6. Using this model, we can create embeddings of different dimensions.
   Default/Max-dimension - 768

### Utilizing Nomic's Embedding Model

1. Nomic's embedding models can be integrated through several methods: 1.
   **Nomic's Official API** 2. **Hugging Face** 3. **Ollama**

2. Among these, using **Hugging Face** and **Ollama** is preferred as they allow
   the embedding models to be run locally.

### Using Nomic Models via Hugging Face

1. Nomic's embedding models are available directly on
   [Hugging Face](https://huggingface.co/nomic-ai/nomic-embed-text-v1.5) and can
   be used with the Sentence Transformers library.

2. While understanding the code structure may take some time, the recommended
   approach is to integrate these models with
   [Llama-index](https://docs.llamaindex.ai/en/stable/examples/llm/huggingface/).

#### Example

```js
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

embed_model = HuggingFaceEmbedding(model_name="nomic-ai/nomic-embed-text-v1")

embeddings = embed_model.get_text_embedding("Hello World!")
print(len(embeddings))
print(embeddings[:5])
```

#### Output

```js
Hello World!
384
[-0.030880315229296684, -0.11021008342504501, 0.3917851448059082, -0.35962796211242676, 0.22797748446464539]
```

### Using Jina Embedding Models via Ollama

1. Nomic's embedding models are available directly on
   [Ollama](https://ollama.com/library/nomic-embed-text) by specifying the
   model.

2. The recommended approach here is to use the Ollama interface with
   [Llama-index](https://docs.llamaindex.ai/en/stable/examples/embeddings/ollama_embedding/)

#### Example

```js
from llama_index.embeddings.ollama import OllamaEmbedding

ollama_embedding = OllamaEmbedding(
    model_name="https://ollama.com/library/nomic-embed-text",
    base_url="http://localhost:11434",
    ollama_additional_kwargs={"mirostat": 0},
)

data_source_embedding = ollama_embedding.get_text_embedding_batch(
    ["This is a passage!", "This is another passage"], show_progress=True
)
query_embedding = ollama_embedding.get_query_embedding("Where is blue?")
```

#### Important considerations

1. If the system running the embedding pipeline is powerful, both the Hugging
   Face and Ollama approaches can be utilized effectively.

2. For setups with a dedicated GPU as separate systems, the preferred approach
   is to use Ollama embeddings. You can configure the GPU as a server and
   replace the base_url in the ollama_embedding with the GPU server URL,
   significantly enhancing the performance of embedding operations.

### Why We Need Nomic Embedding

#### **Problem Statement**

1. Handling vast arrays of unstructured textual data and extracting meaningful,
   actionable insights in environments where real-time processing is not crucial
   but depth and accuracy of information are paramount can be challenging.

2. Nomic Embedding addresses this by offering a method to encode this
   information into embeddings that reflect deeper linguistic and semantic
   features.

### Advantages and Disadvantages

#### **Advantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Enhanced Semantic Accuracy</span></td>
            <td>Provides high-quality embeddings that closely represent the semantic and contextual meanings of the original text.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Effective in processing and analyzing large datasets, suitable for enterprise-level applications dealing with voluminous data.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Adaptability</span></td>
            <td>Can be tailored to specific industry needs or particular types of text analysis, enhancing the model's applicability and effectiveness.</td>
        </tr>
    </tbody>
</table>

#### **Disadvantages**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Computational Resources</span></td>
            <td>Requires significant computational power for training and generating embeddings, particularly when dealing with extensive corpora.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Complex Setup and Maintenance</span></td>
            <td>Implementing a Nomic Embedding infrastructure can be complex and requires expertise in machine learning and natural language processing.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Latency in Updates</span></td>
            <td>Being optimized for offline use, any updates or changes in data might not be immediately reflected until the next batch processing cycle.</td>
        </tr>
    </tbody>
</table>

### Reference

:::info 
Reference Link:- [Nomic](https://docs.nomic.ai/) 
:::
