1. This was done using `SimpleDirectoryreader().loadData()` in Llama_Index.

2. Basically this will embed the list of pdf's passed as page by page chunks.

### Sample Code Here

```js
documents = SimpleDirectoryReader(DOMAIN_DATA_FOLDER_PATH[DOMAIN]).load_data();
d = 1536;
faiss_index = faiss.IndexFlatL2(d);
vector_store = FaissVectorStore((faiss_index = faiss_index));
storage_context = StorageContext.from_defaults((vector_store = vector_store));
index = GPTVectorStoreIndex.from_documents(
  documents,
  (storage_context = storage_context),
);
```

### Advantages

Keeps the context of a page intact, which can be useful for documents where each
page is a logical unit.

### Disadvantages

1. While performing similarity search with "similarity_top_k = 5", LLM uses all
   the 5 pages to summarize the answer. Even if the answer is in line 2 of the a
   page chunk.

2. This resulted in a chunk of irrelevant answers along with the answer for the
   question asked.

3. This also somehow resulted in a increase in billing as a large number of
   tokens are passed for each response.

4. Pages with more text might be too dense, while others might be too sparse.

### Use Case

**Books and Manuals:** Where each page is a logical unit of information.
