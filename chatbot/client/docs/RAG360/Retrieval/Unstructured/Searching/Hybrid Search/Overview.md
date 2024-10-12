### Hybrid search

1. There is no single definition of hybrid search.

2. If we use more than one search algorithm, then it might be described as some
   sort of hybrid search.

3. Hybrid search in vector databases combines the strengths of sparse and dense
   vector representations to deliver comprehensive search results.

4. Sparse vectors (e.g., BM25, SPLADE) are adept at keyword matching, while
   dense vectors (e.g., transformers, OpenAI Ada-002) excel at understanding the
   context and semantics of queries.

5. By leveraging both, hybrid search aims to improve relevance and accuracy.

### Popular hybrid search techniques

1. Vector search with key based search
2. Mix of dense and sparse vectors

### Adjusting the Search Balance

The hybrid search results can be from keyword or vector components. To change
the relative weights of keyword and vector components, we can use alpha
value. 
1. **Alpha = 1**: Pure vector search (dense vectors only).

2. **Alpha =0**: Pure keyword search (sparse vectors only). 

3. **Alpha = 0.5**: Balanced hybrid search (equal weight to dense and sparse vectors).

### Fusion Algorithms for Result Integration

      To create a unified ranked list from the results of both vector types, fusion algorithms are used:
      1. **Ranked Fusion**: Merges lists based on the rank of each result.
      
      2. **Relative Score Fusion**: Combines results based on their relative scores.
      
      3. **Reciprocal Ranked Fusion**: Uses reciprocal ranks to merge lists.\\

## Optimization Strategies

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Configuration Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Changing Alpha</span></td>
            <td>Adjusting the alpha value to prioritize either keyword or vector search based on the use case.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Choosing the Ranking Algorithm</span></td>
            <td>Experimenting with different fusion algorithms to find the most effective one for your data and queries.</td>
        </tr>
    </tbody>
</table>

:::info

1. In all these examples for calculating the fusion algorithm scores, the
   retriever returns same documents/nodes, in both vector and keyword, but in
   real time, the retrieval might retrieve different documents for vector and
   keyword and in that case, alpha values plays a major role in the calculation.
2. According to Weaviate internal benchmarks, the default relativeScoreFusion
   algorithm showed a ~6% improvement in recall over the rankedFusion method.
   :::
