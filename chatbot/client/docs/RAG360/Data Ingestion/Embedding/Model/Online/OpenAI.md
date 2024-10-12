### OpenAI Text Embedding Model

OpenAI supports three major text embedding models:

| Embedding Model Name         | Dimension |
|------------------------------|-----------|
| text-embedding-ada-002       | 1536      |
| text-embedding-3-small       | 1536      |
| text-embedding-3-large       | 3072      |

#### Text-embedding-ada-002

#### **Explanation**

1. The OpenAI Text Embedding Model Ada-002 is a machine learning model that
   converts text into numerical embeddings, capturing the semantic meanings of
   words, phrases, and context within the text.

2. As part of OpenAI's language model suite, Ada-002 provides high-quality
   embeddings that support a range of NLP tasks within Retrieval Augmented
   Generation (RAG) systems.

3. In the data ingestion phase of RAG, particularly within Online Models,
   Ada-002 plays a crucial role by transforming textual input into a
   mathematical format that algorithms can easily compare and analyze, enabling
   efficient document retrieval, content recommendation, and query answering.

4. In this embedding model the dimension size is fixed, we cannot change the
   dimension while creating the embeddings.

#### Example

```js
from openai import OpenAI
client = OpenAI()

def get_embedding(text, model="text-embedding-ada-002"):
   text = text.replace("\n", " ")
   return client.embeddings.create(input = [text], model=model).data[0].embedding

df['ada_embedding'] = df.combined.apply(lambda x: get_embedding(x, model='text-embedding-3-small'))
df.to_csv('output/embedded_1k_reviews.csv', index=False)
```

To load the data from a saved file, you can run the following:

```js
import pandas as pd

df = pd.read_csv('output/embedded_1k_reviews.csv')
df['ada_embedding'] = df.ada_embedding.apply(eval).apply(np.array)
```

#### Text-embedding-3-small & Text-embedding-3-large

#### **Explanation**

1. The OpenAI's text-embedding-3-small and text-embedding-3-large is trained
   using
   [Matryoshka Representation Learning](https://supabase.com/blog/matryoshka-embeddings)
   technique.

2. The API of these models supports a dimensions parameter with which you can
   control the length of the resulting embedding.

3. This approach can greatly reduce the time taken to create embeddings and time
   taken to retrieve embeddings.

4. Matryoshka representation learning aims to create hierarchical, nested
   representations that encapsulate multiple levels of information within a
   single vector.

5. In contrast to common vector embeddings, where all dimensions are equally
   important, in Matryoshka embeddings, earlier dimensions store more
   information than dimensions later on in the vector, which simply adds more
   details.

6. You can think of this by the analogy of trying to classify an image at
   multiple resolutions: The lower resolutions give more high-level information,
   while the higher resolutions add more details.

7. According to OpenAI's MTEB scores, text-embedding-3-large @ 256 dimensions
   still outperforms text-embedding-ada-002 @ 1536 dimensions with an MTEB score
   of 62.0 vs 61.0.

8. If you embed the same text with the same model but with a different
   dimensions parameter, you can see that the shorter embedding is not the
   truncated version of the longer one.

#### Example

```js

from openai import OpenAI

openai = OpenAI()

def vectorize(text,
              dimensions,
              model = "text-embedding-3-small"):
   text = text.lower()

   return openai.embeddings.create(input = [text],
                                   model = model,
                                   dimensions = dimensions).data[0].embedding

example_text = "Learned representations are a central component in modern ML systems, serving a multitude of downstream tasks."

full = vectorize(example_text, dimensions = 1536)
short = vectorize(example_text, dimensions = 8)

print(full[:8])
print(short)
```

#### Output

```js
[
  -0.001463836757466197, -0.0241670124232769, 0.00683123804628849,
  -0.013936602510511875, 0.0320618636906147, 0.00872271228581667,
  0.031053075566887856, 0.021820487454533577,
][
  (-0.025210261344909668,
  -0.41620534658432007,
  0.11764788627624512,
  -0.24001678824424744,
  0.5521708130836487,
  0.15022294223308563,
  0.5347974300384521,
  0.3757933974266052)
];
```

9. However, if you examine their cosine similarity, you can see that they are
   very similar (or even equal due to rounding).If you take an even closer look,
   you can see that the embeddings actually only differ by a scaling factor (of
   0.058 in this case).

#### Example

```js
from sklearn.metrics.pairwise import cosine_similarity

print("Cosine similarity: ",cosine_similarity([full[:8]], [short]))

scale = full[0]/short[0]
print("Scale: ",scale)
print([x * scale for x in short])
print(full[:8])

```

#### Output

```js
Cosine similarity: array([[1.]])

Scale: 0.05806511632065122
[-0.001463836757466197, -0.0241670118626955, 0.006831238201508919, -0.01393660272831134, 0.03206186249057062, 0.008722712614794586, 0.031053074983168057, 0.021820487334108546]
[-0.001463836757466197, -0.0241670124232769, 0.00683123804628849, -0.013936602510511875, 0.0320618636906147, 0.00872271228581667, 0.031053075566887856, 0.021820487454533577]

```

10. Additionally, they do not produce compatible embeddings when sliced to the
    same size. And if we need to change the embedding dimension after generating
    it we need to normalize the embedding dimensions.

#### Example

```js
large = vectorize(example_text, dimensions = 3072, model = "text-embedding-3-large")
small = vectorize(example_text, dimensions = 1536, model = "text-embedding-3-small")
print("Large: ",large[:1536])
print("Small: ",small)

print("Cosine similarity: ",cosine_similarity([large[:1536]], [small]))
```

#### Output

```js
Large: [0.011070899665355682,   0.014488349668681622, -0.021118611097335815, -0.011152755469083786, 0.011555208824574947, -0.0007622754783369601, ... ]
Small: [-0.001463836757466197, -0.0241670124232769,    0.00683123804628849,  -0.013936602510511875, 0.0320618636906147,    0.00872271228581667,   ... ]
Cosine similarity: array([[-0.00149749]])
```

### Why We Need OpenAI's Text Embedding Model

#### **Problem Statement**

1. Effectively understanding and processing natural language is a significant
   challenge due to the intricacies and nuances of human language.

2. These models addresses this by providing deep semantic insights into textual
   data, thus enhancing the retrieval capabilities of RAG systems.

### Advantages and Disadvantages of Ada-002

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
            <td><span class="custom-header">Scalability</span></td>
            <td>Capable of handling vast amounts of text smoothly because it converts complex texts into simple numeric representations that are easy to manipulate and analyze.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Versatility</span></td>
            <td>Supports various languages and domains, making it a valuable tool across different geographic and sectoral applications.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Integration Ease</span></td>
            <td>Can be seamlessly integrated into existing RAG frameworks to enhance their performance without substantial modification.</td>
        </tr>
    </tbody>
</table>

#### **Disadvantage**

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">API Usage Costs</span></td>
            <td>OpenAI's embedding models are accessed via API, which incurs costs based on the number of API calls and the amount of text processed. For high-volume usage, this can become expensive, especially when dealing with large datasets or high-frequency requests.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Data Security</span></td>
            <td>Since the data is sent over the internet to an external API, there's always a risk of interception during transmission, despite the use of encryption (e.g., HTTPS). Sensitive data could potentially be exposed if not handled correctly.</td>
        </tr>
    </tbody>
</table>

### Reference

:::info 
Reference Link:- [OpenAI Text Embeddings](https://platform.openai.com/docs/guides/embeddings/embedding-models)
:::
