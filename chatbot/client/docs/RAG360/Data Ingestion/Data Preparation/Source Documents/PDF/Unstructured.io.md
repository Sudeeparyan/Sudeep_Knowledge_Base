Unstructured document to structured

1. [Core Functionality](https://unstructured-io.github.io/unstructured/bricks.html)
   Bricks are unstructuredIO functions that refers different stages of document
   pre-processing
2. Partitioning
   1. Extract elements from unstructured documents like PDF
   1. Some extracted
      [element](https://unstructured-io.github.io/unstructured/introduction.html#getting-started:~:text=following%20element%20types%3A-,Elements,-type)
      types
      1. `ListItem`, `NarrativeText`, `Title`, `UncategorizedText`
3. Cleaning
   1. remove / format the contents of extracted elements
   2. Examples
      1. Convert unicode to text , Convert bytes to text
      2. clean_extra_whitespace , clean_trailing_punctuation
4. Extracting
   1. extract specific content from text
   2. Examples
      1. extract_datetimetz , extract_email_address
5. Staging
   1. convert elements to standard doc types (JSON, csv , dataframe etc)
6. Chunking
   1. convert elements to smaller pieces
   2. not as good as `recursiveCharacterTextSplitter`
7. Embedding
   1. embed text using various encoders (like `text-embedding-ada`)

### Advantages

1. works offline
2. Integration with
   [langchain](https://unstructured-io.github.io/unstructured/integrations.html#:~:text=labels%20and%20annotations.-,Integration%20with%20LangChain,-Our%20integration%20with)
   and llama-index
   1. for me langchain working , not llama-index
   2. In langchain it returns only a single Document object from an entire PDF

### Disadvantages

1. Heirarchy is missing
2. no context info , Metadata contains only filepath
3. not detecting tables ( but in documentation it says we can parse
   [tables](https://unstructured-io.github.io/unstructured/introduction/getting_started.html#tables)
   from pdf)
