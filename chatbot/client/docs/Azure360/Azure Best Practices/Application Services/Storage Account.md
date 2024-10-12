import React from 'react'; import ReactPlayer from 'react-player';

1. An **Azure Storage Account** is a cloud-based service provided by Microsoft
   Azure that offers highly available, secure and scalable storage for various
   types of data

2. It has multiple storage types, including blobs (unstructured data like
   documents and media), files, queues (message storage) and tables (structured
   NoSQL data)

3. Azure Storage Accounts are designed to handle a wide range of data storage
   needs for applications running in the cloud, on-premises, or hybrid
   environments

### When to use Storage Account

Considering selecting an Azure Storage Account for

<table class="table-size-for-cloud-services">
        <thead>
            <tr>
                <th>Deciding Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Storing Large Amounts of Data</span></td>
                <td>Ideal for handling large volumes of unstructured data, such as media files, logs, backups and datasets.</td>
            </tr>
            <tr>
                <td><span class="custom-header">High Availability and Durability Needs</span></td>
                <td>Designed for 99.9% availability and up to 16 nines durability depending on the redundancy option selected.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Cost Efficiency</span></td>
                <td>Offers multiple storage tiers (hot, cool and archive) to optimize costs based on data access frequency.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Flexible Data Access Patterns</span></td>
                <td>Supports a wide range of use cases, from high-throughput analytics to low-latency web applications.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Integration with Azure Services</span></td>
                <td>Seamlessly integrates with other Azure services like Azure Virtual Machines, Azure Functions, Azure App Service and Azure Synapse Analytics.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Data Compliance and Security</span></td>
                <td>Ensures compliance with various regulations and standards (e.g., GDPR, HIPAA) through features like encryption and data protection.</td>
            </tr>
        </tbody>
    </table>

### Key Considerations

#### 1. Types of Storage Accounts

<table class="types-of-storage-accounts">
  <thead>
    <tr>
      <th>Type of Storage Account</th>
      <th>Supported Storage Services</th>
      <th>Redundancy Options</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="custom-header">Standard General-Purpose v2</span></td>
      <td>Blob Storage (including Data Lake Storage), Queue Storage, Table Storage, and Azure Files</td>
      <td>Locally Redundant Storage (LRS) / Geo-Redundant Storage (GRS) / Read-Access Geo-Redundant Storage (RA-GRS) / Zone-Redundant Storage (ZRS) / Geo-Zone-Redundant Storage (GZRS) / Read-Access Geo-Zone-Redundant Storage (RA-GZRS)</td>
      <td>Standard storage account type for blobs, file shares, queues, and tables. Recommended for most scenarios using Azure Storage. If you want support for Network File System (NFS) in Azure Files, use the premium file shares account type</td>
    </tr>
    <tr>
      <td><span class="custom-header">Premium Block Blobs</span></td>
      <td>Blob Storage (including Data Lake Storage)</td>
      <td>LRS / ZRS</td>
      <td>Premium storage account type for block blobs and append blobs. Recommended for scenarios with high transaction rates or that use smaller objects or require consistently low storage latency. [Learn more about example workloads.](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-block-blob-premium)</td>
    </tr>
    <tr>
      <td><span class="custom-header">Premium File Shares</span></td>
      <td>Azure Files</td>
      <td>LRS / ZRS</td>
      <td>Premium storage account type for file shares only. Recommended for enterprise or high-performance scale applications. Use this account type if you want a storage account that supports both Server Message Block (SMB) and NFS file shares.</td>
    </tr>
    <tr>
      <td><span class="custom-header">Premium Page Blobs</span></td>
      <td>Page Blobs Only</td>
      <td>LRS / ZRS</td>
      <td>Premium storage account type for page blobs only. [Learn more about page blobs and their storage accounts.](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-pageblob-overview)</td>
    </tr>
  </tbody>
</table>

#### 2. Performance Tiers

 <table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Hot Tier</span></td>
            <td>Optimized for storing data that is accessed or modified frequently. It has the highest storage costs but the lowest access costs.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Cool Tier</span></td>
            <td>Optimized for storing data that is infrequently accessed or modified. Data should be stored for a minimum of 30 days. It has lower storage costs and higher access costs compared to the hot tier.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Cold Tier</span></td>
            <td>Optimized for storing data that is rarely accessed or modified but requires fast retrieval. Data should be stored for a minimum of 90 days. It has lower storage costs and higher access costs compared to the cool tier.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Archive Tier</span></td>
            <td>Optimized for storing data that is rarely accessed and has flexible latency requirements, on the order of hours. Data should be stored for a minimum of 180 days.</td>
        </tr>
    </tbody>
</table>

