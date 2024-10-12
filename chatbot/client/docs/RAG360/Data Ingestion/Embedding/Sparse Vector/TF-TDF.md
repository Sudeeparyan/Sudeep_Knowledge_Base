### Creating Sparse Vectors with TF-IDF

#### **Introduction to TF-IDF**

1. **TF-IDF (Term Frequency-Inverse Document Frequency)** is a statistical
   method used to evaluate the importance of a word in a document relative to a
   collection of documents (corpus).

2. It is commonly used in text mining and information retrieval to transform
   text into a numerical representation that reflects the significance of terms.

### Why TF-IDF Works: Term Weighting

1.  TF-IDF emphasizes terms that are frequent in a document but rare across the
    corpus.

2.  For example, in a document about "`solar energy`," the term "`solar`" might
    be frequent, but if it’s uncommon in the overall corpus, TF-IDF assigns it a
    higher weight.

3.  This weighting method helps to identify the most relevant terms in a
    document, making it a powerful tool for text analysis.

        1. **Term Frequency (TF):** Measures how frequently a term appears in a document. The more a term appears, the higher its TF value.
        2. **Inverse Document Frequency (IDF):** Measures how unique a term is across all documents in the corpus. The more unique a term is, the higher its IDF value.

### Calculating Term Frequency (TF)

#### **Term Frequency (TF)**

Calculate the frequency of each term in a specific document. This measures how
often a term appears in a document relative to the total number of words in that
document.

#### **Formula**

```js
TF(t,d) = Number of times term t appears in document d/ Total number of terms in document d
```

#### **Example** For Document 1 ("Data science is awesome"):

```js
1. TF("data") = 1/4
2. TF("science") = 1/4
3. TF("is") = 1/4
4. TF("awesome") = 1/4
5. TF(all other items) = 0
```

### Calculating Inverse Document Frequency (IDF)

#### **Inverse Document Frequency (IDF)**

Calculate how important a term is across the entire corpus. The idea is to
down-weight terms that appear frequently across many documents because they are
less informative.

#### **Formula**

```js
IDF(t) = log(Total of documents/ Number of documents containing term t)
```

#### **Example**

1. Assume the corpus has 3 documents.

2. For the term "data" which appears in all three documents

```js
IDF("data") = log(3/3) = log(1) = 0 (This word is not informative since it appears in all documents)
```

3. For the term "awesome" which appears in only one document

```js
IDF("awesome") = log(3/1) = log(3) = 1.1
```

### Calculating TF-IDF Score

#### **TF-IDF Score**

Combine the term frequency and inverse document frequency to compute the TF-IDF
score for each term in each document.

#### **Formula**

```js
TF-IDF(t,d) = TF(t,d) * IDF(t)
```

#### **Example**

For Document 1:

```js
1. TF-IDF("data") = (1/4) * 0 = 0
2. TF-IDF("awesome") = (1/4) * 1.1 = 0.275
3. TF-IDF(all other items) = 0
```

### Creating the Sparse Vector

#### **Sparse Vector Representation**

For each document, create a vector where each dimension corresponds to a term
from the vocabulary, and the value at each dimension is the TF-IDF score for
that term in that document.

#### **Sparsity**

Since most terms in the vocabulary do not appear in any given document, many
entries in the vector will be zero, leading to a sparse representation.

:::note
[Example] The sparse TF-IDF vector for Document 1 might look like this
(with non-zero elements shown):

[0, 0.275, 0.275, 0.275, 0, 0, 0, 0, 0, 0]

This vector indicates that only a few terms from the vocabulary ("science",
"is", "awesome") have non-zero TF-IDF scores in Document 1. 
:::

### Technical Details

#### **Sparse Representation**

TF-IDF produces sparse vectors, where many elements are zero. This sparsity
arises because most terms in a document do not appear in others, leading to zero
entries in the vector.

#### **Dimensionality**

The dimensionality of a TF-IDF vector depends on the number of unique terms in
the corpus. For example, a corpus with 10,000 unique terms will result in a
10,000-dimensional vector for each document, but most entries will be zero.

### **Memory Usage Example**

For a corpus with 1 million documents and 10,000 unique terms:

    1. **Dense Representation:** Storing full vectors for each document would require 10 billion floats.
    2. **Sparse Representation:** TF-IDF’s sparse vectors require significantly less storage, as only non-zero entries (i.e., terms that actually appear in the document) are stored.

### **Memory Efficiency:**

TF-IDF is memory efficient due to its sparse nature. For large corpora, this
efficiency is crucial, reducing the computational load and storage requirements
compared to dense representations like word embeddings.

### Advantages and Disadvantages of TF-IDF

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
            <td><span class="custom-header">Simplicity</span></td>
            <td>TF-IDF is simple to implement and interpret, making it a popular choice for text representation.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Sparse vectors reduce memory usage and speed up computations in large-scale text processing tasks.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Relevance</span></td>
            <td>TF-IDF effectively highlights important terms in documents, improving the accuracy of information retrieval tasks.</td>
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
            <td><span class="custom-header">Vocabulary Size</span></td>
            <td>The dimensionality of TF-IDF vectors grows with the size of the vocabulary, which can become unwieldy for very large corpora.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Context Ignorance</span></td>
            <td>TF-IDF does not capture the semantic meaning of words or their context within a document, potentially leading to less accurate representations compared to methods like word embeddings.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Static Weights</span></td>
            <td>The weights assigned by TF-IDF are static and do not adapt to different contexts or queries, which can limit its effectiveness in dynamic or complex applications.</td>
        </tr>
    </tbody>
</table>

### Known Limitations of TF-IDF

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Context Sensitivity</span></td>
            <td>TF-IDF does not consider the context in which a term appears, leading to potential misinterpretations in cases where context is crucial for understanding meaning.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Synonym Handling</span></td>
            <td>TF-IDF treats synonyms as different terms, which can result in redundant features and dilute the importance of key concepts.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability Issues</span></td>
            <td>While sparse vectors are memory-efficient, the increasing dimensionality with larger corpora can still pose scalability challenges, particularly in terms of computational resources.</td>
        </tr>
    </tbody>
</table>
