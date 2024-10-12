### Technique

1. The Recursive Character Text Splitter is a method used to divide large texts
   into smaller chunks while preserving the contextual integrity.

2. It works by attempting to split the text using a list of characters in a
   specified order until the chunks are small enough.

3. The default list of characters includes `"\n\n"`, `"\n"`, `" "`, and `""`.

4. This approach helps keep paragraphs, sentences, and words together as much as
   possible, ensuring that the text remains semantically coherent¹².
   [Learn more](https://dev.to/eteimz/understanding-langchains-recursivecharactertextsplitter-2846)

5. [length fuction](https://python.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter#:~:text=%3D%2020%2C-,length_function,-%3D%20len%2C)
   can be passed to tell how to calculate length of the splitted chunks (default
   in `len` , we can also pass token counting function for the model we are
   using)

6. In case of `recursiveCharacterTextSplitter`, we need to find a good chunk
   size.

### Advantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Context Preservation</span></td>
            <td>By splitting text at logical points (paragraphs, sentences), it maintains the context better than arbitrary splitting.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Flexibility</span></td>
            <td>The list of characters can be customized to suit different languages and text structures.</td>
        </tr>
    </tbody>
</table>

### Disadvantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Complexity</span></td>
            <td>Implementing and tuning the splitter for specific use cases can be complex.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Language Specificity</span></td>
            <td>Default settings might not work well for languages without clear word boundaries, requiring additional customization.</td>
        </tr>
    </tbody>
</table>

### Use Cases

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Use Case</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Text Summarization</span></td>
            <td>Breaking down large documents into manageable chunks for summarization.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Search Indexing</span></td>
            <td>Splitting documents into smaller parts for more efficient indexing and retrieval.</td>
        </tr>
    </tbody>
</table>
