1. The SharePoint Reader is a specialized connector in Retrieval Augmented
   Generation (RAG) systems, designed to automatically extract and integrate
   data from SharePoint, a popular platform for enterprise content management.

2. It retrieves `documents`, `lists` and `metadata`, ensuring they are
   accessible for processing and analysis within the RAG system.

3. In organizations where SharePoint is essential for managing operations and
   documents, the SharePoint Reader plays a critical role in transforming stored
   data into actionable insights that support decision-making.

### Why We Need a SharePoint Reader

#### SharePoint Loader Overview

The SharePoint Loader is designed to load files from a folder on a SharePoint
site. It supports traversing through sub-folders recursively.

#### Prerequisites

To use this loader, you must set up app authentication using **Microsoft Entra
ID** (formerly Azure AD). Follow these steps:

1. **Create an App Registration** in Microsoft Entra ID.
2. **Set API Permissions** for the app:

   1. Microsoft Graph --> Application Permissions --> **Sites.ReadAll** (Admin
      consent required)
   2. Microsoft Graph --> Application Permissions --> **Files.ReadAll** (Admin
      consent required)
   3. Microsoft Graph --> Application Permissions -->
      **BrowserSiteLists.Read.All** (Admin consent required)

For more details on Microsoft Graph APIs, you can refer
[here](https://learn.microsoft.com/en-us/graph/overview).

#### Usage

To use the SharePoint Loader, you need the following credentials from the
registered app in the Microsoft Azure Portal:

1. **client_id**
2. **client_secret**
3. **tenant_id**

### Example

If you want to load files from a folder named "Test" under the root directory of
a SharePoint site, set the `file_path` to `Test`.

```js
from llama_index.readers.microsoft_sharepoint import SharePointReader

loader = SharePointReader(
    client_id="<Client ID of the app>",
    client_secret="<Client Secret of the app>",
    tenant_id="<Tenant ID of the Microsoft Azure Directory>",
)

documents = loader.load_data(
    sharepoint_site_name="<Sharepoint Site Name>",
    sharepoint_folder_path="<Folder Path>",
    recursive=True,
)
```

The loader will then load all files in that folder and can also search through
any sub-folders if needed.

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
            <td><span class="custom-header">Customized Data Extraction</span></td>
            <td>Can be configured to selectively extract data based on document types, metadata fields, or specific SharePoint sites and libraries.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Real-Time Data Sync</span></td>
            <td>Offers capabilities to sync data in real-time or at scheduled intervals, ensuring that the RAG system always has access to the most up-to-date data.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Secure Data Handling</span></td>
            <td>Maintains high standards of security, ensuring that data integrity and access controls are preserved during extraction.</td>
        </tr>
    </tbody>
</table>

### References

:::info

1. [Hands-On Share Point Reader](https://ashiqf.com/2021/03/15/how-to-use-microsoft-graph-sharepoint-sites-selected-application-permission-in-a-azure-ad-application-for-more-granular-control/)

2. [LlamaHub SharePoint Examples](https://llamahub.ai/l/readers/llama-index-readers-microsoft-sharepoint?from=)

:::
