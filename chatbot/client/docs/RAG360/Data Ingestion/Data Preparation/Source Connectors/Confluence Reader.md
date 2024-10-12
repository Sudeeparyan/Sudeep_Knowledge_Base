1. The Confluence Loader allows users to load pages from a Confluence cloud
   instance by specifying the base URL (must end with `/wiki`).

2. Users can authenticate using OAuth 2.0 credentials or environment variables.
   If no credentials are provided, the loader will check for the following
   environment variables in order:

   1. **OAuth 2.0 credentials**
   2. **API Token (CONFLUENCE_API_TOKEN)**
   3. **Username and Password (CONFLUENCE_USERNAME and CONFLUENCE_PASSWORD)**

:::info 
The `CONFLUENCE_PASSWORD` should be an API Token, not your actual
password. API Tokens can be obtained
[here](https://id.atlassian.com/manage-profile/security/api-tokens).
 :::

#### Methods to Load Confluence Pages

Confluence pages can be loaded in four ways:

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Method</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">page_ids</span></td>
            <td>Load pages based on a list of specific page IDs. Optionally, set <code>include_children</code> to load all descendant pages.</td>
        </tr>
        <tr>
            <td><span class="custom-header">space_key</span></td>
            <td>Load all pages within a specified space. You can further filter by <code>page_status</code> (e.g., 'current', 'archived', 'draft').</td>
        </tr>
        <tr>
            <td><span class="custom-header">label</span></td>
            <td>Load all pages with a specific label.</td>
        </tr>
        <tr>
            <td><span class="custom-header">CQL (Confluence Query Language)</span></td>
            <td>Load pages that match a specific CQL query. Learn more about CQL <a href="https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/" target="_blank">here</a>.</td>
        </tr>
    </tbody>
</table>

#### Additional Configuration Options

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">max_num_results (int)</span></td>
            <td>Specifies the maximum number of results to return. If set to <code>None</code>, all results are returned.</td>
        </tr>
        <tr>
            <td><span class="custom-header">start (int)</span></td>
            <td>Sets the offset for loading pages when using <code>space_key</code>.</td>
        </tr>
        <tr>
            <td><span class="custom-header">cursor (str)</span></td>
            <td>An alternative to <code>start</code> for CQL queries; it serves as a pointer to the next "page" in search results.</td>
        </tr>
    </tbody>
</table>

#### Attachments

    1. Users can include attachments by setting `include_attachments` to `True`.

    2. Supported attachment types include PDF, PNG, JPEG/JPG, SVG, Word, and Excel.

    3. The loader will extract text from these attachments and add it to the Document object.

:::tip 

The `space_key` and `page_id` can be found in the URL of a Confluence
page (e.g.,
`https://yoursite.atlassian.com/wiki/spaces/<space_key>/pages/<page_id>`). 
:::

### Learn more about Confluence Reader

:::info 

For more information on authenticating with OAuth 2.0, visit: 
1. [Atlassian Python API Documentation](https://atlassian-python-api.readthedocs.io/index.html) 
2. [Atlassian Developer Guide for OAuth 2.0](https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/)
:::

### Example

Reading the pages with the page_id

```js
from llama_index.readers.confluence import ConfluenceReader

token = {"access_token": "<access_token>", "token_type": "<token_type>"}
oauth2_dict = {"client_id": "<client_id>", "token": token}

base_url = "https://yoursite.atlassian.com/wiki"

page_ids = ["<page_id_1>", "<page_id_2>", "<page_id_3"]
space_key = "<space_key>"

reader = ConfluenceReader(base_url=base_url, oauth2=oauth2_dict)
documents = reader.load_data(
    space_key=space_key, include_attachments=True, page_status="current"
)
documents.extend(
    reader.load_data(
        page_ids=page_ids, include_children=True, include_attachments=True
    )
)
```

### Reference Link

:::info 
For more Hands on Example Refer this
[Link](https://llamahub.ai/l/readers/llama-index-readers-confluence?from=) 
:::
