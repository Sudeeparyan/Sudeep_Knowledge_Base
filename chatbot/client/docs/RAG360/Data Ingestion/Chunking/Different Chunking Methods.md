1. [Blog - pinecone](https://www.pinecone.io/learn/chunking-strategies/)

2. [Youtube - 5 levels of chunking](https://youtu.be/8OJC21T2SL4?si=ANpHYbWrnbM9NAwn)

3. Fixed chunking

   1. `Level 1` - split by number of words/lines/pages

4. Context aware chunking - split by paragraphs/sentences/meaningful blocks of
   text
5. `Level 2` - langchain's
   [recursiveCharacterTextSplitter](#recursiveCharacterTextSplitter)
6. `Level 3` - Document Specific chunking (Recursive markdown splitter , pdf
   parser)
7. `Level 4` - Semantic chunking - use embedding distance to decide if we can
   combine two chunks instead of chunk length
8. `Level 5` - Agentic chunking -
   [propositional retriever](https://python.langchain.com/docs/templates/propositional-retrieval)

### Recommended

1. Chunking with manually adding delimiter !@ (context aware chunking) is good
   for fixed and small set of documents

2. If any huge documents comes in or we plan a feature for user uploading a
   document , we need to go for a automated chunking approach where we can use
   `LayoutPDFParser` and `recursiveCharacterTextSplitter`. Work fine for normal
   documents

3. In case of `recursiveCharacterTextSplitter` we need to find a good
   `chunk size`
