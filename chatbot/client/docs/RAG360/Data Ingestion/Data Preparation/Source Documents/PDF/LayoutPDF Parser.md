Convert PDF to structured data , with layout (Heirarchy of contents)

### Advantages

1. PDF to structured data
   1. support for tables (Note : if there are list inside a table cell , each
      list item gets moved to new cells)
      1. tables will be available in `markdown` and `html`
2. structured data to
   1. `html` , `JSON`
   2. text chunks (with each chunk will have its path)

### Disadvantages

1. Upload document to their server (the documentation says it will only be used
   for processing and
   [not stored](https://github.com/nlmatics/llmsherpa#:~:text=The%20server%20does%20not%20store%20your%20PDFs%20except%20for%20temporary%20storage%20during%20parsing))
2. Unstable ( released less than a week ago as of 21/10/23)

### Reference

:::info 
Learn more about [Llmsherpa](https://github.com/nlmatics/llmsherpa) 
:::
