1.  **Sparse vectors** are like the Marie Kondo of data—keeping only what sparks
    joy (or relevance, in this case).

2.  Consider a simplified example of 2 documents, each with 200 words.

3.  A dense vector would have several hundred non-zero values, whereas a sparse
    vector could have much fewer, say only 20 non-zero values.

4.  **In this example:** We assume it selects only 2 words or tokens from each
    document. The rest of the values are zero. This is why it’s called a sparse
    vector.

        1. **Dense Vector**: `[0.2, 0.3, 0.5, 0.7, ...]`  # several hundred floats
        2. **Sparse Vector**: `[{331: 0.5}, {14136: 0.7}]`  # 20 key-value pairs

5.  The numbers 331 and 14136 map to specific tokens in the vocabulary e.g.,
    `['chocolate', 'icecream']`. The rest of the values are zero. This is why
    it’s called a **sparse vector**.

6.  The tokens aren’t always words though; sometimes they can be sub-words:
    `['ch', 'ocolate']` too.

7.  Sparse Vectors are a representation where each dimension corresponds to a
    word or subword, greatly aiding in interpreting document rankings.

8.  This clarity is why sparse vectors are essential in modern search and
    recommendation systems, complimenting the meaning-rich embedding or dense
    vectors.

## Use Cases

1. Sparse Vectors shine in domains and scenarios where many rare keywords or
   specialized terms are present.

2. **For example**, in filtering the Product based on name, id, these rare terms
   are not present in the general vocabulary.
