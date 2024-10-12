### Relative score fusion algorithm

1. Relative score fusion is supported in both Weaviate and Qdrant.

2. In contrast to rankedFusion, however, relativeScoreFusion derives each
   objects score by normalizing the metrics output by the vector search and
   keyword search respectively. The highest value becomes 1, the lowest value
   becomes 0, and others end up in between according to this scale. The total
   score is thus calculated by a scaled sum of normalized vector similarity and
   normalized BM25/sparse vector score.

3. Consider, the retriever returns five objects with document id (from 0 to 4),
   and scores from keyword and vector search, ordered by score.

   | Search Type | (id): score | (id): score | (id): score | (id): score | (id): score |
   | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
   | Keyword     | (1): 5      | (0): 2.6    | (2): 2.3    | (4): 0.2    | (3): 0.09   |
   | Vector      | (2): 0.6    | (4): 0.598  | (0): 0.596  | (1): 0.594  | (3): 0.009  |

### Normalized score calculation formula:

```js
 Normalized Score = (Original Score - Minimum Score) / (Maximum Score - Minimum Score)
```

### Keyword Search Scores Normalization

1. Maximum score - 5
2. Minimum score - 0.09

| Document ID | Original Score | Calculation for Normalization | Normalized Score |
| ----------- | -------------- | ----------------------------- | ---------------- |
| 1           | 5              | (5 - 0.09) / (5 - 0.09)       | 1.0              |
| 0           | 2.6            | (2.6 - 0.09) / (5 - 0.09)     | 0.511            |
| 2           | 2.3            | (2.3 - 0.09) / (5 - 0.09)     | 0.450            |
| 4           | 0.2            | (0.2 - 0.09) / (5 - 0.09)     | 0.022            |
| 3           | 0.09           | (0.09 - 0.09) / (5 - 0.09)    | 0.0              |

### Vector Search Scores Normalization

1. Maximum score - 5
2. Minimum score - 0.09

| Document ID | Original Score | Calculation for Normalization   | Normalized Score |
| ----------- | -------------- | ------------------------------- | ---------------- |
| 2           | 0.6            | (0.6 - 0.009) / (0.6 - 0.009)   | 1.0              |
| 4           | 0.598          | (0.598 - 0.009) / (0.6 - 0.009) | 0.996            |
| 0           | 0.596          | (0.596 - 0.009) / (0.6 - 0.009) | 0.993            |
| 1           | 0.594          | (0.594 - 0.009) / (0.6 - 0.009) | 0.986            |
| 3           | 0.009          | (0.009 - 0.009) / (0.6 - 0.009) | 0.0              |

### Final Normalized Scores without alpha

| Search Type | (id): score | (id): score | (id): score | (id): score | (id): score |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Keyword     | (1): 1.0    | (0): 0.511  | (2): 0.450  | (4): 0.022  | (3): 0.0    |
| Vector      | (2): 1.0    | (4): 0.996  | (0): 0.993  | (1): 0.986  | (3): 0.0    |

### Detailed Calculations

For Combined Relative score fusion Results with α = 0.6 | Document ID | Keyword
Score | Vector Score | Combined Score Calculation | Combined Score |
|-------------|---------------|--------------|----------------------------------------------------------|----------------|
| 1 | 1.0 | 0.986 | 0.6 × 1.0 + 0.4 × 0.986 = 0.6 + 0.3944 = 0.9944 | 0.9944 | |
0 | 0.511 | 0.993 | 0.6 × 0.511 + 0.4 × 0.993 = 0.3066 + 0.3972 = 0.7038 |
0.7038 | | 2 | 0.450 | 1.0 | 0.6 × 0.450 + 0.4 × 1.0 = 0.27 + 0.4 = 0.67 | 0.67
| | 4 | 0.022 | 0.996 | 0.6 × 0.022 + 0.4 × 0.996 = 0.0132 + 0.3984 = 0.4116 |
0.4116 | | 3 | 0.0 | 0.0 | 0.6 × 0.0 + 0.4 × 0.0 = 0.0 | 0.0 |

### Relative score fusion final result

| Algorithm Type | (id): score | (id): score | (id): score | (id): score | (id): score |
| -------------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Relative       | (1): 0.993  | (0): 0.752  | (2): 0.725  | (4): 0.509  | (3): 0.0    |
