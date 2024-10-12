### What is Embedding in Data Ingestion?

#### **Explanation**

1. Embedding, in the context of data ingestion, is the process of converting raw
   data into a lower-dimensional vector form, making it more efficient for
   processing, storage, and analysis, especially in tasks like machine learning
   and natural language processing.

2. In RAG360, embedding is essential for transforming high-dimensional data,
   such as text or images, into formats that are easier to handle and analyze,
   serving as a key step in data preparation and ingestion for complex analyses
   and model training.

#### **Problem Statement**

1. Handling high-dimensional data in its raw form can be impractical due to
   computational constraints and inefficiencies. Without embedding, algorithms
   might struggle with the "curse of dimensionality," leading to poorer
   performance and slower processing times.

### Advantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Benefit</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Compact Representation</span></td>
            <td>Data is represented in a more compact form, conserving storage and bandwidth.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Noise Reduction</span></td>
            <td>Helps in filtering out noise and retaining essential information within the data.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Parallel Processing</span></td>
            <td>Facilitates parallel processing of data vectors, enhancing system throughput and efficiency.</td>
        </tr>
    </tbody>
</table>

They’re pivotal in information retrieval, especially in ranking and search
systems.

| Feature                      | Sparse Vectors                                                     | Dense Vectors                                      |
| ---------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| **Data Representation**      | Majority of elements are zero                                      | All elements are non-zero                          |
| **Computational Efficiency** | Generally higher, especially in operations involving zero elements | Lower, as operations are performed on all elements |
| **Information Density**      | Less dense, focuses on key features                                | Highly dense, capturing nuanced relationships      |
| **Example Applications**     | Text search, Hybrid search                                         | RAG, many general machine learning tasks           |

Let's check out SPLADE, an excellent method for creating sparse vectors. Below
are some performance metrics. Higher is better:

| Model            | MRR@10 (MS MARCO Dev) | Type   |
| ---------------- | --------------------- | ------ |
| BM25             | 0.184                 | Sparse |
| TCT-ColBERT      | 0.359                 | Dense  |
| doc2query-T5     | 0.277                 | Sparse |
| SPLADE           | 0.322                 | Sparse |
| SPLADE-max       | 0.340                 | Sparse |
| SPLADE-doc       | 0.322                 | Sparse |
| DistilSPLADE-max | 0.368                 | Sparse |

All numbers are from `SPLADEv2`. MRR is Mean Reciprocal Rank, a standard metric
for ranking. MS MARCO is a dataset for evaluating ranking and retrieval for
passages.

#### Recommended

1. If we use only Keyword search, then go with SPLADE. As it has higher score.

2. If we use hybrid search, then TF-IDF(For BM25) with dense
   vectors(text-embedding-ada-002) is recommended

This structured detailing will help ensure your documentation for the embedding
process within RAG360's data ingestion is comprehensive, clear, and beneficial
to stakeholders seeking to understand or implement this essential operation.
