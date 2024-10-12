### Ranked fusion

1. Currently ranked fusion is supported in `Weaviate` and not in `Qdrant`.

2. Ranked Fusion is used to combine results from multiple search systems or
   models to produce a single, more effective ranking of nodes/documents.

3. Consider in the configuration of retriever, similarity_top = 5 and alpha =
   0.6, this will retrieve 5 nodes from dense vectors (vector search) and 5
   nodes from sparse vectors (keyword search) and then use this fusion algorithm
   to provide the top 5 nodes.

4. In this algorithm, each object is scored according to its position in the
   results for the given search, starting from the highest score for the
   top-ranked object and decreasing down the order. The total score is
   calculated by adding these rank-based scores from the vector and keyword
   searches.

5. Consider, the retriever returns five objects with document id (from 0 to 4),
   and scores from keyword and vector search, ordered by score.

| Search Type | (id): score | (id): score | (id): score | (id): score | (id): score |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Keyword     | (1): 5      | (0): 2.6    | (2): 2.3    | (4): 0.2    | (3): 0.09   |
| Vector      | (2): 0.6    | (4): 0.598  | (0): 0.596  | (1): 0.594  | (3): 0.009  |

```js
 Formula to calculate the ranked fusion - 1/(RANK + 60)
```

### Keyword and Vector Search Ranks, Scores, and Calculations

| Document ID | Keyword Rank | Keyword Calculation | Keyword Score | Vector Rank | Vector Calculation | Vector Score |
| ----------- | ------------ | ------------------- | ------------- | ----------- | ------------------ | ------------ |
| 1           | 0            | 1 / (0 + 60)        | 0.0167        | 3           | 1 / (3 + 60)       | 0.0159       |
| 0           | 1            | 1 / (1 + 60)        | 0.0164        | 2           | 1 / (2 + 60)       | 0.0161       |
| 2           | 2            | 1 / (2 + 60)        | 0.0161        | 0           | 1 / (0 + 60)       | 0.0167       |
| 4           | 3            | 1 / (3 + 60)        | 0.0159        | 1           | 1 / (1 + 60)       | 0.0164       |
| 3           | 4            | 1 / (4 + 60)        | 0.0156        | 4           | 1 / (4 + 60)       | 0.0156       |

### Ranked fusion results without alpha

| Search Type | (id): score | (id): score | (id): score | (id): score | (id): score |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Keyword     | (1): 0.0167 | (0): 0.0160 | (2): 0.0161 | (4): 0.0154 | (3): 0.0156 |
| Vector      | (2): 0.0167 | (4): 0.0160 | (0): 0.0161 | (1): 0.0154 | (3): 0.0156 |

### Combined Ranked fusion

Results with alpha value(α)

1. When α = 1, the final score is determined solely by the vector search (dense
   vectors).
2. When α = 0, the final score is determined solely by the keyword search
   (sparse vectors).
3. With α = 0.6, we will combine 60% of the keyword score and 40% of the vector
   score.
4. Combined Score=α⋅Keyword Score+(1−α)⋅Vector Score

### Detailed Calculations

For Combined Ranked Fusion Results with α = 0.6

| Document ID | Keyword Score | Vector Score | Combined Score Calculation      | Combined Score |
| ----------- | ------------- | ------------ | ------------------------------- | -------------- |
| 1           | 0.0167        | 0.0154       | (0.6 _ 0.0167) + (0.4 _ 0.0154) | 0.01638        |
| 0           | 0.0160        | 0.0161       | (0.6 _ 0.0160) + (0.4 _ 0.0161) | 0.01604        |
| 2           | 0.0161        | 0.0167       | (0.6 _ 0.0161) + (0.4 _ 0.0167) | 0.01634        |
| 4           | 0.0154        | 0.0160       | (0.6 _ 0.0154) + (0.4 _ 0.0160) | 0.01568        |
| 3           | 0.0156        | 0.0156       | (0.6 _ 0.0156) + (0.4 _ 0.0156) | 0.0156         |

### Ranked fusion final result

| Algorithm Type | (id): score  | (id): score  | (id): score  | (id): score  | (id): score  |
| -------------- | ------------ | ------------ | ------------ | ------------ | ------------ |
| Ranked         | (1): 0.01638 | (2): 0.01634 | (0): 0.01604 | (4): 0.01568 | (3): 0.01568 |
