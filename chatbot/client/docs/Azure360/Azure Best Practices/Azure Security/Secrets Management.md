Secrets Management refers to the process of securely storing, managing and
accessing sensitive information such as `API keys`, `passwords`, `tokens`,
`certificates` and other confidential data.

    1. 🛡️ <span class="custom-header">**Protection**</span>  The goal is to protect these secrets from unauthorized access while ensuring they are available to authorized applications and services when needed.

    2. 🔒 <span class="custom-header">**Security**</span>
        Effective secrets management is crucial for maintaining the security and integrity of applications.

### Traditional Identity Management

Traditionally, secrets like `tokens`, `API keys` and `passwords` were embedded
directly into `application code`, stored in `configuration files` or
`environment variables`.

1. ⚠️ <span class="custom-header">**Security Risks** </span> This approach posed
   significant security risks, as secrets could easily be exposed through source
   code leaks, configuration mishandling or unauthorized access to the storage
   locations.

:::info[Remediation with Azure Key Vault 🔑] 
To remediate this situation, we use
Azure Key Vault to securely store and manage secrets, encryption keys and certificates.

1. 🛡️ <span class="custom-header">**Centralized Management**</span> Azure Key
   Vault provides a centralized and secure way to manage access to secrets,
   reducing the risks associated with hardcoding or manually managing sensitive
   information.

2. 🔄 <span class="custom-header">**Access Management** </span> While developers
   can securely store the secrets in
   [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview),
   services still need a way to access Azure Key Vault by using `API Keys` or
   `tokens`. 
:::

### Recommended way of Identity Management

1. The recommended way for managing identity now is `Azure Managed Identity`

2. [Azure Managed Identity](https://www.youtube.com/watch?v=vYUKC0mZFqI) is a
   service that simplifies secrets management by automatically managing the
   identity for Azure resources, eliminating the need to store credentials in
   code.

3. Managed Identity provides a secure and streamlined way for Azure services to
   authenticate to other services that support Entra ID (Azure AD)
   authentication.

### Types of Azure Managed Identity

<table class="combine-table">
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>System-Assigned Managed Identity</td>
    <td>
      <strong><span class="custom-header">Automatic Creation</span></strong>: Automatically created and managed by Azure for a specific single resource (e.g., a virtual machine or Azure function).

      <strong><span class="custom-header">Lifecycle Tied</span></strong>: The identity is tied to the lifecycle of the resource; it is created when the resource is created and deleted when the resource is deleted.

      <strong><span class="custom-header">Ideal Use</span></strong>: Ideal for scenarios where the identity is only needed for a specific resource and you want Azure to manage it automatically.
    </td>

  </tr>
  <tr>
    <td>User-Assigned Managed Identity</td>
    <td>
      <strong><span class="custom-header">Independent Creation</span></strong>: Created as an independent Azure resource that can be assigned to multiple Azure resources.

      <strong><span class="custom-header">Independent Lifecycle</span></strong>: The identity exists independently of the resources it’s assigned to, allowing for greater flexibility and reuse.

      <strong><span class="custom-header">Ideal Use</span></strong>: Useful when you need a consistent identity across multiple resources or want to manage the identity independently of the associated resources.
    </td>

  </tr>
</table>

### Recommendation

1. It is highly recommended that only **Managed Identity be used for Azure
   resources**.

2. Use traditional methods such as tokens or API keys only when there is a
   specific, valid reason that Managed Identity cannot fulfill.

3. <span class="custom-header">**Examples** </span>
   1. Legacy systems that do not support Entra ID authentication.
   2. Third-party services that require API keys.

### How to use Managed Identity

:::info

1. Learn about Managed Identity and how it simplifies secrets management for
   Azure resources
   **[Managed Identity Overview](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/)**

2. A guide on creating Managed Identities and using them in your code
   **[Creating and Using Managed Identity in Code](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview-for-developers?tabs=portal%2Cdotnet)**

3. How to use the Azure SDK Python package to work with Managed Identities
   **[Azure SDK Python Package](https://learn.microsoft.com/en-us/python/api/overview/azure/identity-readme?view=azure-python)**  
   :::
