import { sectionRAG } from '../../src/components/Button/Rag360.ts';

<Button
  class="export-button"
  label="Download!"
  link="#"
  variant="primary"
  size="lg"
  data={sectionRAG}
/>

### Data Ingestion

Learn more about the
[Data Ingestion](/docs/RAG360/Data%20Ingestion/Overview.md)

#### Data Preparation

Learn more about the
[Data Preparation](/docs/RAG360/Data%20Ingestion/Data%20Preparation/Overview.md)

<table id="source-connectors">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Which of these source connectors have you used?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Share Point Reader">Share Point Reader</option>
            <option value="Local Directory Reader">Local Directory Reader</option>
            <option value="Confluence Reader">Confluence Reader</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Which of these source documents have you used?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="PDF">PDF</option>
            <option value="Doc">Doc</option>
            <option value="Register Map">Register Map</option>
            <option value="Instrument Drivers">Instrument Drivers</option>
            <option value="Specification Document">Specification Document</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>If you have used PDF, which type did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Manual Document Preparation">Manual Document Preparation</option>
            <option value="Power Automate">Power Automate</option>
            <option value="Unstructured.io">Unstructured.io</option>
            <option value="Layout PDF Parser">Layout PDF Parser</option>
            <option value="Didn't Use PDF">Didn't Use PDF</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Chunking

Learn more about the
[Chunking](/docs/RAG360/Data%20Ingestion/Chunking/Overview.md)

<table id="chunking-embedding">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Which of these chunking techniques have you used?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Page by Page Chunking">Page by Page Chunking</option>
            <option value="Recursive Character Text Splitter">Recursive Character Text Splitter</option>
            <option value="Meta Data Attachment">Meta Data Attachment</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Embedding

Learn more about the
[Embedding](/docs/RAG360/Data%20Ingestion/Embedding/Overview.md)

##### Model
<table id="model-embedding">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In Model, If you've chosen Offline, Which one of these did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Jina">Jina</option>
            <option value="Nomic">Nomic</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Model, If you've chosen Online, Which one of these did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="OpenAI">OpenAI</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

##### Sparse Vector

<table id="sparse-vector-embedding">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In Sparse Vector, Which one of these did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="BM25">BM25</option>
            <option value="TF-TDF">TF-TDF</option>
            <option value="Splade">Splade</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Vector Database

<table id="vector-database-embedding">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In Vector Database, If you've chosen Online, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Rockset">Rockset</option>
            <option value="Pine Cone">Pine Cone</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Vector Database, If you've chosen In-Memory, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Rockset">FAISS</option>
            <option value="Chroma-DB">Chroma-DB</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Vector Database, If you've chosen Self Hosted, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Qdrant">Qdrant</option>
            <option value="Weaviate">Weaviate</option>
            <option value="Milvus">Milvus</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Retrieval

Learn more about the
[Retrieval](/docs/RAG360/Retrieval/Overview.md)

#### Unstructured

<table id="Unstructured">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In Query Optimization, If you've chosen Query Routing, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Task Based Retrieval">Task Based Retrieval</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Query Optimization, If you've chosen Query Transformations, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Query Expansion">Query Expansion</option>
            <option value="Hypothetical Questions">Hypothetical Questions</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Vector Database, If you've chosen Self Hosted, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Qdrant">Qdrant</option>
            <option value="Weaviate">Weaviate</option>
            <option value="Milvus">Milvus</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Searching, If you've chosen Semantic Searching, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="ANN">ANN</option>
            <option value="KNN">KNN</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Searching, If you've chosen Keyword Searching, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="BM25">BM25</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Searching, If you've chosen Hybrid Searching, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Qdrant">Qdrant</option>
            <option value="Fusion Retriver">Fusion Retriver</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Re-Ranking, If you've chosen Model Based Re Ranking, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Late Interaction">Late Interaction</option>
            <option value="Cross Embedding Models">Cross Embedding Models</option>
            <option value="Chat LLM">Chat LLM</option>
            <option value="LLM Reranker">LLM Reranker</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Re-Ranking, If you've chosen Logical Ranking, which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Relative Score Fusion">Relative Score Fusion</option>
            <option value="Reciprocal Reranking">Reciprocal Reranking</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider checking on Contextual Compressors?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>


#### Structured


<table id="Structured">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In Structured, Which one did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="PandasSQL">PandasSQL</option>
            <option value="PandasLLM">PandasLLM</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Generation

Learn more about [Generation](/docs/RAG360/Generation/Overview.md)
<table id="Generation">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Which type of Generation did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Summarization">Summarization</option>
            <option value="Inferring">Inferring</option>
            <option value="Transforming">Transforming</option>
            <option value="Expanding">Expanding</option>
            <option value="Chatbot">Chatbot</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider choosing Grounding?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Which prompting Techniques did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Chain of Thoughts">Chain of Thoughts</option>
            <option value="Tree of Thoughts">Tree of Thoughts</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Model, If you've chosen Offline (Ollama), Which one of these did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Llama 3">Llama 3</option>
            <option value="Qwen 2">Qwen 2</option>
            <option value="Mistral Nemo">Mistral Nemo</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>In Model, If you've chosen Online, Which one of these did you choose?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="OpenAI">OpenAI</option>
            <option value="Azure OpenAI">Azure OpenAI</option>
            <option value="AWS Bedrock">AWS Bedrock</option>
            <option value="None">None</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider using Guardrails for Security?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Evaluation

Learn more about [Evaluation](/docs/RAG360/Evaluation/Overview.md)

<table id="Evaluation">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Did you consider choosing Trulens in Evaluation Framework?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Which metrics did you consider choosing?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Custom Metric">Custom Metric</option>
            <option value="System Metrics vs Module Metrics">System Metrics vs Module Metrics</option>
            <option value="Good Metrics vs Bad Metrics">Good Metrics vs Bad Metrics</option>
            <option value="Context Relevance">Context Relevance</option>
            <option value="Groundedness">Groundedness</option>
            <option value="Answer Relevance">Answer Relevance</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Tracking

Learn more about [Tracking](/docs/RAG360/Tracking/Overview.md)

<table id="Tracking">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Topics</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Which tracking did you consider choosing?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="Tracking for Debugging">Tracking for Debugging</option>
            <option value="Cost Usage">Cost Usage</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

<Button
  class="export-button"
  label="Download!"
  link="#"
  variant="primary"
  size="lg"
  data={sectionRAG}
/>