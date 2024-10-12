### An Efficient Way to Make Sparse Vectors

1. `SPLADE (Sparse LAttice Distance Embedding)` is a model designed to create
   such sparse vectors for text data.

2. SPLADE is more a class of models rather than a single model.

3. These models are part of the family of dense-to-sparse models that bridge the
   gap between dense embeddings and sparse retrieval techniques.

4. They aim to leverage the strengths of both dense representations (like those
   produced by Transformer models) and sparse, high-dimensional representations
   used in traditional retrieval systems.

5. Depending on the regularization magnitude, different models can be
   obtained—from very sparse to models doing intense query/document
   expansion—with varying properties and performance.

### How SPLADE Works: Term Expansion

1. A key component of SPLADE is term expansion.

2. **For instance,** given a query like "solar energy advantages," SPLADE might
   expand it to include terms like "`renewable`," "`sustainable`," and
   "`photovoltaic`," which are contextually relevant but not explicitly
   mentioned.

3. This ability to expand queries and documents to include other relevant terms
   gives SPLADE a crucial advantage over other sparse methods that only include
   exact words while missing contextually relevant ones.

:::info

     In a TF-IDF, we’d assign weights only to these tokens or words. In SPLADE, we assign weights to all the tokens in the vocabulary in which the model is trained.

:::

### Technical Details

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Sparsity via Regularization</span></td>
            <td>Controls the number of tokens (BERT wordpieces) used to represent each document. More tokens make the vectors denser.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Token Representation</span></td>
            <td>Typically between 20 to 200 tokens per document. For reference, the dense BERT vector is 768 dimensions, OpenAI Embedding is 1536 dimensions, and the sparse vector is 30 dimensions.</td>
        </tr>
    </tbody>
</table>

#### Memory Usage Example

For a 1M document corpus: 1. **Dense BERT Vector**: 768M floats 2. **OpenAI
Embedding**: 1.536B floats 3. **Sparse Vector**: Maximum of 100M integers + 100M
floats

| Vector Type       | Memory (GB) |
| ----------------- | ----------- |
| Dense BERT Vector | 6.144       |
| OpenAI Embedding  | 12.288      |
| Sparse Vector     | 1.12        |

### How SPLADE Works: Leveraging BERT

1.  SPLADE uses a transformer architecture to generate sparse representations of
    documents and queries.

2.  The output logits from the transformer backbone are used to build sparse
    vectors, emphasizing terms that are:

        1. **Contextually Relevant**: Terms that represent a document well.
        2. **Discriminative Across Documents**: Terms that a document has, and others don’t.

3.  These token-level distributions are transformed into token-level importance
    scores in SPLADE, guiding the model to allocate more weight to significant
    terms.

### Advantages and Disadvantages of SPLADE

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
            <td><span class="custom-header">Keyword Search</span></td>
            <td>If we use only Keyword search, then SPLADE is recommended.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Memory Efficiency</span></td>
            <td>Sparse vectors significantly reduce memory usage.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Performance</span></td>
            <td>High retrieval effectiveness by expanding relevant terms.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Flexibility</span></td>
            <td>Tunable regularization allows for different model properties.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Interpretability</span></td>
            <td>Provides insights into why a document is relevant to a query.</td>
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
            <td><span class="custom-header">Sparse Vectors</span></td>
            <td>To create sparse vectors with SPLADE, we need GPU to do it faster.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Pooling Strategy Sensitivity</span></td>
            <td>Performance is sensitive to the choice of pooling strategy.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Query Encoder Dependency</span></td>
            <td>Efficiency can be affected by the necessity of a query encoder.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Embedding Time</span></td>
            <td>The time required to generate embeddings with SPLADE models depends on the hardware used. It is recommended to use a GPU for faster embedding creation.</td>
        </tr>
    </tbody>
</table>

### Known Limitations of SPLADE

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Pooling Strategy</span></td>
            <td>The switch to max pooling improved performance but indicates a potential limitation in the baseline SPLADE pooling method.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Document and Query Encoder</span></td>
            <td>Using a document encoder with max pooling but no query encoder achieves similar performance, suggesting a limitation in the necessity of a query encoder.</td>
        </tr>
    </tbody>
</table>

### Reference

:::info 

Learn more about [Sparse Vector](https://qdrant.tech/articles/sparse-vectors/) 
:::