#### 3. Redundancy Options

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Locally Redundant Storage (LRS)</span></td>
            <td>Replicates your storage account three times within a single data center in the primary region.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Zone-Redundant Storage (ZRS)</span></td>
            <td>Replicates your storage account synchronously across three Azure availability zones in the primary region.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Geo-Redundant Storage (GRS)</span></td>
            <td>Copies data synchronously three times within a single physical location in the primary region using LRS, then copies data asynchronously to a single physical location in the secondary region. Within the secondary region, your data is copied synchronously three times using LRS.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Geo-Zone-Redundant Storage (GZRS)</span></td>
            <td>Copies your data synchronously across three Azure availability zones in the primary region using ZRS. It then copies your data asynchronously to a single physical location in the secondary region. Within the secondary region, your data is copied synchronously three times using LRS.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Read-Access Geo-Redundant Storage (RA-GRS)</span></td>
            <td>Same as GRS, with read access to the secondary region. <a href="https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy" target="_blank">Learn more</a>.</td>
        </tr>
    </tbody>
</table>

#### 4. Access Controls

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Network Restrictions</span></td>
            <td>Use firewalls, virtual network (VNet) service endpoints, or private endpoints to restrict access.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Identity-Based Access</span></td>
            <td>Leverage Microsoft Entra ID for secure, managed identity access.</td>
        </tr>
    </tbody>
</table>

### Best Practices

#### 1. Network Security

<table class=" table-size-for-cloud-services">
        <thead>
            <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Network Restrictions</span></td>
                <td>Use firewall rules, virtual network (VNet) service endpoints to restrict access to the storage account.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Private Endpoints</span></td>
                <td>Configure private endpoints to ensure that traffic between your VNet and Azure Storage travels over the Azure backbone network.</td>
            </tr>
        </tbody>
    </table>

#### 2. Data Encryption

<table class=" table-size-for-cloud-services">
        <thead>
             <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">At Rest</span></td>
                <td>Azure Storage automatically encrypts data at rest using Storage Service Encryption (SSE) with 256-bit AES encryption.</td>
            </tr>
            <tr>
                <td><span class="custom-header">In Transit</span></td>
                <td>Use HTTPS to ensure secure data transfer over the network.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Customer-Managed Keys</span></td>
                <td>Use Azure Key Vault to manage encryption keys.</td>
            </tr>
        </tbody>
    </table>

#### 3. Access Control

<table class=" table-size-for-cloud-services">
        <thead>
             <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Shared Access Signatures (SAS)</span></td>
                <td>Use SAS tokens to grant limited access to resources without exposing your storage account keys. Note: Always use RBAC-based access to the storage account over SAS.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Role-Based Access Control (RBAC)</span></td>
                <td>Implement RBAC to control access to resources within the storage account.</td>
            </tr>
        </tbody>
    </table>

#### 4. Data Protection

<table class=" table-size-for-cloud-services"> 
        <thead>
             <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Soft Delete</span></td>
                <td>Enable soft delete for blobs and files to recover deleted data.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Versioning</span></td>
                <td>Enable versioning to keep track of changes to blobs and recover previous versions if needed.</td>
            </tr>
        </tbody>
    </table>

#### 5. Monitoring and Alerts

<table class=" table-size-for-cloud-services">
        <thead>
             <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Azure Monitor</span></td>
                <td>Use Azure Monitor to track metrics and set up alerts for storage account performance and health.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Activity Logs</span></td>
                <td>Monitor activity logs to track operations and diagnose issues.</td>
            </tr>
        </tbody>
    </table>

#### 6. Configuration

<table class=" table-size-for-cloud-services">
        <thead>
             <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Replication Strategy</span></td>
                <td>Choose the appropriate redundancy option based on your disaster recovery and high availability needs.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Access Tiers</span></td>
                <td>Select the access tier that aligns with your access patterns and cost considerations.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Geo-Replication</span></td>
                <td>Decide if geo-replication is necessary based on your data residency and compliance requirements.</td>
            </tr>
        </tbody>
    </table>

#### 7. Cost Management

<table class=" table-size-for-cloud-services">
        <thead>
            <tr>
                <th>Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Storage Costs</span></td>
                <td>Monitor and manage costs based on the storage tier and redundancy option selected.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Lifecycle Management</span></td>
                <td>Implement lifecycle management policies to move data to lower-cost storage tiers or delete data automatically.</td>
            </tr>
        </tbody>
    </table>


### Learn more about Storage Account

:::info

1. Learn more about
   [Azure blob storage documentation](https://learn.microsoft.com/en-us/azure/storage/blobs/)

2. Learn more about
   [Azure storage RBAC roles assignment](https://learn.microsoft.com/en-us/azure/storage/blobs/authorize-access-azure-active-directory)

3. Learn more about
   [Azure Identity client library](https://learn.microsoft.com/en-us/azure/storage/blobs/authorize-access-azure-active-directory#azure-identity-client-library)

4. Learn more about
   [Azure storage account encryption](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption)

5. Learn more about
   [Azure Storage Account availability & disaster recovery ](https://learn.microsoft.com/en-us/azure/storage/common/geo-redundant-design)

6. Learn more about
   [Azure storage account lifecycle management policy](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)
   :::
