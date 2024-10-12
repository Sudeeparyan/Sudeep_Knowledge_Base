1. Weaviate is an open-source, vector search engine and vector database designed
   to handle large volumes of unstructured data.

2. It leverages machine learning models to convert unstructured data into
   vectors (dense vectors, sparse vectors), which can then be efficiently
   searched and retrieved based on their semantic similarity.

### Advantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Hybrid Search</span></td>
            <td>Combines vector and keyword search techniques to deliver precise and contextual results.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Open Source</span></td>
            <td>Provides a flexible and developer-friendly environment, with no dependencies on third-party databases.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scaling</span></td>
            <td>Weaviate is designed to scale horizontally, allowing it to handle large datasets across distributed environments. It can scale efficiently by adding more nodes to the cluster.</td>
        </tr>
    </tbody>
</table>

### Disadvantages

1. When we deploy Weaviate in App Service, it loses the collection. But we also
   use azure blob storage for auto backup and restore in Astro
2. Not support SPLADE as of (August 2024)
