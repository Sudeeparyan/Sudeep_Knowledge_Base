### Vector Database Retrieval Journey

A vector database, vector store, or vector search engine is a database that can store vectors along with other data items. 

![story](./Images/story.png)

### Prerequisite
Binary Search

### Binary Search Recap
Binary search is a search algorithm used to find the position of a target value within a sorted array. It operates by repeatedly dividing the search interval in half.

## Start of Journey

Binary search is an algorithm.

Similarly, vector databases support different algorithms, such as:
  Approximate Nearest Neighbor (ANN)
  K-Nearest Neighbors (KNN) - typically not directly supported by vector databases as a basic algorithm.

**To do binary search, we need a sorted array. Since we can't do binary search on an unsorted array, in the same way, we store all the vectors in a way suitable for an algorithm. This is called a Vector Index.***

There are different vector Indexes [link](https://milvus.io/docs/index.md?tab=floating)
  1. SPARSE_INVERTED_INDEX
  2. SPARSE_WAND
  3. FLAT
  4. IVF_FLAT
  5. IVF_SQ8
  6. IVF_PQ
  7. GPU_IVF_FLAT
  8. GPU_IVF_PQ
  9. HNSW
  10. DISKANN

**To do binary search, we compare two elements to check whether they are lesser or greater, and the result is True/False. In the same way, we have different metrics for each algorithm.**

Here are some metrics to check how query vectors and document vectors are close [link](https://milvus.io/docs/metric.md?tab=floating)
  1. Euclidean distance (L2)
  2. Inner product (IP)
  3. Cosine similarity (COSINE)

We can have the array in a python object (memory), or a file on disk and execute the algorithm. This is where the index is categorized based on the type of memory [link](https://milvus.io/docs/index.md?tab=floating)
  1. In-memory Index, 
  2. On-disk Index, 
  3. GPU Index

To store the index with the vector, document content, metadata, and manage the index, we need some applications. This is where the Vector Database comes in:
  1. Faiss, 
  2. Weaviate, 
  3. Qdrant, 
  4. Milvus

**Consider the element in the array. In our case, each element is a vector.**

Different Vectors [link](https://qdrant.tech/articles/late-interaction-models/)
 1. Sparse Vector,
 2. Dense Vector, 
 3. Late Interaction Vector, 
 4. Multivectors.

**Note:** 

If we consider the size of each value in a vector, it is based on the type of data. If we consider float, there are different float types with varied bit sizes. If the bit size of each is high, then precision is high.
 Float 16 bit, 
 Float 32 bit 

Finally, we get the results. In the terms of vector similarity search, we get the score of how the query vector and document vector are related.

Consider we do hybrid search with both sparse and dense vectors. Then, we would get two results. To combine the two results and rerank, there are ranking algorithms inbuilt in vector indexes with hybrid search [link](https://milvus.io/docs/reranking.md)
 Reciprocal Rank Fusion (RRF),
 Weighted Ranker

We also heard of metadata in our retrieval journey. Let's consider the metadata of documents having a journey key like "Retrieval Journey" or "Generation Journey". 

 Some vector DBs support metadata filtering. For example, `{"journey": "Retrieval Journey"}`. We can apply some conditions for filtering the documents.

Then, the result is used by our application.


## References
:::info

 https://milvus.io/docs

 https://qdrant.tech/documentation/concepts/vectors/

  https://weaviate.io/developers/weaviate

  https://milvus.io/docs/metric.md?tab=floating
:::
