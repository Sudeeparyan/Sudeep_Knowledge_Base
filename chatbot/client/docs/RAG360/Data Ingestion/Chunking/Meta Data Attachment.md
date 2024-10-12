We would extract the metadata information like Filename.

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
            <td><span class="custom-header">Enhanced Search Accuracy</span></td>
            <td>Metadata helps in refining search results by providing additional context, making it easier to retrieve relevant chunks.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Improved Contextual Understanding</span></td>
            <td>Metadata can maintain the continuity of information across chunks, ensuring that the context is preserved.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Efficient Data Management</span></td>
            <td>It allows for better organization and categorization of data, making it easier to manage and retrieve.</td>
        </tr>
    </tbody>
</table>

### Disadvantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Drawback</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Dependency on Metadata Quality</span></td>
            <td>The metadata must be of high quality and accuracy. Poor or inaccurate metadata can lead to ineffective search results and context preservation, undermining the benefits of metadata integration.</td>
        </tr>
    </tbody>
</table>

### Use Cases

1. In Vina, we use source link for file, by attaching the share point location
   link in the metadata.

2. In STMicro, we include product names as metadata, so we keyword search in
   metadata to filter out the products

### Example

```js
from llama_index.core.extractors import (
    TitleExtractor,
    QuestionsAnsweredExtractor,
)
from llama_index.core.node_parser import TokenTextSplitter

text_splitter = TokenTextSplitter(
    separator=" ", chunk_size=512, chunk_overlap=128
)
title_extractor = TitleExtractor(nodes=5)
qa_extractor = QuestionsAnsweredExtractor(questions=3)

# assume documents are defined -> extract nodes
from llama_index.core.ingestion import IngestionPipeline

pipeline = IngestionPipeline(
    transformations=[text_splitter, title_extractor, qa_extractor]
)

nodes = pipeline.run(
    documents=documents,
    in_place=True,
    show_progress=True,
)
```

or insert into an index:

```js
from llama_index.core import VectorStoreIndex

index = VectorStoreIndex.from_documents(
    documents, transformations=[text_splitter, title_extractor, qa_extractor]
)
```

### Reference

:::info Reference
Link:-[Metadata Extraction](https://docs.llamaindex.ai/en/stable/module_guides/loading/documents_and_nodes/usage_metadata_extractor/)
:::
