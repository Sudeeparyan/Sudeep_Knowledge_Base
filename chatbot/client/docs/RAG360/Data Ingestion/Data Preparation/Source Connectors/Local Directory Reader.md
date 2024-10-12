It is a convenient way to load data from local files into any framework like
Llama Index and Lang Chain

### Example

```js
from llama_index.core import SimpleDirectoryReader
from llama_index.readers.file import (
    DocxReader,
    PDFReader,
    HTMLTagReader,
    MarkdownReader,
    PptxReader,
    PandasCSVReader,
    VideoAudioReader,
    UnstructuredReader,
    PyMuPDFReader,
    CSVReader,
)


# Pandas CSV Reader example
parser = PandasCSVReader()
file_extractor = {".csv": parser}  # Add other CSV formats as needed
documents = SimpleDirectoryReader("./data", file_extractor=file_extractor).load_data()

# PyMuPDF Reader example
parser = PyMuPDFReader()
file_extractor = {".pdf": parser}
documents = SimpleDirectoryReader( "./data", file_extractor=file_extractor).load_data()

# XML Reader example
parser = XMLReader()
file_extractor = {".xml": parser}
documents = SimpleDirectoryReader("./data", file_extractor=file_extractor).load_data()

# Paged CSV Reader example
parser = PagedCSVReader()
file_extractor = {".csv": parser}  # Add other CSV formats as needed
documents = SimpleDirectoryReader( "./data", file_extractor=file_extractor).load_data()

# CSV Reader example
parser = CSVReader()
file_extractor = {".csv": parser}  # Add other CSV formats as needed
documents = SimpleDirectoryReader("./data", file_extractor=file_extractor).load_data()

```

### Reference

:::info
[Local Directory Reader](https://llamahub.ai/l/readers/llama-index-readers-file?from=readers)
:::
