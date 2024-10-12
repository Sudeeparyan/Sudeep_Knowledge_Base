
export const sectionRAG = [
    {
        heading: 'Data Ingestion',
        tables: [
            { name: 'Data Preparation', id: 'source-connectors' },
            { name: 'Chunking', id: 'chunking-embedding' },
            { name: 'Embedding/Model', id: 'model-embedding' },
            { name: 'Embedding/Sparse Vector', id: 'sparse-vector-embedding' },
            { name: 'Vector Database', id: 'vector-database-embedding' },
        ]
    },
    {
        heading: 'Retrieval',
        tables: [
            { name: 'Unstructured', id: 'Unstructured' },
            { name: 'Structured', id: 'Structured' },
        ]
    },
    {
        heading: 'Generation',
        tables: [
            { name: 'Generation', id: 'Generation' },
        ]
    },
    {
        heading: 'Evaluation',
        tables: [
            { name: 'Evaluation', id: 'Evaluation' },
        ]
    },
    {
        heading: 'Tracking',
        tables: [
            { name: 'Tracking', id: 'Tracking' },
        ]
    },
];